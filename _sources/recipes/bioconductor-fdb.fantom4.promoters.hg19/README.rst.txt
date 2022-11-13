:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.fantom4.promoters.hg19'
.. highlight: bash

bioconductor-fdb.fantom4.promoters.hg19
=======================================

.. conda:recipe:: bioconductor-fdb.fantom4.promoters.hg19
   :replaces_section_title:
   :noindex:

   Annotation package for FANTOM4 promoters identified from THP\-1 cells

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/FDb.FANTOM4.promoters.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.fantom4.promoters.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.fantom4.promoters.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.fantom4.promoters.hg19/meta.yaml>`_

   FANTOM4 promoters\, liftOver\'ed from hg18 to hg19\, CpGs quantified


.. conda:package:: bioconductor-fdb.fantom4.promoters.hg19

   |downloads_bioconductor-fdb.fantom4.promoters.hg19| |docker_bioconductor-fdb.fantom4.promoters.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-10</code>,  <code>1.0.0-9</code>,  <code>1.0.0-8</code>,  <code>1.0.0-7</code>,  <code>1.0.0-6</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  </span></summary>
      

      ``1.0.0-10``,  ``1.0.0-9``,  ``1.0.0-8``,  ``1.0.0-7``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fdb.fantom4.promoters.hg19

   and update with::

      conda update bioconductor-fdb.fantom4.promoters.hg19

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fdb.fantom4.promoters.hg19:<tag>

   (see `bioconductor-fdb.fantom4.promoters.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fdb.fantom4.promoters.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.fantom4.promoters.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.fantom4.promoters.hg19
   :alt:   (downloads)
.. |docker_bioconductor-fdb.fantom4.promoters.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.fantom4.promoters.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.fantom4.promoters.hg19
.. _`bioconductor-fdb.fantom4.promoters.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.fantom4.promoters.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fdb.fantom4.promoters.hg19";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.fantom4.promoters.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.fantom4.promoters.hg19/README.html