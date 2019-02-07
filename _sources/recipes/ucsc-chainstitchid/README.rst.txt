.. title:: Package Recipe 'ucsc-chainstitchid'
.. highlight: bash


ucsc-chainstitchid
==================

.. conda:recipe:: ucsc-chainstitchid
   :replaces_section_title:

   Join chain fragments with the same chain ID into a single

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainstitchid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainstitchid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainstitchid/meta.yaml>`_

   


.. conda:package:: ucsc-chainstitchid

   |downloads_ucsc-chainstitchid| |docker_ucsc-chainstitchid|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chainstitchid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainstitchid

   and update with::

      conda update ucsc-chainstitchid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chainstitchid


.. |required_by_ucsc-chainstitchid| conda:required_by:: ucsc-chainstitchid
.. |downloads_ucsc-chainstitchid| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainstitchid.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chainstitchid| image:: https://quay.io/repository/biocontainers/ucsc-chainstitchid/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainstitchid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainstitchid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainstitchid/README.html

