:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'constava'
.. highlight: bash

constava
========

.. conda:recipe:: constava
   :replaces_section_title:
   :noindex:

   Calculate conformational states probability and variability from a protein structure ensemble

   :homepage: https://github.com/bio2byte/constava
   :documentation: https://pypi.org/project/constava/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`constava <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constava>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/constava/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqae082`

   Constava analyzes conformational ensembles calculating conformational state propensities and
   conformational state variability. The conformational state propensities indicate the likelihood
   of a residue residing in a given conformational state\, while the conformational state variability
   is a measure of the residues ability to transition between conformational states.

   Each conformational state is a statistical model of based on the backbone dihedrals \(phi\, psi\). The
   default models were derived from an analysis of NMR ensembles and chemical shifts. To analyze a
   conformational ensemble\, the phi\- and psi\-angles for each conformational state in the ensemble
   need to be provided.

   As input data Constava needs the backbone dihedral angles extracted from the conformational ensemble.
   These dihedrals can be obtained using GROMACS\' gmx chi module \(set \`\-\-input\-format\=xvg\`\)
   or using the constava dihedrals submodule\, which supports a wide range of MD and structure formats.

   The software is subdivided in three submodules\:

   The constava dihedrals submodule provides a simple way to extract backbone dihedral angles from MD
   simulations or PDB ensembles. For more information run\: \`constava dihedrals \-h\`. Alternatively\,
   the backbone dihedrals may be extracted with GROMACS\' gmx chi module.

   The constava analyze submodule analyzes the provided backbone dihedral angles and infers
   the propensities for each residue to reside in a given conformational state. For more information run\:
   \`constava analyze \-h\`.

   The constava fit\-model can be used to train a custom probabilistic model of conformational states. The
   default models were derived from an analysis of NMR ensembles and chemical shifts\; they cover six
   conformational states\:

   1. Core Helix \- Exclusively alpha\-helical\, low backbone dynamics
   2. Surrounding Helix \- Mostly alpha\-helical\, high backbone dynamics
   3. Core Sheet \- Exclusively beta\-sheet\, low backbone dynamics
   4. Surrounding Sheet \- Mostly extended conformation\, high backbone dynamics
   5. Turn \- Mostly turn\, high backbone dynamics
   6. Other \- Mostly coil\, high backbone dynamics

   For more information run\: \`constava fit\-model \-h\`.

   This software tool has been developed by the Bio2Byte research group at Vrije Universiteit Brussel \(VUB\)
   in Belgium and it is distributed under the GNU General Public License v3 \(GPLv3\) License.

   Please cite\:

   Jose Gavalda\-Garcia\, David Bickel\, Joel Roca\-Martinez\, Daniele Raimondi\, Gabriele Orlando\, Wim Vranken\,
   Data\-driven probabilistic definition of the low energy conformational states of protein residues\,
   NAR Genomics and Bioinformatics\, Volume 6\, Issue 3\, September 2024\, lqae082\,
   https\:\/\/doi.org\/10.1093\/nargab\/lqae082 \(Published\: 09 July 2024\)

   Contact us\: \<bio2byte\@vub.be\> or \<wim.vranken\@vub.be\>



.. conda:package:: constava

   |downloads_constava| |docker_constava|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on mdanalysis: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.8``
   :depends on scikit-learn: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install constava

to add into an existing workspace instead, run::

    pixi add constava

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install constava

Alternatively, to install into a new environment, run::

    conda create -n envname constava

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/constava:<tag>

(see `constava/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_constava| image:: https://img.shields.io/conda/dn/bioconda/constava.svg?style=flat
   :target: https://anaconda.org/bioconda/constava
   :alt:   (downloads)
.. |docker_constava| image:: https://quay.io/repository/biocontainers/constava/status
   :target: https://quay.io/repository/biocontainers/constava
.. _`constava/tags`: https://quay.io/repository/biocontainers/constava?tab=tags


.. raw:: html

    <script>
        var package = "constava";
        var versions = ["1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/constava/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/constava/README.html