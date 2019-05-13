:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-getopt'
.. highlight: bash

perl-moosex-getopt
==================

.. conda:recipe:: perl-moosex-getopt
   :replaces_section_title:

   A Moose role for processing command line options

   :homepage: https://github.com/moose/MooseX-Getopt
   :license: perl_5
   :recipe: /`perl-moosex-getopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-getopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-getopt/meta.yaml>`_

   


.. conda:package:: perl-moosex-getopt

   |downloads_perl-moosex-getopt| |docker_perl-moosex-getopt|

   :versions: 0.74-0, 0.72-0, 0.71-2, 0.71-1, 0.71-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-getopt-long: 
   :depends perl-getopt-long-descriptive: 
   :depends perl-moose: 
   :depends perl-moosex-role-parameterized: 
   :depends perl-namespace-autoclean: 
   :depends perl-try-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-getopt

   and update with::

      conda update perl-moosex-getopt

   or use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-getopt:<tag>

   (see `perl-moosex-getopt/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-getopt| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-getopt.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-getopt
   :alt:   (downloads)
.. |docker_perl-moosex-getopt| image:: https://quay.io/repository/biocontainers/perl-moosex-getopt/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-getopt
.. _`perl-moosex-getopt/tags`: https://quay.io/repository/biocontainers/perl-moosex-getopt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-getopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-getopt/README.html