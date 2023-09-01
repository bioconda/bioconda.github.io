:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-manifest'
.. highlight: bash

perl-extutils-manifest
======================

.. conda:recipe:: perl-extutils-manifest
   :replaces_section_title:
   :noindex:

   Utilities to write and check a MANIFEST file

   :homepage: https://metacpan.org/release/ExtUtils-Manifest
   :license: perl_5
   :recipe: /`perl-extutils-manifest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-manifest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-manifest/meta.yaml>`_

   


.. conda:package:: perl-extutils-manifest

   |downloads_perl-extutils-manifest| |docker_perl-extutils-manifest|

   :versions:
      
      

      ``1.73-0``,  ``1.72-1``,  ``1.72-0``,  ``1.71-0``,  ``1.70-2``,  ``1.70-1``,  ``1.70-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-extutils-manifest

   and update with::

      mamba update perl-extutils-manifest

  To create a new environment, run::

      mamba create --name myenvname perl-extutils-manifest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-manifest:<tag>

   (see `perl-extutils-manifest/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-manifest| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-manifest.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-manifest
   :alt:   (downloads)
.. |docker_perl-extutils-manifest| image:: https://quay.io/repository/biocontainers/perl-extutils-manifest/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-manifest
.. _`perl-extutils-manifest/tags`: https://quay.io/repository/biocontainers/perl-extutils-manifest?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-manifest";
        var versions = ["1.73","1.72","1.72","1.71","1.70"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-manifest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-manifest/README.html