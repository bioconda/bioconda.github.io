.. title:: Package Recipe 'ucsc-facount'
.. highlight: bash


ucsc-facount
============

.. conda:recipe:: ucsc-facount
   :replaces_section_title:

   count base statistics and CpGs in FA files.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-facount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-facount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-facount/meta.yaml>`_

   


.. conda:package:: ucsc-facount

   |downloads_ucsc-facount| |docker_ucsc-facount|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-facount|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-facount

   and update with::

      conda update ucsc-facount

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-facount


.. |required_by_ucsc-facount| conda:required_by:: ucsc-facount
.. |downloads_ucsc-facount| image:: https://img.shields.io/conda/dn/bioconda/ucsc-facount.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-facount| image:: https://quay.io/repository/biocontainers/ucsc-facount/status
   :target: https://quay.io/repository/biocontainers/ucsc-facount







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-facount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-facount/README.html

