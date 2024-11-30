:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sanger-cgp-battenberg'
.. highlight: bash

perl-sanger-cgp-battenberg
==========================

.. conda:recipe:: perl-sanger-cgp-battenberg
   :replaces_section_title:
   :noindex:

   detect subclonality and copy number in matched NGS data

   :homepage: https://github.com/cancerit/cgpBattenberg
   :license: GPLv3
   :recipe: /`perl-sanger-cgp-battenberg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-battenberg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sanger-cgp-battenberg/meta.yaml>`_

   


.. conda:package:: perl-sanger-cgp-battenberg

   |downloads_perl-sanger-cgp-battenberg| |docker_perl-sanger-cgp-battenberg|

   :versions:
      
      

      ``1.4.1-9``,  ``1.4.1-8``,  ``1.4.1-7``,  ``1.4.1-6``,  ``1.4.1-5``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``

      

   
   :depends cancerit-allelecount: 
   :depends impute2: 
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-file-sharedir: 
   :depends perl-file-sharedir-install: 
   :depends perl-module-build: ``0.4234.*``
   :depends perl-pcap: 
   :depends perl-sanger-cgp-allelecount: 
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

      mamba install perl-sanger-cgp-battenberg

   and update with::

      mamba update perl-sanger-cgp-battenberg

  To create a new environment, run::

      mamba create --name myenvname perl-sanger-cgp-battenberg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sanger-cgp-battenberg:<tag>

   (see `perl-sanger-cgp-battenberg/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sanger-cgp-battenberg| image:: https://img.shields.io/conda/dn/bioconda/perl-sanger-cgp-battenberg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sanger-cgp-battenberg
   :alt:   (downloads)
.. |docker_perl-sanger-cgp-battenberg| image:: https://quay.io/repository/biocontainers/perl-sanger-cgp-battenberg/status
   :target: https://quay.io/repository/biocontainers/perl-sanger-cgp-battenberg
.. _`perl-sanger-cgp-battenberg/tags`: https://quay.io/repository/biocontainers/perl-sanger-cgp-battenberg?tab=tags


.. raw:: html

    <script>
        var package = "perl-sanger-cgp-battenberg";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sanger-cgp-battenberg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sanger-cgp-battenberg/README.html