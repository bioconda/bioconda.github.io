:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-all'
.. highlight: bash

perl-io-all
===========

.. conda:recipe:: perl-io-all
   :replaces_section_title:
   :noindex:

   Combines all of the best Perl IO modules into a single nifty object oriented interface

   :homepage: https://github.com/ingydotnet/io-all-pm
   :license: perl_5
   :recipe: /`perl-io-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-all/meta.yaml>`_

   


.. conda:package:: perl-io-all

   |downloads_perl-io-all| |docker_perl-io-all|

   :versions:
      
      

      ``0.87-0``,  ``0.86-1``,  ``0.86-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-scalar-list-utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-all

   and update with::

      conda update perl-io-all

   or use the docker container::

      docker pull quay.io/biocontainers/perl-io-all:<tag>

   (see `perl-io-all/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-all| image:: https://img.shields.io/conda/dn/bioconda/perl-io-all.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-all
   :alt:   (downloads)
.. |docker_perl-io-all| image:: https://quay.io/repository/biocontainers/perl-io-all/status
   :target: https://quay.io/repository/biocontainers/perl-io-all
.. _`perl-io-all/tags`: https://quay.io/repository/biocontainers/perl-io-all?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-all/README.html