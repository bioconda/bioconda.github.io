:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-metadata'
.. highlight: bash

perl-module-metadata
====================

.. conda:recipe:: perl-module-metadata
   :replaces_section_title:
   :noindex:

   Gather package and POD information from perl module files

   :homepage: https://github.com/Perl-Toolchain-Gang/Module-Metadata
   :license: perl_5
   :recipe: /`perl-module-metadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-metadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-metadata/meta.yaml>`_

   


.. conda:package:: perl-module-metadata

   |downloads_perl-module-metadata| |docker_perl-module-metadata|

   :versions:
      
      

      ``1.000038-0``,  ``1.000037-0``,  ``1.000036-1``,  ``1.000036-0``,  ``1.000033-0``,  ``1.000019-1``,  ``1.000019-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-encode: 
   :depends perl-version: 
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

      mamba install perl-module-metadata

   and update with::

      mamba update perl-module-metadata

  To create a new environment, run::

      mamba create --name myenvname perl-module-metadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-module-metadata:<tag>

   (see `perl-module-metadata/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-metadata| image:: https://img.shields.io/conda/dn/bioconda/perl-module-metadata.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-metadata
   :alt:   (downloads)
.. |docker_perl-module-metadata| image:: https://quay.io/repository/biocontainers/perl-module-metadata/status
   :target: https://quay.io/repository/biocontainers/perl-module-metadata
.. _`perl-module-metadata/tags`: https://quay.io/repository/biocontainers/perl-module-metadata?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-metadata";
        var versions = ["1.000038","1.000037","1.000036","1.000036","1.000033"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-metadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-metadata/README.html