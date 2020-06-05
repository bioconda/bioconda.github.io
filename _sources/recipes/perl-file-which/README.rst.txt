:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-which'
.. highlight: bash

perl-file-which
===============

.. conda:recipe:: perl-file-which
   :replaces_section_title:
   :noindex:

   Perl implementation of the which utility as an API

   :homepage: https://metacpan.org/pod/File::Which
   :license: perl_5
   :recipe: /`perl-file-which <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-which>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-which/meta.yaml>`_

   


.. conda:package:: perl-file-which

   |downloads_perl-file-which| |docker_perl-file-which|

   :versions:
      
      

      ``1.23-0``,  ``1.22-0``,  ``1.20-1``,  ``1.20-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-which

   and update with::

      conda update perl-file-which

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-which:<tag>

   (see `perl-file-which/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-which| image:: https://img.shields.io/conda/dn/bioconda/perl-file-which.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-which
   :alt:   (downloads)
.. |docker_perl-file-which| image:: https://quay.io/repository/biocontainers/perl-file-which/status
   :target: https://quay.io/repository/biocontainers/perl-file-which
.. _`perl-file-which/tags`: https://quay.io/repository/biocontainers/perl-file-which?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-which/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-which/README.html