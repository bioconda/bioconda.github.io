:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-log4perl'
.. highlight: bash

perl-tie-log4perl
=================

.. conda:recipe:: perl-tie-log4perl
   :replaces_section_title:

   Tie a filehandle to log via Log4perl

   :homepage: http://metacpan.org/pod/Tie::Log4perl
   :license: perl_5
   :recipe: /`perl-tie-log4perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-log4perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-log4perl/meta.yaml>`_

   


.. conda:package:: perl-tie-log4perl

   |downloads_perl-tie-log4perl| |docker_perl-tie-log4perl|

   :versions: 0.1-1, 0.1-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :depends perl-log-log4perl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-tie-log4perl

   and update with::

      conda update perl-tie-log4perl

   or use the docker container::

      docker pull quay.io/biocontainers/perl-tie-log4perl:<tag>

   (see `perl-tie-log4perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-log4perl| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-log4perl.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-tie-log4perl| image:: https://quay.io/repository/biocontainers/perl-tie-log4perl/status
   :target: https://quay.io/repository/biocontainers/perl-tie-log4perl
.. _`perl-tie-log4perl/tags`: https://quay.io/repository/biocontainers/perl-tie-log4perl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-log4perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-log4perl/README.html