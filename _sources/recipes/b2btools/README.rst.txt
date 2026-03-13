:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'b2btools'
.. highlight: bash

b2btools
========

.. conda:recipe:: b2btools
   :replaces_section_title:
   :noindex:

   The bio2Byte software suite to predict protein biophysical properties.

   :homepage: https://bio2byte.be/b2btools
   :developer docs: https://bitbucket.org/bio2byte/b2btools_releases
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`b2btools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2btools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2btools/meta.yaml>`_
   :links: doi: :doi:`10.48550/arXiv.2405.02136`, biotools: :biotools:`b2btools`

   This package provides you with structural predictions for protein sequences made by the Bio2Byte group which researches the relation between protein sequence and biophysical behavior.

   List of available predictors\:
   1. Dynamine\: Fast predictor of protein backbone dynamics using only sequence information as input. The version here also predicts side\-chain dynamics and secondary structure predictors using the same principle.
   2. Disomine\: Predicts protein disorder with recurrent neural networks not directly from the amino acid sequence\, but instead from more generic predictions of key biophysical properties\, here protein dynamics\, secondary structure\, and early folding.
   3. EfoldMine\: Predicts from the primary amino acid sequence of a protein\, which amino acids are likely involved in early folding events.
   4. AgMata\: Single\-sequence\-based predictor of protein regions that are likely to cause beta\-aggregation.
   5. PSPer\: PSP \(Phase Separating Protein\) predicts whether a protein is likely to phase\-separate with a particular mechanism involving RNA interacts \(FUS\-like proteins\).
   6. ShiftCrypt\: Auto\-encoding NMR chemical shifts from their native vector space to a residue\-level biophysical index.



.. conda:package:: b2btools

   |downloads_b2btools| |docker_b2btools|

   :versions:
      
      

      ``3.0.7-3``,  ``3.0.7-2``,  ``3.0.7-1``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``

      

   
   :depends on biopython: ``>=1.83,<2``
   :depends on hmmer: 
   :depends on joblib: ``>=0.9.0b4``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on matplotlib-base: ``>=3.5.3,<3.6``
   :depends on networkx: ``>=2.4``
   :depends on numpy: ``>=1.21.6,<1.27``
   :depends on numpy: ``>=1.26.4,<2.0a0``
   :depends on pandas: ``>=1.5.3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pytorch: ``>=1.11.0,<=1.13.1``
   :depends on pyyaml: 
   :depends on requests: ``>=2.31.0,<2.32``
   :depends on scikit-learn: ``1.0.2``
   :depends on scipy: ``1.12.0``
   :depends on t-coffee: 
   :depends on urllib3: ``>=1.26.6,<1.27``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install b2btools

to add into an existing workspace instead, run::

    pixi add b2btools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install b2btools

Alternatively, to install into a new environment, run::

    conda create -n envname b2btools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/b2btools:<tag>

(see `b2btools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_b2btools| image:: https://img.shields.io/conda/dn/bioconda/b2btools.svg?style=flat
   :target: https://anaconda.org/bioconda/b2btools
   :alt:   (downloads)
.. |docker_b2btools| image:: https://quay.io/repository/biocontainers/b2btools/status
   :target: https://quay.io/repository/biocontainers/b2btools
.. _`b2btools/tags`: https://quay.io/repository/biocontainers/b2btools?tab=tags


.. raw:: html

    <script>
        var package = "b2btools";
        var versions = ["3.0.7","3.0.7","3.0.7","3.0.7","3.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/b2btools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/b2btools/README.html