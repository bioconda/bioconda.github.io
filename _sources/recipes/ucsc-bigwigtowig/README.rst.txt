.. title:: Package Recipe 'ucsc-bigwigtowig'
.. highlight: bash


ucsc-bigwigtowig
================

.. conda:recipe:: ucsc-bigwigtowig
   :replaces_section_title:

   Convert bigWig to wig.  This will keep more of the same structure of the

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwigtowig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigtowig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigtowig/meta.yaml>`_

   


.. conda:package:: ucsc-bigwigtowig

   |downloads_ucsc-bigwigtowig| |docker_ucsc-bigwigtowig|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigwigtowig|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigwigtowig

   and update with::

      conda update ucsc-bigwigtowig

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigwigtowig


.. |required_by_ucsc-bigwigtowig| conda:required_by:: ucsc-bigwigtowig
.. |downloads_ucsc-bigwigtowig| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwigtowig.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigwigtowig| image:: https://quay.io/repository/biocontainers/ucsc-bigwigtowig/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwigtowig







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwigtowig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwigtowig/README.html

