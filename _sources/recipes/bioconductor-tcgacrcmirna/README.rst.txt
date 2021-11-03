:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgacrcmirna'
.. highlight: bash

bioconductor-tcgacrcmirna
=========================

.. conda:recipe:: bioconductor-tcgacrcmirna
   :replaces_section_title:
   :noindex:

   TCGA CRC 450 miRNA dataset

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/TCGAcrcmiRNA.html
   :license: GPL-2
   :recipe: /`bioconductor-tcgacrcmirna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgacrcmirna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgacrcmirna/meta.yaml>`_

   colorectal cancer miRNA profile provided by TCGA


.. conda:package:: bioconductor-tcgacrcmirna

   |downloads_bioconductor-tcgacrcmirna| |docker_bioconductor-tcgacrcmirna|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgacrcmirna

   and update with::

      conda update bioconductor-tcgacrcmirna

   or use the docker container::

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
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.9.0"];
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