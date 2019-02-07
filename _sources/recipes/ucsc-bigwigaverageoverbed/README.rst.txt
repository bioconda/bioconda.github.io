.. title:: Package Recipe 'ucsc-bigwigaverageoverbed'
.. highlight: bash


ucsc-bigwigaverageoverbed
=========================

.. conda:recipe:: ucsc-bigwigaverageoverbed
   :replaces_section_title:

   Compute average score of big wig over each bed\, which may have introns.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwigaverageoverbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigaverageoverbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigaverageoverbed/meta.yaml>`_

   


.. conda:package:: ucsc-bigwigaverageoverbed

   |downloads_ucsc-bigwigaverageoverbed| |docker_ucsc-bigwigaverageoverbed|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigwigaverageoverbed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigwigaverageoverbed

   and update with::

      conda update ucsc-bigwigaverageoverbed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigwigaverageoverbed


.. |required_by_ucsc-bigwigaverageoverbed| conda:required_by:: ucsc-bigwigaverageoverbed
.. |downloads_ucsc-bigwigaverageoverbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwigaverageoverbed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigwigaverageoverbed| image:: https://quay.io/repository/biocontainers/ucsc-bigwigaverageoverbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwigaverageoverbed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwigaverageoverbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwigaverageoverbed/README.html

