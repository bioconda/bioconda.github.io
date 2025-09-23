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
      
      

      ``3.0.7-1``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``

      

   
   :depends biopython: ``>=1.83,<2``
   :depends hmmer: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: ``>=3.5.3,<3.6``
   :depends numpy: ``>=1.21.6,<1.27``
   :depends pandas: ``>=1.5.3,<1.6``
   :depends pomegranate: ``>=0.14.8,<=0.14.9``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pytorch: ``>=1.11.0,<=1.13.1``
   :depends requests: ``>=2.31.0,<2.32``
   :depends scikit-learn: ``1.0.2``
   :depends scipy: ``1.12.0``
   :depends t-coffee: 
   :depends urllib3: ``>=1.26.6,<1.27``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install b2btools

   and update with::

      mamba update b2btools

  To create a new environment, run::

      mamba create --name myenvname b2btools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/b2btools:<tag>

   (see `b2btools/tags`_ for valid values for ``<tag>``)


.. |downloads_b2btools| image:: https://img.shields.io/conda/dn/bioconda/b2btools.svg?style=flat
   :target: https://anaconda.org/bioconda/b2btools
   :alt:   (downloads)
.. |docker_b2btools| image:: https://quay.io/repository/biocontainers/b2btools/status
   :target: https://quay.io/repository/biocontainers/b2btools
.. _`b2btools/tags`: https://quay.io/repository/biocontainers/b2btools?tab=tags


.. raw:: html

    <script>
        var package = "b2btools";
        var versions = ["3.0.7","3.0.7","3.0.6","3.0.5","3.0.4"];
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