.. title:: Package Recipe 'ucsc-fasize'
.. highlight: bash


ucsc-fasize
===========

.. conda:recipe:: ucsc-fasize
   :replaces_section_title:

   print total base count in fa files.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fasize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fasize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fasize/meta.yaml>`_

   


.. conda:package:: ucsc-fasize

   |downloads_ucsc-fasize| |docker_ucsc-fasize|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fasize|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fasize

   and update with::

      conda update ucsc-fasize

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fasize


.. |required_by_ucsc-fasize| conda:required_by:: ucsc-fasize
.. |downloads_ucsc-fasize| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fasize.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fasize| image:: https://quay.io/repository/biocontainers/ucsc-fasize/status
   :target: https://quay.io/repository/biocontainers/ucsc-fasize







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fasize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fasize/README.html

