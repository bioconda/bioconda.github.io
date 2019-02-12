.. title:: Package Recipe 'ucsc-qactowig'
.. highlight: bash


ucsc-qactowig
=============

.. conda:recipe:: ucsc-qactowig
   :replaces_section_title:

   convert from compressed quality score format to wiggle format.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-qactowig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qactowig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qactowig/meta.yaml>`_

   


.. conda:package:: ucsc-qactowig

   |downloads_ucsc-qactowig| |docker_ucsc-qactowig|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-qactowig|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-qactowig

   and update with::

      conda update ucsc-qactowig

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-qactowig


.. |required_by_ucsc-qactowig| conda:required_by:: ucsc-qactowig
.. |downloads_ucsc-qactowig| image:: https://img.shields.io/conda/dn/bioconda/ucsc-qactowig.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-qactowig| image:: https://quay.io/repository/biocontainers/ucsc-qactowig/status
   :target: https://quay.io/repository/biocontainers/ucsc-qactowig







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-qactowig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-qactowig/README.html

