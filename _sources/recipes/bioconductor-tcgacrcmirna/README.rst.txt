:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgacrcmirna'
.. highlight: bash

bioconductor-tcgacrcmirna
=========================

.. conda:recipe:: bioconductor-tcgacrcmirna
   :replaces_section_title:
   :noindex:

   TCGA CRC 450 miRNA dataset

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/TCGAcrcmiRNA.html
   :license: GPL-2
   :recipe: /`bioconductor-tcgacrcmirna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgacrcmirna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgacrcmirna/meta.yaml>`_

   colorectal cancer miRNA profile provided by TCGA


.. conda:package:: bioconductor-tcgacrcmirna

   |downloads_bioconductor-tcgacrcmirna| |docker_bioconductor-tcgacrcmirna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
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

      mamba install bioconductor-tcgacrcmirna

   and update with::

      mamba update bioconductor-tcgacrcmirna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tcgacrcmirna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgacrcmirna:<tag>

   (see `bioconductor-tcgacrcmirna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgacrcmirna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgacrcmirna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgacrcmirna
   :alt:   (downloads)
.. |docker_bioconductor-tcgacrcmirna| image:: https://quay.io/repository/biocontainers/bioconductor-tcgacrcmirna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgacrcmirna
.. _`bioconductor-tcgacrcmirna/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgacrcmirna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcgacrcmirna";
        var versions = ["1.20.0","1.18.0","1.14.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgacrcmirna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgacrcmirna/README.html