.. title:: Package Recipe 'ucsc-bigbedtobed'
.. highlight: bash


ucsc-bigbedtobed
================

.. conda:recipe:: ucsc-bigbedtobed
   :replaces_section_title:

   Convert from bigBed to ascii bed format.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigbedtobed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedtobed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedtobed/meta.yaml>`_

   


.. conda:package:: ucsc-bigbedtobed

   |downloads_ucsc-bigbedtobed| |docker_ucsc-bigbedtobed|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigbedtobed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigbedtobed

   and update with::

      conda update ucsc-bigbedtobed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigbedtobed


.. |required_by_ucsc-bigbedtobed| conda:required_by:: ucsc-bigbedtobed
.. |downloads_ucsc-bigbedtobed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigbedtobed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigbedtobed| image:: https://quay.io/repository/biocontainers/ucsc-bigbedtobed/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigbedtobed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigbedtobed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigbedtobed/README.html

