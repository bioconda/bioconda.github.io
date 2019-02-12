.. title:: Package Recipe 'ucsc-parafetch'
.. highlight: bash


ucsc-parafetch
==============

.. conda:recipe:: ucsc-parafetch
   :replaces_section_title:

   try to fetch url with multiple connections

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-parafetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parafetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parafetch/meta.yaml>`_

   


.. conda:package:: ucsc-parafetch

   |downloads_ucsc-parafetch| |docker_ucsc-parafetch|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-parafetch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-parafetch

   and update with::

      conda update ucsc-parafetch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-parafetch


.. |required_by_ucsc-parafetch| conda:required_by:: ucsc-parafetch
.. |downloads_ucsc-parafetch| image:: https://img.shields.io/conda/dn/bioconda/ucsc-parafetch.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-parafetch| image:: https://quay.io/repository/biocontainers/ucsc-parafetch/status
   :target: https://quay.io/repository/biocontainers/ucsc-parafetch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-parafetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-parafetch/README.html

