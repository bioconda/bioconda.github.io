:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-tee'
.. highlight: bash

perl-file-tee
=============

.. conda:recipe:: perl-file-tee/0.07
   :replaces_section_title:

   replicate data sent to a Perl stream

   :homepage: http://metacpan.org/pod/File::Tee
   :license: unknown
   :recipe: /`perl-file-tee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-tee>`_/`0.07 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-tee/0.07>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-tee/0.07/meta.yaml>`_

   


.. conda:package:: perl-file-tee

   |downloads_perl-file-tee| |docker_perl-file-tee|

   :versions: 0.07-1, 0.07-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-tee

   and update with::

      conda update perl-file-tee

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-tee:<tag>

   (see `perl-file-tee/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-tee| image:: https://img.shields.io/conda/dn/bioconda/perl-file-tee.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-tee
   :alt:   (downloads)
.. |docker_perl-file-tee| image:: https://quay.io/repository/biocontainers/perl-file-tee/status
   :target: https://quay.io/repository/biocontainers/perl-file-tee
.. _`perl-file-tee/tags`: https://quay.io/repository/biocontainers/perl-file-tee?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-tee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-tee/README.html