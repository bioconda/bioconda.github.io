.. title:: Package Recipe 'bioconductor-metamsdata'
.. highlight: bash


bioconductor-metamsdata
=======================

.. conda:recipe:: bioconductor-metamsdata
   :replaces_section_title:

   Example CDF data for the metaMS package

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/metaMSdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-metamsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metamsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metamsdata/meta.yaml>`_

   


.. conda:package:: bioconductor-metamsdata

   |downloads_bioconductor-metamsdata| |docker_bioconductor-metamsdata|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-metamsdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metamsdata

   and update with::

      conda update bioconductor-metamsdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metamsdata


.. |required_by_bioconductor-metamsdata| conda:required_by:: bioconductor-metamsdata
.. |downloads_bioconductor-metamsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metamsdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metamsdata| image:: https://quay.io/repository/biocontainers/bioconductor-metamsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metamsdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metamsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metamsdata/README.html

