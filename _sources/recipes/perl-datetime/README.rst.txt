:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime'
.. highlight: bash

perl-datetime
=============

.. conda:recipe:: perl-datetime
   :replaces_section_title:
   :noindex:

   A date and time object for Perl

   :homepage: http://metacpan.org/release/DateTime
   :license: artistic_2
   :recipe: /`perl-datetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime/meta.yaml>`_

   


.. conda:package:: perl-datetime

   |downloads_perl-datetime| |docker_perl-datetime|

   :versions:
      
      

      ``1.42-4``,  ``1.42-2``,  ``1.42-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-cpan-meta-check: 
   :depends perl-datetime-locale: 
   :depends perl-datetime-timezone: 
   :depends perl-namespace-autoclean: 
   :depends perl-params-validationcompiler: 
   :depends perl-specio: ``0.47.*``
   :depends perl-test-fatal: 
   :depends perl-try-tiny: 
   :depends perl-warnings-register: 
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
   :target: https://anaconda.org/bioconda/perl-datetime
   :alt:   (downloads)
.. |docker_perl-datetime| image:: https://quay.io/repository/biocontainers/perl-datetime/status
   :target: https://quay.io/repository/biocontainers/perl-datetime
.. _`perl-datetime/tags`: https://quay.io/repository/biocontainers/perl-datetime?tab=tags


.. raw:: html

    <script>
        var package = "perl-datetime";
        var versions = ["1.42","1.42","1.42"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime/README.html