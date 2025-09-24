:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sys-info-driver-osx'
.. highlight: bash

perl-sys-info-driver-osx
========================

.. conda:recipe:: perl-sys-info-driver-osx
   :replaces_section_title:
   :noindex:

   OSX driver for Sys\:\:Info.

   :homepage: https://metacpan.org/pod/Sys::Info::Driver::OSX
   :license: Perl_5
   :recipe: /`perl-sys-info-driver-osx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-driver-osx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-driver-osx/meta.yaml>`_

   


.. conda:package:: perl-sys-info-driver-osx

   |downloads_perl-sys-info-driver-osx| |docker_perl-sys-info-driver-osx|

   :versions:
      
      

      ``0.7963-0``,  ``0.7960-0``,  ``0.7959-1``,  ``0.7959-0``,  ``0.7958-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-capture-tiny: 
   :depends perl-mac-propertylist: 
   :depends perl-parent: 
   :depends perl-sys-info-base: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-sys-info-driver-osx

   and update with::

      mamba update perl-sys-info-driver-osx

  To create a new environment, run::

      mamba create --name myenvname perl-sys-info-driver-osx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sys-info-driver-osx:<tag>

   (see `perl-sys-info-driver-osx/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sys-info-driver-osx| image:: https://img.shields.io/conda/dn/bioconda/perl-sys-info-driver-osx.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sys-info-driver-osx
   :alt:   (downloads)
.. |docker_perl-sys-info-driver-osx| image:: https://quay.io/repository/biocontainers/perl-sys-info-driver-osx/status
   :target: https://quay.io/repository/biocontainers/perl-sys-info-driver-osx
.. _`perl-sys-info-driver-osx/tags`: https://quay.io/repository/biocontainers/perl-sys-info-driver-osx?tab=tags


.. raw:: html

    <script>
        var package = "perl-sys-info-driver-osx";
        var versions = ["0.7963","0.7960","0.7959","0.7959","0.7958"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sys-info-driver-osx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sys-info-driver-osx/README.html