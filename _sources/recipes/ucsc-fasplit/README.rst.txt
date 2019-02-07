.. title:: Package Recipe 'ucsc-fasplit'
.. highlight: bash


ucsc-fasplit
============

.. conda:recipe:: ucsc-fasplit
   :replaces_section_title:

   Split an fa file into several files.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fasplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fasplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fasplit/meta.yaml>`_

   


.. conda:package:: ucsc-fasplit

   |downloads_ucsc-fasplit| |docker_ucsc-fasplit|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fasplit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fasplit

   and update with::

      conda update ucsc-fasplit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fasplit


.. |required_by_ucsc-fasplit| conda:required_by:: ucsc-fasplit
.. |downloads_ucsc-fasplit| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fasplit.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fasplit| image:: https://quay.io/repository/biocontainers/ucsc-fasplit/status
   :target: https://quay.io/repository/biocontainers/ucsc-fasplit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fasplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fasplit/README.html

