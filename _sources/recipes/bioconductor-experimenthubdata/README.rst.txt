.. title:: Package Recipe 'bioconductor-experimenthubdata'
.. highlight: bash


bioconductor-experimenthubdata
==============================

.. conda:recipe:: bioconductor-experimenthubdata
   :replaces_section_title:

   Functions to add metadata to ExperimentHub db and resource files to AWS S3 buckets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ExperimentHubData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-experimenthubdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthubdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthubdata/meta.yaml>`_

   


.. conda:package:: bioconductor-experimenthubdata

   |downloads_bioconductor-experimenthubdata| |docker_bioconductor-experimenthubdata|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-annotationhubdata` >=1.12.0,<1.13.0 :conda:package:`bioconductor-bioccheck` >=1.18.0,<1.19.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocviews` >=1.50.0,<1.51.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-curl`  :conda:package:`r-dbi`  :conda:package:`r-httr`  

   :required~by: |required_by_bioconductor-experimenthubdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-experimenthubdata

   and update with::

      conda update bioconductor-experimenthubdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-experimenthubdata


.. |required_by_bioconductor-experimenthubdata| conda:required_by:: bioconductor-experimenthubdata
.. |downloads_bioconductor-experimenthubdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimenthubdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-experimenthubdata| image:: https://quay.io/repository/biocontainers/bioconductor-experimenthubdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimenthubdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimenthubdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimenthubdata/README.html

