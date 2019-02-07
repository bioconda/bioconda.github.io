.. title:: Package Recipe 'cgpbigwig'
.. highlight: bash


cgpbigwig
=========

.. conda:recipe:: cgpbigwig
   :replaces_section_title:

   BigWig manpulation tools using libBigWig and htslib

   :homepage: https://github.com/cancerit/cgpBigWig
   :license: GPLv3
   :recipe: /`cgpbigwig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgpbigwig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgpbigwig/meta.yaml>`_

   


.. conda:package:: cgpbigwig

   |downloads_cgpbigwig| |docker_cgpbigwig|

   :versions: 1.0.2

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`gmp` >=6.1.2,<7.0a0 :conda:package:`gnutls` >=3.5.19,<3.6.0a0 :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libbigwig`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`libtasn1`  :conda:package:`nettle` >=3.3,<3.4.0a0 :conda:package:`p11-kit`  :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_cgpbigwig|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgpbigwig

   and update with::

      conda update cgpbigwig

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cgpbigwig


.. |required_by_cgpbigwig| conda:required_by:: cgpbigwig
.. |downloads_cgpbigwig| image:: https://img.shields.io/conda/dn/bioconda/cgpbigwig.svg?style=flat
   :alt:   (downloads)
.. |docker_cgpbigwig| image:: https://quay.io/repository/biocontainers/cgpbigwig/status
   :target: https://quay.io/repository/biocontainers/cgpbigwig







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgpbigwig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgpbigwig/README.html

