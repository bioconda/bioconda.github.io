:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgamethylation450k'
.. highlight: bash

bioconductor-tcgamethylation450k
================================

.. conda:recipe:: bioconductor-tcgamethylation450k
   :replaces_section_title:
   :noindex:

   The Cancer Genome Atlas Illumina 450k methylation example data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/TCGAMethylation450k.html
   :license: GPL-2
   :recipe: /`bioconductor-tcgamethylation450k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgamethylation450k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgamethylation450k/meta.yaml>`_

   The Cancer Genome Atlas \(TCGA\) is applying genomics technologies to over 20 different types of cancer.  This package contains a small set of 450k array data in idat format.


.. conda:package:: bioconductor-tcgamethylation450k

   |downloads_bioconductor-tcgamethylation450k| |docker_bioconductor-tcgamethylation450k|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-tcgamethylation450k

   and update with::

      mamba update bioconductor-tcgamethylation450k

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tcgamethylation450k

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgamethylation450k:<tag>

   (see `bioconductor-tcgamethylation450k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgamethylation450k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgamethylation450k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgamethylation450k
   :alt:   (downloads)
.. |docker_bioconductor-tcgamethylation450k| image:: https://quay.io/repository/biocontainers/bioconductor-tcgamethylation450k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgamethylation450k
.. _`bioconductor-tcgamethylation450k/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgamethylation450k?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcgamethylation450k";
        var versions = ["1.36.0","1.33.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgamethylation450k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgamethylation450k/README.html