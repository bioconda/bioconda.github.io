:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geotcgadata'
.. highlight: bash

bioconductor-geotcgadata
========================

.. conda:recipe:: bioconductor-geotcgadata
   :replaces_section_title:
   :noindex:

   Processing Various Types of Data on GEO and TCGA

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GeoTcgaData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geotcgadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geotcgadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geotcgadata/meta.yaml>`_

   Gene Expression Omnibus\(GEO\) and The Cancer Genome Atlas \(TCGA\) provide us with a wealth of data\, such as RNA\-seq\, DNA Methylation\, SNP and Copy number variation data. It\'s easy to download data from TCGA using the gdc tool\, but processing these data into a format suitable for bioinformatics analysis requires more work. This R package was developed to handle these data.


.. conda:package:: bioconductor-geotcgadata

   |downloads_bioconductor-geotcgadata| |docker_bioconductor-geotcgadata|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends bioconductor-cqn: ``>=1.46.0,<1.47.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-topconfects: ``>=1.16.0,<1.17.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geotcgadata

   and update with::

      conda update bioconductor-geotcgadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geotcgadata:<tag>

   (see `bioconductor-geotcgadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geotcgadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geotcgadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geotcgadata
   :alt:   (downloads)
.. |docker_bioconductor-geotcgadata| image:: https://quay.io/repository/biocontainers/bioconductor-geotcgadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geotcgadata
.. _`bioconductor-geotcgadata/tags`: https://quay.io/repository/biocontainers/bioconductor-geotcgadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geotcgadata";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geotcgadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geotcgadata/README.html