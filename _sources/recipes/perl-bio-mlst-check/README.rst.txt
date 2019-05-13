:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-mlst-check'
.. highlight: bash

perl-bio-mlst-check
===================

.. conda:recipe:: perl-bio-mlst-check
   :replaces_section_title:

   Multilocus sequence type checking using blast

   :homepage: http://www.sanger.ac.uk/
   :license: gpl_3
   :recipe: /`perl-bio-mlst-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-mlst-check>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-mlst-check/meta.yaml>`_

   


.. conda:package:: perl-bio-mlst-check

   |downloads_perl-bio-mlst-check| |docker_perl-bio-mlst-check|

   :versions: 2.1.1706216-1, 2.1.1706216-0
   
   :depends blast: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-bioperl: 
   :depends perl-data-dumper: 
   :depends perl-exporter: 
   :depends perl-file-path: 
   :depends perl-file-temp: 
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-lib: 
   :depends perl-lwp-simple: 
   :depends perl-moose: 
   :depends perl-parallel-forkmanager: 
   :depends perl-regexp-common: 
   :depends perl-text-csv: 
   :depends perl-try-tiny: 
   :depends perl-xml-libxml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-mlst-check

   and update with::

      conda update perl-bio-mlst-check

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-mlst-check:<tag>

   (see `perl-bio-mlst-check/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-mlst-check| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-mlst-check.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-mlst-check
   :alt:   (downloads)
.. |docker_perl-bio-mlst-check| image:: https://quay.io/repository/biocontainers/perl-bio-mlst-check/status
   :target: https://quay.io/repository/biocontainers/perl-bio-mlst-check
.. _`perl-bio-mlst-check/tags`: https://quay.io/repository/biocontainers/perl-bio-mlst-check?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-mlst-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-mlst-check/README.html