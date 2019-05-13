:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-util'
.. highlight: bash

perl-file-util
==============

.. conda:recipe:: perl-file-util
   :replaces_section_title:

   Easy\, versatile\, portable file handling

   :homepage: https://github.com/tommybutler/file-util/wiki
   :license: perl_5
   :recipe: /`perl-file-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-util>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-util/meta.yaml>`_

   


.. conda:package:: perl-file-util

   |downloads_perl-file-util| |docker_perl-file-util|

   :versions: 4.161950-3, 4.161950-2, 4.161950-1, 4.161950-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-constant: 
   :depends perl-exporter: 
   :depends perl-lib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-util

   and update with::

      conda update perl-file-util

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-util:<tag>

   (see `perl-file-util/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-util| image:: https://img.shields.io/conda/dn/bioconda/perl-file-util.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-util
   :alt:   (downloads)
.. |docker_perl-file-util| image:: https://quay.io/repository/biocontainers/perl-file-util/status
   :target: https://quay.io/repository/biocontainers/perl-file-util
.. _`perl-file-util/tags`: https://quay.io/repository/biocontainers/perl-file-util?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-util/README.html