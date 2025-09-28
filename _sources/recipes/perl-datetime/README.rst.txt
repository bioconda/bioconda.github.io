:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime'
.. highlight: bash

perl-datetime
=============

.. conda:recipe:: perl-datetime
   :replaces_section_title:
   :noindex:

   A date and time object for Perl.

   :homepage: https://metacpan.org/dist/DateTime
   :license: Artistic_2
   :recipe: /`perl-datetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime/meta.yaml>`_

   


.. conda:package:: perl-datetime

   |downloads_perl-datetime| |docker_perl-datetime|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66-0</code>,  <code>1.65-0</code>,  <code>1.59-2</code>,  <code>1.59-1</code>,  <code>1.59-0</code>,  <code>1.58-1</code>,  <code>1.58-0</code>,  <code>1.57-0</code>,  <code>1.55-1</code>,  </span></summary>
      

      ``1.66-0``,  ``1.65-0``,  ``1.59-2``,  ``1.59-1``,  ``1.59-0``,  ``1.58-1``,  ``1.58-0``,  ``1.57-0``,  ``1.55-1``,  ``1.55-0``,  ``1.42-5``,  ``1.42-4``,  ``1.42-2``,  ``1.42-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-cpan-meta-check: ``0.014.*``
   :depends perl-datetime-locale: ``>=1.45,<2.0a0``
   :depends perl-datetime-timezone: ``>=2.65,<3.0a0``
   :depends perl-namespace-autoclean: ``>=0.31,<0.32.0a0``
   :depends perl-params-validationcompiler: ``0.31.*``
   :depends perl-params-validationcompiler: ``>=0.26``
   :depends perl-specio: ``0.52.*``
   :depends perl-test-fatal: ``0.016.*``
   :depends perl-test-warnings: ``0.031.*``
   :depends perl-test-without-module: 
   :depends perl-try-tiny: ``0.32.*``
   :depends perl-variable-magic: ``0.64.*``
   :depends perl-warnings-register: 
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

      mamba install perl-datetime

   and update with::

      mamba update perl-datetime

  To create a new environment, run::

      mamba create --name myenvname perl-datetime

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.66","1.65","1.59","1.59","1.59"];
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