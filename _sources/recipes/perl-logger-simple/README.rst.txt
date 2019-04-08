:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-logger-simple'
.. highlight: bash

perl-logger-simple
==================

.. conda:recipe:: perl-logger-simple
   :replaces_section_title:

   Implementation of the Simran\-Log\-Log and Simran\-Error\-Error modules

   :homepage: http://metacpan.org/pod/Logger::Simple
   :license: perl_5
   :recipe: /`perl-logger-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-logger-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-logger-simple/meta.yaml>`_

   


.. conda:package:: perl-logger-simple

   |downloads_perl-logger-simple| |docker_perl-logger-simple|

   :versions: 2.0-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-object-insideout: 
   :depends perl-test-harness: 
   :depends perl-test-pod: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-logger-simple

   and update with::

      conda update perl-logger-simple

   or use the docker container::

      docker pull quay.io/biocontainers/perl-logger-simple:<tag>

   (see `perl-logger-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-logger-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-logger-simple.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-logger-simple| image:: https://quay.io/repository/biocontainers/perl-logger-simple/status
   :target: https://quay.io/repository/biocontainers/perl-logger-simple
.. _`perl-logger-simple/tags`: https://quay.io/repository/biocontainers/perl-logger-simple?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-logger-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-logger-simple/README.html