.. title:: Package Recipe 'bioconductor-restfulsedata'
.. highlight: bash


bioconductor-restfulsedata
==========================

.. conda:recipe:: bioconductor-restfulsedata
   :replaces_section_title:

   Metadata RangedSummarizedExperiment shell for use with restfulSE.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/restfulSEData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-restfulsedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulsedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulsedata/meta.yaml>`_

   


.. conda:package:: bioconductor-restfulsedata

   |downloads_bioconductor-restfulsedata| |docker_bioconductor-restfulsedata|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-restfulsedata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-restfulsedata

   and update with::

      conda update bioconductor-restfulsedata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-restfulsedata


.. |required_by_bioconductor-restfulsedata| conda:required_by:: bioconductor-restfulsedata
.. |downloads_bioconductor-restfulsedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-restfulsedata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-restfulsedata| image:: https://quay.io/repository/biocontainers/bioconductor-restfulsedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-restfulsedata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-restfulsedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-restfulsedata/README.html

