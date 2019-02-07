.. title:: Package Recipe 'ucsc-bedsort'
.. highlight: bash


ucsc-bedsort
============

.. conda:recipe:: ucsc-bedsort
   :replaces_section_title:

   Sort a .bed file by chrom\,chromStart

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedsort/meta.yaml>`_

   


.. conda:package:: ucsc-bedsort

   |downloads_ucsc-bedsort| |docker_ucsc-bedsort|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedsort|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedsort

   and update with::

      conda update ucsc-bedsort

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedsort


.. |required_by_ucsc-bedsort| conda:required_by:: ucsc-bedsort
.. |downloads_ucsc-bedsort| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedsort.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedsort| image:: https://quay.io/repository/biocontainers/ucsc-bedsort/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedsort







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedsort/README.html

