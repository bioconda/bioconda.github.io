.. title:: Package Recipe 'ucsc-nibsize'
.. highlight: bash


ucsc-nibsize
============

.. conda:recipe:: ucsc-nibsize
   :replaces_section_title:

   print size of nibs

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-nibsize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-nibsize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-nibsize/meta.yaml>`_

   


.. conda:package:: ucsc-nibsize

   |downloads_ucsc-nibsize| |docker_ucsc-nibsize|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-nibsize|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-nibsize

   and update with::

      conda update ucsc-nibsize

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-nibsize


.. |required_by_ucsc-nibsize| conda:required_by:: ucsc-nibsize
.. |downloads_ucsc-nibsize| image:: https://img.shields.io/conda/dn/bioconda/ucsc-nibsize.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-nibsize| image:: https://quay.io/repository/biocontainers/ucsc-nibsize/status
   :target: https://quay.io/repository/biocontainers/ucsc-nibsize







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-nibsize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-nibsize/README.html

