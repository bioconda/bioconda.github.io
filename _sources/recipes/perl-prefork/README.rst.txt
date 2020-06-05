:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-prefork'
.. highlight: bash

perl-prefork
============

.. conda:recipe:: perl-prefork/1.05
   :replaces_section_title:
   :noindex:

   Optimized module loading for forking or non\-forking processes

   :homepage: https://github.com/karenetheridge/prefork
   :license: perl_5
   :recipe: /`perl-prefork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork>`_/`1.05 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork/1.05>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork/1.05/meta.yaml>`_

   


.. conda:package:: perl-prefork

   |downloads_perl-prefork| |docker_perl-prefork|

   :versions:
      
      

      ``1.05-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-prefork

   and update with::

      conda update perl-prefork

   or use the docker container::

      docker pull quay.io/biocontainers/perl-prefork:<tag>

   (see `perl-prefork/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-prefork| image:: https://img.shields.io/conda/dn/bioconda/perl-prefork.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-prefork
   :alt:   (downloads)
.. |docker_perl-prefork| image:: https://quay.io/repository/biocontainers/perl-prefork/status
   :target: https://quay.io/repository/biocontainers/perl-prefork
.. _`perl-prefork/tags`: https://quay.io/repository/biocontainers/perl-prefork?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-prefork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-prefork/README.html