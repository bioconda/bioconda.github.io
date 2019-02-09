.. title:: Package Recipe 'ucsc-bedtopsl'
.. highlight: bash


ucsc-bedtopsl
=============

.. conda:recipe:: ucsc-bedtopsl
   :replaces_section_title:

   convert bed format files to psl format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedtopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedtopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedtopsl/meta.yaml>`_

   


.. conda:package:: ucsc-bedtopsl

   |downloads_ucsc-bedtopsl| |docker_ucsc-bedtopsl|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedtopsl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedtopsl

   and update with::

      conda update ucsc-bedtopsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedtopsl


.. |required_by_ucsc-bedtopsl| conda:required_by:: ucsc-bedtopsl
.. |downloads_ucsc-bedtopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedtopsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedtopsl| image:: https://quay.io/repository/biocontainers/ucsc-bedtopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedtopsl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedtopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedtopsl/README.html

