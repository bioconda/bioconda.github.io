:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-config-autoconf'
.. highlight: bash

perl-config-autoconf
====================

.. conda:recipe:: perl-config-autoconf
   :replaces_section_title:
   :noindex:

   A module to implement some of AutoConf macros in pure perl.

   :homepage: https://metacpan.org/release/Config-AutoConf
   :license: perl_5
   :recipe: /`perl-config-autoconf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-autoconf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-autoconf/meta.yaml>`_

   


.. conda:package:: perl-config-autoconf

   |downloads_perl-config-autoconf| |docker_perl-config-autoconf|

   :versions:
      
      

      ``0.320-3``,  ``0.320-2``,  ``0.320-1``,  ``0.320-0``,  ``0.317-1``,  ``0.317-0``,  ``0.311-2``,  ``0.311-1``,  ``0.311-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-capture-tiny: 
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-file-temp: 
   :depends perl-text-parsewords: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-config-autoconf

   and update with::

      mamba update perl-config-autoconf

  To create a new environment, run::

      mamba create --name myenvname perl-config-autoconf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-config-autoconf:<tag>

   (see `perl-config-autoconf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-config-autoconf| image:: https://img.shields.io/conda/dn/bioconda/perl-config-autoconf.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-config-autoconf
   :alt:   (downloads)
.. |docker_perl-config-autoconf| image:: https://quay.io/repository/biocontainers/perl-config-autoconf/status
   :target: https://quay.io/repository/biocontainers/perl-config-autoconf
.. _`perl-config-autoconf/tags`: https://quay.io/repository/biocontainers/perl-config-autoconf?tab=tags


.. raw:: html

    <script>
        var package = "perl-config-autoconf";
        var versions = ["0.320","0.320","0.320","0.320","0.317"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-autoconf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-autoconf/README.html