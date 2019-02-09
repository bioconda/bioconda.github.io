.. title:: Package Recipe 'ucsc-psltobigpsl'
.. highlight: bash


ucsc-psltobigpsl
================

.. conda:recipe:: ucsc-psltobigpsl
   :replaces_section_title:

   converts psl to bigPsl input \(bed format with extra fields\)

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-psltobigpsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-psltobigpsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-psltobigpsl/meta.yaml>`_

   


.. conda:package:: ucsc-psltobigpsl

   |downloads_ucsc-psltobigpsl| |docker_ucsc-psltobigpsl|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-psltobigpsl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-psltobigpsl

   and update with::

      conda update ucsc-psltobigpsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-psltobigpsl


.. |required_by_ucsc-psltobigpsl| conda:required_by:: ucsc-psltobigpsl
.. |downloads_ucsc-psltobigpsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-psltobigpsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-psltobigpsl| image:: https://quay.io/repository/biocontainers/ucsc-psltobigpsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-psltobigpsl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-psltobigpsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-psltobigpsl/README.html

