:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-alien-build'
.. highlight: bash

perl-alien-build
================

.. conda:recipe:: perl-alien-build
   :replaces_section_title:
   :noindex:

   Build external dependencies for use in CPAN

   :homepage: https://metacpan.org/pod/Alien::Build
   :license: perl_5
   :recipe: /`perl-alien-build <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-build>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-build/meta.yaml>`_

   


.. conda:package:: perl-alien-build

   |downloads_perl-alien-build| |docker_perl-alien-build|

   :versions:
      
      

      ``2.84-0``,  ``2.53-0``,  ``2.51-0``,  ``2.50-0``,  ``2.49-0``,  ``2.48-0``

      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-capture-tiny: 
   :depends perl-ffi-checklib: ``0.28.*``
   :depends perl-file-chdir: 
   :depends perl-file-which: 
   :depends perl-path-tiny: 
   :depends perl-test2-suite: ``0.000163.*``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-alien-build

   and update with::

      mamba update perl-alien-build

  To create a new environment, run::

      mamba create --name myenvname perl-alien-build

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-alien-build:<tag>

   (see `perl-alien-build/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-alien-build| image:: https://img.shields.io/conda/dn/bioconda/perl-alien-build.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-alien-build
   :alt:   (downloads)
.. |docker_perl-alien-build| image:: https://quay.io/repository/biocontainers/perl-alien-build/status
   :target: https://quay.io/repository/biocontainers/perl-alien-build
.. _`perl-alien-build/tags`: https://quay.io/repository/biocontainers/perl-alien-build?tab=tags


.. raw:: html

    <script>
        var package = "perl-alien-build";
        var versions = ["2.84","2.53","2.51","2.50","2.49"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-alien-build/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-alien-build/README.html