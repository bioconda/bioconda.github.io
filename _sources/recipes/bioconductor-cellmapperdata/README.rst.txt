.. title:: Package Recipe 'bioconductor-cellmapperdata'
.. highlight: bash


bioconductor-cellmapperdata
===========================

.. conda:recipe:: bioconductor-cellmapperdata
   :replaces_section_title:

   Experiment data package. Contains microarray data from several large expression compendia that have been pre\-processed for use with the CellMapper package. This pre\-processed data is recommended for routine searches using the CellMapper package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/CellMapperData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellmapperdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapperdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapperdata/meta.yaml>`_

   


.. conda:package:: bioconductor-cellmapperdata

   |downloads_bioconductor-cellmapperdata| |docker_bioconductor-cellmapperdata|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-cellmapper` >=1.8.0,<1.9.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-cellmapperdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellmapperdata

   and update with::

      conda update bioconductor-cellmapperdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cellmapperdata


.. |required_by_bioconductor-cellmapperdata| conda:required_by:: bioconductor-cellmapperdata
.. |downloads_bioconductor-cellmapperdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmapperdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cellmapperdata| image:: https://quay.io/repository/biocontainers/bioconductor-cellmapperdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmapperdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmapperdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmapperdata/README.html

