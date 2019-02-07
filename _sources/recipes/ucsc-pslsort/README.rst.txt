.. title:: Package Recipe 'ucsc-pslsort'
.. highlight: bash


ucsc-pslsort
============

.. conda:recipe:: ucsc-pslsort
   :replaces_section_title:

   Merge and sort psCluster .psl output files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslsort/meta.yaml>`_

   


.. conda:package:: ucsc-pslsort

   |downloads_ucsc-pslsort| |docker_ucsc-pslsort|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslsort|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslsort

   and update with::

      conda update ucsc-pslsort

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslsort


.. |required_by_ucsc-pslsort| conda:required_by:: ucsc-pslsort
.. |downloads_ucsc-pslsort| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslsort.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslsort| image:: https://quay.io/repository/biocontainers/ucsc-pslsort/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslsort







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslsort/README.html

