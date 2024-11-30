:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-loaded'
.. highlight: bash

perl-module-loaded
==================

.. conda:recipe:: perl-module-loaded
   :replaces_section_title:
   :noindex:

   Mark modules as loaded\/unloaded

   :homepage: http://metacpan.org/pod/Module::Loaded
   :license: perl_5
   :recipe: /`perl-module-loaded <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-loaded>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-loaded/meta.yaml>`_

   


.. conda:package:: perl-module-loaded

   |downloads_perl-module-loaded| |docker_perl-module-loaded|

   :versions:
      
      

      ``0.08-1``,  ``0.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-module-loaded

   and update with::

      mamba update perl-module-loaded

  To create a new environment, run::

      mamba create --name myenvname perl-module-loaded

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-module-loaded:<tag>

   (see `perl-module-loaded/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-loaded| image:: https://img.shields.io/conda/dn/bioconda/perl-module-loaded.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-loaded
   :alt:   (downloads)
.. |docker_perl-module-loaded| image:: https://quay.io/repository/biocontainers/perl-module-loaded/status
   :target: https://quay.io/repository/biocontainers/perl-module-loaded
.. _`perl-module-loaded/tags`: https://quay.io/repository/biocontainers/perl-module-loaded?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-loaded";
        var versions = ["0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-loaded/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-loaded/README.html