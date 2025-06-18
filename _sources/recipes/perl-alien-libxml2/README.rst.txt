:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-alien-libxml2'
.. highlight: bash

perl-alien-libxml2
==================

.. conda:recipe:: perl-alien-libxml2
   :replaces_section_title:
   :noindex:

   Installs the C libxml2 library on your system.

   :homepage: https://metacpan.org/pod/Alien::Libxml2
   :developer docs: https://github.com/PerlAlien/Alien-Libxml2
   :license: Perl_5
   :recipe: /`perl-alien-libxml2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-libxml2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-libxml2/meta.yaml>`_

   


.. conda:package:: perl-alien-libxml2

   |downloads_perl-alien-libxml2| |docker_perl-alien-libxml2|

   :versions:
      
      

      ``0.20-0``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends libgcc: ``>=13``
   :depends libiconv: ``>=1.18,<2.0a0``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libxml2: ``>=2.14.4,<2.15.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-alien-build: ``>=2.84,<3.0a0``
   :depends perl-alien-build-plugin-download-gitlab: ``>=0.1,<0.2.0a0``
   :depends perl-test2-suite: ``0.000163.*``
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

      mamba install perl-alien-libxml2

   and update with::

      mamba update perl-alien-libxml2

  To create a new environment, run::

      mamba create --name myenvname perl-alien-libxml2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-alien-libxml2:<tag>

   (see `perl-alien-libxml2/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-alien-libxml2| image:: https://img.shields.io/conda/dn/bioconda/perl-alien-libxml2.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-alien-libxml2
   :alt:   (downloads)
.. |docker_perl-alien-libxml2| image:: https://quay.io/repository/biocontainers/perl-alien-libxml2/status
   :target: https://quay.io/repository/biocontainers/perl-alien-libxml2
.. _`perl-alien-libxml2/tags`: https://quay.io/repository/biocontainers/perl-alien-libxml2?tab=tags


.. raw:: html

    <script>
        var package = "perl-alien-libxml2";
        var versions = ["0.20","0.17","0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-alien-libxml2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-alien-libxml2/README.html