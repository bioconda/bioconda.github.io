:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-requires'
.. highlight: bash

perl-test-requires
==================

.. conda:recipe:: perl-test-requires
   :replaces_section_title:
   :noindex:

   Checks to see if the module can be loaded

   :homepage: https://github.com/tokuhirom/Test-Requires
   :license: perl_5
   :recipe: /`perl-test-requires <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requires>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requires/meta.yaml>`_

   


.. conda:package:: perl-test-requires

   |downloads_perl-test-requires| |docker_perl-test-requires|

   :versions:
      
      

      ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.10-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-requires

   and update with::

      conda update perl-test-requires

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-requires:<tag>

   (see `perl-test-requires/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-requires| image:: https://img.shields.io/conda/dn/bioconda/perl-test-requires.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-requires
   :alt:   (downloads)
.. |docker_perl-test-requires| image:: https://quay.io/repository/biocontainers/perl-test-requires/status
   :target: https://quay.io/repository/biocontainers/perl-test-requires
.. _`perl-test-requires/tags`: https://quay.io/repository/biocontainers/perl-test-requires?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-requires/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-requires/README.html