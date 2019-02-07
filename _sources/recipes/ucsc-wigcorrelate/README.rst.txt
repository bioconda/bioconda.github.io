.. title:: Package Recipe 'ucsc-wigcorrelate'
.. highlight: bash


ucsc-wigcorrelate
=================

.. conda:recipe:: ucsc-wigcorrelate
   :replaces_section_title:

   Produce a table that correlates all pairs of wigs.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-wigcorrelate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-wigcorrelate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-wigcorrelate/meta.yaml>`_

   


.. conda:package:: ucsc-wigcorrelate

   |downloads_ucsc-wigcorrelate| |docker_ucsc-wigcorrelate|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-wigcorrelate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-wigcorrelate

   and update with::

      conda update ucsc-wigcorrelate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-wigcorrelate


.. |required_by_ucsc-wigcorrelate| conda:required_by:: ucsc-wigcorrelate
.. |downloads_ucsc-wigcorrelate| image:: https://img.shields.io/conda/dn/bioconda/ucsc-wigcorrelate.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-wigcorrelate| image:: https://quay.io/repository/biocontainers/ucsc-wigcorrelate/status
   :target: https://quay.io/repository/biocontainers/ucsc-wigcorrelate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-wigcorrelate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-wigcorrelate/README.html

