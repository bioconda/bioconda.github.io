:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime'
.. highlight: bash

perl-datetime
=============

.. conda:recipe:: perl-datetime/1.42
   :replaces_section_title:

   A date and time object for Perl

   :homepage: http://metacpan.org/release/DateTime
   :license: artistic_2
   :recipe: /`perl-datetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime>`_/`1.42 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime/1.42>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime/1.42/meta.yaml>`_

   


.. conda:package:: perl-datetime

   |downloads_perl-datetime| |docker_perl-datetime|

   :versions: 1.42-2, 1.42-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-cpan-meta-check: 
   
   :depends perl-datetime-locale: 
   
   :depends perl-datetime-timezone: 
   
   :depends perl-namespace-autoclean: 
   
   :depends perl-params-validationcompiler: 
   
   :depends perl-specio-exporter: 
   
   :depends perl-test-fatal: 
   
   :depends perl-try-tiny: 
   
   :depends perl-warnings-register: 
   
   :depends perl-xsloader: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-datetime

   and update with::

      conda update perl-datetime

   or use the docker container::

      docker pull quay.io/biocontainers/perl-datetime:<tag>

   (see `perl-datetime/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-datetime| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-datetime| image:: https://quay.io/repository/biocontainers/perl-datetime/status
   :target: https://quay.io/repository/biocontainers/perl-datetime
.. _`perl-datetime/tags`: https://quay.io/repository/biocontainers/perl-datetime?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime/README.html