:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-copy-link'
.. highlight: bash

perl-file-copy-link
===================

.. conda:recipe:: perl-file-copy-link
   :replaces_section_title:
   :noindex:

   Perl extension for replacing a link by a copy of the linked file.

   :homepage: https://metacpan.org/pod/File::Copy::Link
   :license: Perl
   :recipe: /`perl-file-copy-link <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-link>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-link/meta.yaml>`_

   


.. conda:package:: perl-file-copy-link

   |downloads_perl-file-copy-link| |docker_perl-file-copy-link|

   :versions:
      
      

      ``0.140-7``,  ``0.140-6``,  ``0.140-5``,  ``0.140-4``,  ``0.140-3``,  ``0.140-2``,  ``0.140-1``,  ``0.140-0``

      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-module-build: ``0.4234.*``
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

      mamba install perl-file-copy-link

   and update with::

      mamba update perl-file-copy-link

  To create a new environment, run::

      mamba create --name myenvname perl-file-copy-link

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-copy-link:<tag>

   (see `perl-file-copy-link/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-copy-link| image:: https://img.shields.io/conda/dn/bioconda/perl-file-copy-link.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-copy-link
   :alt:   (downloads)
.. |docker_perl-file-copy-link| image:: https://quay.io/repository/biocontainers/perl-file-copy-link/status
   :target: https://quay.io/repository/biocontainers/perl-file-copy-link
.. _`perl-file-copy-link/tags`: https://quay.io/repository/biocontainers/perl-file-copy-link?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-copy-link";
        var versions = ["0.140","0.140","0.140","0.140","0.140"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-copy-link/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-copy-link/README.html