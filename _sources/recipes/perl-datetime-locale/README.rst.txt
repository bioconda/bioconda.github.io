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

         <details><summary><span class="truncated-version-list"><code>1.44-0</code>,  <code>1.43-0</code>,  <code>1.39-0</code>,  <code>1.38-1</code>,  <code>1.38-0</code>,  <code>1.37-0</code>,  <code>1.36-0</code>,  <code>1.35-0</code>,  <code>1.34-0</code>,  </span></summary>
      

      ``1.44-0``,  ``1.43-0``,  ``1.39-0``,  ``1.38-1``,  ``1.38-0``,  ``1.37-0``,  ``1.36-0``,  ``1.35-0``,  ``1.34-0``,  ``1.33-0``,  ``1.12-5``,  ``1.12-4``,  ``1.12-3``,  ``1.12-2``,  ``1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-cpan-meta-check: ``0.014.*``
   :depends perl-dist-checkconflicts: ``0.11.*``
   :depends perl-file-sharedir: 
   :depends perl-namespace-autoclean: ``>=0.31,<0.32.0a0``
   :depends perl-params-validationcompiler: ``0.31.*``
   :depends perl-specio: ``0.48.*``
   :depends perl-test-warnings: ``0.031.*``
   :depends perl-test2-plugin-nowarnings: ``0.09.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-datetime-locale

   and update with::

      mamba update perl-datetime-locale

  To create a new environment, run::

      mamba create --name myenvname perl-datetime-locale

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.44","1.43","1.39","1.38","1.38"];
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