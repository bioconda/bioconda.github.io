:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime-locale'
.. highlight: bash

perl-datetime-locale
====================

.. conda:recipe:: perl-datetime-locale
   :replaces_section_title:
   :noindex:

   Localization support for DateTime.pm

   :homepage: http://metacpan.org/release/DateTime-Locale
   :license: perl_5
   :recipe: /`perl-datetime-locale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-locale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-locale/meta.yaml>`_

   


.. conda:package:: perl-datetime-locale

   |downloads_perl-datetime-locale| |docker_perl-datetime-locale|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.39-0</code>,  <code>1.38-1</code>,  <code>1.38-0</code>,  <code>1.37-0</code>,  <code>1.36-0</code>,  <code>1.35-0</code>,  <code>1.34-0</code>,  <code>1.33-0</code>,  <code>1.12-5</code>,  </span></summary>
      

      ``1.39-0``,  ``1.38-1``,  ``1.38-0``,  ``1.37-0``,  ``1.36-0``,  ``1.35-0``,  ``1.34-0``,  ``1.33-0``,  ``1.12-5``,  ``1.12-4``,  ``1.12-3``,  ``1.12-2``,  ``1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-cpan-meta-check: ``0.014.*``
   :depends perl-dist-checkconflicts: ``0.11.*``
   :depends perl-file-sharedir: 
   :depends perl-namespace-autoclean: 
   :depends perl-params-validationcompiler: ``0.31.*``
   :depends perl-specio: ``0.48.*``
   :depends perl-test-warnings: ``0.031.*``
   :depends perl-test2-plugin-nowarnings: ``0.09.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-datetime-locale

   and update with::

      conda update perl-datetime-locale

   or use the docker container::

      docker pull quay.io/biocontainers/perl-datetime-locale:<tag>

   (see `perl-datetime-locale/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-datetime-locale| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-locale.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-datetime-locale
   :alt:   (downloads)
.. |docker_perl-datetime-locale| image:: https://quay.io/repository/biocontainers/perl-datetime-locale/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-locale
.. _`perl-datetime-locale/tags`: https://quay.io/repository/biocontainers/perl-datetime-locale?tab=tags


.. raw:: html

    <script>
        var package = "perl-datetime-locale";
        var versions = ["1.39","1.38","1.38","1.37","1.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-locale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-locale/README.html