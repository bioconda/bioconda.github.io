:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime-timezone'
.. highlight: bash

perl-datetime-timezone
======================

.. conda:recipe:: perl-datetime-timezone
   :replaces_section_title:
   :noindex:

   Time zone object base class and factory.

   :homepage: https://metacpan.org/release/DateTime-TimeZone
   :license: Perl_5
   :recipe: /`perl-datetime-timezone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-timezone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-timezone/meta.yaml>`_

   


.. conda:package:: perl-datetime-timezone

   |downloads_perl-datetime-timezone| |docker_perl-datetime-timezone|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.65-0</code>,  <code>2.57-0</code>,  <code>2.52-1</code>,  <code>2.52-0</code>,  <code>2.51-1</code>,  <code>2.51-0</code>,  <code>2.09-4</code>,  <code>2.09-3</code>,  <code>2.09-2</code>,  </span></summary>
      

      ``2.65-0``,  ``2.57-0``,  ``2.52-1``,  ``2.52-0``,  ``2.51-1``,  ``2.51-0``,  ``2.09-4``,  ``2.09-3``,  ``2.09-2``,  ``2.09-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-module-runtime: ``0.016.*``
   :depends perl-namespace-autoclean: ``>=0.31,<0.32.0a0``
   :depends perl-params-validationcompiler: ``0.31.*``
   :depends perl-specio: ``0.50.*``
   :depends perl-test-fatal: ``0.016.*``
   :depends perl-try-tiny: ``0.32.*``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-datetime-timezone

   and update with::

      mamba update perl-datetime-timezone

  To create a new environment, run::

      mamba create --name myenvname perl-datetime-timezone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["2.65","2.57","2.52","2.52","2.51"];
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