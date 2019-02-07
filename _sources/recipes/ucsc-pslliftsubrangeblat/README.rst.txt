.. title:: Package Recipe 'ucsc-pslliftsubrangeblat'
.. highlight: bash


ucsc-pslliftsubrangeblat
========================

.. conda:recipe:: ucsc-pslliftsubrangeblat
   :replaces_section_title:

   lift PSLs from blat subrange alignments

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslliftsubrangeblat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslliftsubrangeblat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslliftsubrangeblat/meta.yaml>`_

   


.. conda:package:: ucsc-pslliftsubrangeblat

   |downloads_ucsc-pslliftsubrangeblat| |docker_ucsc-pslliftsubrangeblat|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslliftsubrangeblat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslliftsubrangeblat

   and update with::

      conda update ucsc-pslliftsubrangeblat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslliftsubrangeblat


.. |required_by_ucsc-pslliftsubrangeblat| conda:required_by:: ucsc-pslliftsubrangeblat
.. |downloads_ucsc-pslliftsubrangeblat| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslliftsubrangeblat.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslliftsubrangeblat| image:: https://quay.io/repository/biocontainers/ucsc-pslliftsubrangeblat/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslliftsubrangeblat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslliftsubrangeblat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslliftsubrangeblat/README.html

