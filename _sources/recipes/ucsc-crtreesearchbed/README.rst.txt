.. title:: Package Recipe 'ucsc-crtreesearchbed'
.. highlight: bash


ucsc-crtreesearchbed
====================

.. conda:recipe:: ucsc-crtreesearchbed
   :replaces_section_title:

   Search a crTree indexed bed file and print all items that overlap query.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-crtreesearchbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-crtreesearchbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-crtreesearchbed/meta.yaml>`_

   


.. conda:package:: ucsc-crtreesearchbed

   |downloads_ucsc-crtreesearchbed| |docker_ucsc-crtreesearchbed|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-crtreesearchbed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-crtreesearchbed

   and update with::

      conda update ucsc-crtreesearchbed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-crtreesearchbed


.. |required_by_ucsc-crtreesearchbed| conda:required_by:: ucsc-crtreesearchbed
.. |downloads_ucsc-crtreesearchbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-crtreesearchbed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-crtreesearchbed| image:: https://quay.io/repository/biocontainers/ucsc-crtreesearchbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-crtreesearchbed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-crtreesearchbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-crtreesearchbed/README.html

