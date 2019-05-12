:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-scandeps'
.. highlight: bash

perl-module-scandeps
====================

.. conda:recipe:: perl-module-scandeps
   :replaces_section_title:

   Recursively scan Perl code for dependencies

   :homepage: http://metacpan.org/pod/Module::ScanDeps
   :license: perl_5
   :recipe: /`perl-module-scandeps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-scandeps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-scandeps/meta.yaml>`_

   


.. conda:package:: perl-module-scandeps

   |downloads_perl-module-scandeps| |docker_perl-module-scandeps|

   :versions: 1.27-0, 1.26-1, 1.26-0, 1.25-0, 1.23-1, 1.23-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-file-temp: 
   :depends perl-getopt-long: 
   :depends perl-module-metadata: 
   :depends perl-text-parsewords: 
   :depends perl-version: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-scandeps

   and update with::

      conda update perl-module-scandeps

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-scandeps:<tag>

   (see `perl-module-scandeps/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-scandeps| image:: https://img.shields.io/conda/dn/bioconda/perl-module-scandeps.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-scandeps| image:: https://quay.io/repository/biocontainers/perl-module-scandeps/status
   :target: https://quay.io/repository/biocontainers/perl-module-scandeps
.. _`perl-module-scandeps/tags`: https://quay.io/repository/biocontainers/perl-module-scandeps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-scandeps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-scandeps/README.html