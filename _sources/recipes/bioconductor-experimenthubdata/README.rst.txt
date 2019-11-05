:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-experimenthubdata'
.. highlight: bash

bioconductor-experimenthubdata
==============================

.. conda:recipe:: bioconductor-experimenthubdata
   :replaces_section_title:

   Functions to add metadata to ExperimentHub db and resource files to AWS S3 buckets.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ExperimentHubData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-experimenthubdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthubdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthubdata/meta.yaml>`_

   


.. conda:package:: bioconductor-experimenthubdata

   |downloads_bioconductor-experimenthubdata| |docker_bioconductor-experimenthubdata|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.0-0
   
   :depends bioconductor-annotationhubdata: >=1.16.0,<1.17.0
   :depends bioconductor-bioccheck: >=1.22.0,<1.23.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocviews: >=1.54.0,<1.55.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :depends r-curl: 
   :depends r-dbi: 
   :depends r-httr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-experimenthubdata

   and update with::

      conda update bioconductor-experimenthubdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-experimenthubdata:<tag>

   (see `bioconductor-experimenthubdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-experimenthubdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimenthubdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-experimenthubdata
   :alt:   (downloads)
.. |docker_bioconductor-experimenthubdata| image:: https://quay.io/repository/biocontainers/bioconductor-experimenthubdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimenthubdata
.. _`bioconductor-experimenthubdata/tags`: https://quay.io/repository/biocontainers/bioconductor-experimenthubdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimenthubdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimenthubdata/README.html