:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-escape'
.. highlight: bash

perl-string-escape
==================

.. conda:recipe:: perl-string-escape/2010.002
   :replaces_section_title:

   Backslash escapes\, quoted phrase\, word elision\, etc.

   :homepage: http://metacpan.org/pod/String::Escape
   :license: perl_5
   :recipe: /`perl-string-escape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-escape>`_/`2010.002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-escape/2010.002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-escape/2010.002/meta.yaml>`_

   


.. conda:package:: perl-string-escape

   |downloads_perl-string-escape| |docker_perl-string-escape|

   :versions: 2010.002-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-string-escape

   and update with::

      conda update perl-string-escape

   or use the docker container::

      docker pull quay.io/biocontainers/perl-string-escape:<tag>

   (see `perl-string-escape/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-escape| image:: https://img.shields.io/conda/dn/bioconda/perl-string-escape.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-string-escape| image:: https://quay.io/repository/biocontainers/perl-string-escape/status
   :target: https://quay.io/repository/biocontainers/perl-string-escape
.. _`perl-string-escape/tags`: https://quay.io/repository/biocontainers/perl-string-escape?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-escape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-escape/README.html