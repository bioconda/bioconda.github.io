.. title:: Package Recipe 'ucsc-twobitinfo'
.. highlight: bash


ucsc-twobitinfo
===============

.. conda:recipe:: ucsc-twobitinfo
   :replaces_section_title:

   get information about sequences in a .2bit file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-twobitinfo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobitinfo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobitinfo/meta.yaml>`_

   


.. conda:package:: ucsc-twobitinfo

   |downloads_ucsc-twobitinfo| |docker_ucsc-twobitinfo|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-twobitinfo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-twobitinfo

   and update with::

      conda update ucsc-twobitinfo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-twobitinfo


.. |required_by_ucsc-twobitinfo| conda:required_by:: ucsc-twobitinfo
.. |downloads_ucsc-twobitinfo| image:: https://img.shields.io/conda/dn/bioconda/ucsc-twobitinfo.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-twobitinfo| image:: https://quay.io/repository/biocontainers/ucsc-twobitinfo/status
   :target: https://quay.io/repository/biocontainers/ucsc-twobitinfo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-twobitinfo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-twobitinfo/README.html

