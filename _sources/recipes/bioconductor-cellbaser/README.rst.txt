.. title:: Package Recipe 'bioconductor-cellbaser'
.. highlight: bash


bioconductor-cellbaser
======================

.. conda:recipe:: bioconductor-cellbaser
   :replaces_section_title:

   This R package makes use of the exhaustive RESTful Web service API that has been implemented for the Cellabase database. It enable researchers to query and obtain a wealth of biological information from a single database saving a lot of time. Another benefit is that researchers can easily make queries about different biological topics and link all this information together as all information is integrated.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cellbaseR.html
   :license: Apache License (== 2.0)
   :recipe: /`bioconductor-cellbaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbaser/meta.yaml>`_

   


.. conda:package:: bioconductor-cellbaser

   |downloads_bioconductor-cellbaser| |docker_bioconductor-cellbaser|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-httr`  :conda:package:`r-jsonlite`  :conda:package:`r-pbapply`  :conda:package:`r-r.utils`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-cellbaser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellbaser

   and update with::

      conda update bioconductor-cellbaser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cellbaser


.. |required_by_bioconductor-cellbaser| conda:required_by:: bioconductor-cellbaser
.. |downloads_bioconductor-cellbaser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbaser.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cellbaser| image:: https://quay.io/repository/biocontainers/bioconductor-cellbaser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbaser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbaser/README.html

