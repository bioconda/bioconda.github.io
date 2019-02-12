.. title:: Package Recipe 'ucsc-bedclip'
.. highlight: bash


ucsc-bedclip
============

.. conda:recipe:: ucsc-bedclip
   :replaces_section_title:

   Remove lines from bed file that refer to off\-chromosome locations.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedclip/meta.yaml>`_

   


.. conda:package:: ucsc-bedclip

   |downloads_ucsc-bedclip| |docker_ucsc-bedclip|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedclip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedclip

   and update with::

      conda update ucsc-bedclip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedclip


.. |required_by_ucsc-bedclip| conda:required_by:: ucsc-bedclip
.. |downloads_ucsc-bedclip| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedclip.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedclip| image:: https://quay.io/repository/biocontainers/ucsc-bedclip/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedclip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedclip/README.html

