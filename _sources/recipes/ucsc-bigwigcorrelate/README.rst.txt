.. title:: Package Recipe 'ucsc-bigwigcorrelate'
.. highlight: bash


ucsc-bigwigcorrelate
====================

.. conda:recipe:: ucsc-bigwigcorrelate
   :replaces_section_title:

   Correlate bigWig files\, optionally only on target regions.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwigcorrelate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigcorrelate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigcorrelate/meta.yaml>`_

   


.. conda:package:: ucsc-bigwigcorrelate

   |downloads_ucsc-bigwigcorrelate| |docker_ucsc-bigwigcorrelate|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigwigcorrelate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigwigcorrelate

   and update with::

      conda update ucsc-bigwigcorrelate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigwigcorrelate


.. |required_by_ucsc-bigwigcorrelate| conda:required_by:: ucsc-bigwigcorrelate
.. |downloads_ucsc-bigwigcorrelate| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwigcorrelate.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigwigcorrelate| image:: https://quay.io/repository/biocontainers/ucsc-bigwigcorrelate/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwigcorrelate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwigcorrelate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwigcorrelate/README.html

