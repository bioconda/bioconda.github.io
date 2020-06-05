:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-next'
.. highlight: bash

perl-file-next
==============

.. conda:recipe:: perl-file-next
   :replaces_section_title:
   :noindex:

   File\-finding iterator

   :homepage: http://metacpan.org/pod/File::Next
   :license: artistic_2
   :recipe: /`perl-file-next <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-next>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-next/meta.yaml>`_

   


.. conda:package:: perl-file-next

   |downloads_perl-file-next| |docker_perl-file-next|

   :versions:
      
      

      ``1.16-1``,  ``1.16-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-pathtools: 
   :depends perl-test-simple: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-next

   and update with::

      conda update perl-file-next

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-next:<tag>

   (see `perl-file-next/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-next| image:: https://img.shields.io/conda/dn/bioconda/perl-file-next.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-next
   :alt:   (downloads)
.. |docker_perl-file-next| image:: https://quay.io/repository/biocontainers/perl-file-next/status
   :target: https://quay.io/repository/biocontainers/perl-file-next
.. _`perl-file-next/tags`: https://quay.io/repository/biocontainers/perl-file-next?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-next/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-next/README.html