:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgacrcmrna'
.. highlight: bash

bioconductor-tcgacrcmrna
========================

.. conda:recipe:: bioconductor-tcgacrcmrna
   :replaces_section_title:
   :noindex:

   TCGA CRC 450 mRNA dataset

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/TCGAcrcmRNA.html
   :license: GPL-2
   :recipe: /`bioconductor-tcgacrcmrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgacrcmrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgacrcmrna/meta.yaml>`_

   colorectal cancer mRNA profile provided by TCGA


.. conda:package:: bioconductor-tcgacrcmrna

   |downloads_bioconductor-tcgacrcmrna| |docker_bioconductor-tcgacrcmrna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-data-packages: ``>=20221104``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgacrcmrna

   and update with::

      conda update bioconductor-tcgacrcmrna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgacrcmrna:<tag>

   (see `bioconductor-tcgacrcmrna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgacrcmrna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgacrcmrna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgacrcmrna
   :alt:   (downloads)
.. |docker_bioconductor-tcgacrcmrna| image:: https://quay.io/repository/biocontainers/bioconductor-tcgacrcmrna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgacrcmrna
.. _`bioconductor-tcgacrcmrna/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgacrcmrna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcgacrcmrna";
        var versions = ["1.18.0","1.14.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgacrcmrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgacrcmrna/README.html