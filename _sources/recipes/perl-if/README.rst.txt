:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-if'
.. highlight: bash

perl-if
=======

.. conda:recipe:: perl-if
   :replaces_section_title:
   :noindex:

   use a Perl module if a condition holds

   :homepage: http://metacpan.org/pod/if
   :license: perl_5
   :recipe: /`perl-if <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-if>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-if/meta.yaml>`_

   


.. conda:package:: perl-if

   |downloads_perl-if| |docker_perl-if|

   :versions:
      
      

      ``0.0608-1``,  ``0.0608-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-if

   and update with::

      conda update perl-if

   or use the docker container::

      docker pull quay.io/biocontainers/perl-if:<tag>

   (see `perl-if/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-if| image:: https://img.shields.io/conda/dn/bioconda/perl-if.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-if
   :alt:   (downloads)
.. |docker_perl-if| image:: https://quay.io/repository/biocontainers/perl-if/status
   :target: https://quay.io/repository/biocontainers/perl-if
.. _`perl-if/tags`: https://quay.io/repository/biocontainers/perl-if?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-if/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-if/README.html