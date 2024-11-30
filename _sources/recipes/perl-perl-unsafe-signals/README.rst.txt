:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl-unsafe-signals'
.. highlight: bash

perl-perl-unsafe-signals
========================

.. conda:recipe:: perl-perl-unsafe-signals
   :replaces_section_title:
   :noindex:

   Allow unsafe handling of signals in selected blocks

   :homepage: http://metacpan.org/pod/Perl::Unsafe::Signals
   :license: perl_5
   :recipe: /`perl-perl-unsafe-signals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-unsafe-signals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-unsafe-signals/meta.yaml>`_

   


.. conda:package:: perl-perl-unsafe-signals

   |downloads_perl-perl-unsafe-signals| |docker_perl-perl-unsafe-signals|

   :versions:
      
      

      ``0.03-8``,  ``0.03-7``,  ``0.03-6``,  ``0.03-5``,  ``0.03-4``,  ``0.03-3``,  ``0.03-2``,  ``0.03-1``,  ``0.03-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-perl-unsafe-signals

   and update with::

      mamba update perl-perl-unsafe-signals

  To create a new environment, run::

      mamba create --name myenvname perl-perl-unsafe-signals

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-perl-unsafe-signals:<tag>

   (see `perl-perl-unsafe-signals/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perl-unsafe-signals| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-unsafe-signals.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perl-unsafe-signals
   :alt:   (downloads)
.. |docker_perl-perl-unsafe-signals| image:: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals/status
   :target: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals
.. _`perl-perl-unsafe-signals/tags`: https://quay.io/repository/biocontainers/perl-perl-unsafe-signals?tab=tags


.. raw:: html

    <script>
        var package = "perl-perl-unsafe-signals";
        var versions = ["0.03","0.03","0.03","0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-unsafe-signals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-unsafe-signals/README.html