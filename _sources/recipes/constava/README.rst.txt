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
      
      

      ``1.1.0-0``

      

   
   :depends matplotlib-base: 
   :depends mdanalysis: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends scikit-learn: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install constava

   and update with::

      mamba update constava

  To create a new environment, run::

      mamba create --name myenvname constava

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/constava:<tag>

   (see `constava/tags`_ for valid values for ``<tag>``)


.. |downloads_constava| image:: https://img.shields.io/conda/dn/bioconda/constava.svg?style=flat
   :target: https://anaconda.org/bioconda/constava
   :alt:   (downloads)
.. |docker_constava| image:: https://quay.io/repository/biocontainers/constava/status
   :target: https://quay.io/repository/biocontainers/constava
.. _`constava/tags`: https://quay.io/repository/biocontainers/constava?tab=tags


.. raw:: html

    <script>
        var package = "constava";
        var versions = ["1.1.0"];
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