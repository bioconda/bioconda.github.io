:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellmapperdata'
.. highlight: bash

bioconductor-cellmapperdata
===========================

.. conda:recipe:: bioconductor-cellmapperdata
   :replaces_section_title:
   :noindex:

   Pre\-processed data for use with the CellMapper package

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/CellMapperData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellmapperdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapperdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapperdata/meta.yaml>`_

   Experiment data package. Contains microarray data from several large expression compendia that have been pre\-processed for use with the CellMapper package. This pre\-processed data is recommended for routine searches using the CellMapper package.


.. conda:package:: bioconductor-cellmapperdata

   |downloads_bioconductor-cellmapperdata| |docker_bioconductor-cellmapperdata|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      

   
   :depends bioconductor-cellmapper: ``>=1.20.0,<1.21.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellmapperdata

   and update with::

      conda update bioconductor-cellmapperdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellmapperdata:<tag>

   (see `bioconductor-cellmapperdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellmapperdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmapperdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellmapperdata
   :alt:   (downloads)
.. |docker_bioconductor-cellmapperdata| image:: https://quay.io/repository/biocontainers/bioconductor-cellmapperdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmapperdata
.. _`bioconductor-cellmapperdata/tags`: https://quay.io/repository/biocontainers/bioconductor-cellmapperdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellmapperdata";
        var versions = ["1.20.0","1.18.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmapperdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmapperdata/README.html