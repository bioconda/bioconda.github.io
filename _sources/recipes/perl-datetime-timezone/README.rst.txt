:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime-timezone'
.. highlight: bash

perl-datetime-timezone
======================

.. conda:recipe:: perl-datetime-timezone
   :replaces_section_title:
   :noindex:

   Time zone object base class and factory

   :homepage: http://metacpan.org/release/DateTime-TimeZone
   :license: perl_5
   :recipe: /`perl-datetime-timezone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-timezone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-timezone/meta.yaml>`_

   


.. conda:package:: perl-datetime-timezone

   |downloads_perl-datetime-timezone| |docker_perl-datetime-timezone|

   :versions:
      
      

      ``2.51-0``,  ``2.09-4``,  ``2.09-3``,  ``2.09-2``,  ``2.09-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-module-runtime: 
   :depends perl-namespace-autoclean: 
   :depends perl-params-validationcompiler: ``0.30.*``
   :depends perl-specio: ``0.47.*``
   :depends perl-try-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-datetime-timezone

   and update with::

      conda update perl-datetime-timezone

   or use the docker container::

      docker pull quay.io/biocontainers/perl-datetime-timezone:<tag>

   (see `perl-datetime-timezone/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-datetime-timezone| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-timezone.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-datetime-timezone
   :alt:   (downloads)
.. |docker_perl-datetime-timezone| image:: https://quay.io/repository/biocontainers/perl-datetime-timezone/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-timezone
.. _`perl-datetime-timezone/tags`: https://quay.io/repository/biocontainers/perl-datetime-timezone?tab=tags


.. raw:: html

    <script>
        var package = "perl-datetime-timezone";
        var versions = ["2.51","2.09","2.09","2.09","2.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-timezone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-timezone/README.html