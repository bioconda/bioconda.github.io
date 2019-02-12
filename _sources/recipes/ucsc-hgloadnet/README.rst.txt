.. title:: Package Recipe 'ucsc-hgloadnet'
.. highlight: bash


ucsc-hgloadnet
==============

.. conda:recipe:: ucsc-hgloadnet
   :replaces_section_title:

   Load a generic net file into database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadnet/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadnet

   |downloads_ucsc-hgloadnet| |docker_ucsc-hgloadnet|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgloadnet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadnet

   and update with::

      conda update ucsc-hgloadnet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadnet


.. |required_by_ucsc-hgloadnet| conda:required_by:: ucsc-hgloadnet
.. |downloads_ucsc-hgloadnet| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadnet.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadnet| image:: https://quay.io/repository/biocontainers/ucsc-hgloadnet/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadnet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadnet/README.html

