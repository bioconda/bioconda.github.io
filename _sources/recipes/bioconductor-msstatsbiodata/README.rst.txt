.. title:: Package Recipe 'bioconductor-msstatsbiodata'
.. highlight: bash


bioconductor-msstatsbiodata
===========================

.. conda:recipe:: bioconductor-msstatsbiodata
   :replaces_section_title:

   Provides the peak intensity data for detecting differentially abundant proteins in seven published biological investigations.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/MSstatsBioData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsbiodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsbiodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsbiodata/meta.yaml>`_

   


.. conda:package:: bioconductor-msstatsbiodata

   |downloads_bioconductor-msstatsbiodata| |docker_bioconductor-msstatsbiodata|

   :versions: 1.4.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-msstatsbiodata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatsbiodata

   and update with::

      conda update bioconductor-msstatsbiodata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msstatsbiodata


.. |required_by_bioconductor-msstatsbiodata| conda:required_by:: bioconductor-msstatsbiodata
.. |downloads_bioconductor-msstatsbiodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsbiodata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msstatsbiodata| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsbiodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsbiodata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsbiodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsbiodata/README.html

