:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-copy-recursive'
.. highlight: bash

perl-file-copy-recursive
========================

.. conda:recipe:: perl-file-copy-recursive
   :replaces_section_title:
   :noindex:

   Perl extension for recursively copying files and directories

   :homepage: https://metacpan.org/pod/File::Copy::Recursive
   :license: Perl
   :recipe: /`perl-file-copy-recursive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive/meta.yaml>`_

   


.. conda:package:: perl-file-copy-recursive

   |downloads_perl-file-copy-recursive| |docker_perl-file-copy-recursive|

   :versions:
      
      

      ``0.45-3``,  ``0.45-2``,  ``0.45-1``,  ``0.45-0``,  ``0.44-1``,  ``0.44-0``,  ``0.38-3``,  ``0.38-2``,  ``0.38-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-test-fatal: ``0.016.*``
   :depends perl-test-warnings: ``0.031.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-file-copy-recursive

   and update with::

      mamba update perl-file-copy-recursive

  To create a new environment, run::

      mamba create --name myenvname perl-file-copy-recursive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-copy-recursive:<tag>

   (see `perl-file-copy-recursive/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-copy-recursive| image:: https://img.shields.io/conda/dn/bioconda/perl-file-copy-recursive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-copy-recursive
   :alt:   (downloads)
.. |docker_perl-file-copy-recursive| image:: https://quay.io/repository/biocontainers/perl-file-copy-recursive/status
   :target: https://quay.io/repository/biocontainers/perl-file-copy-recursive
.. _`perl-file-copy-recursive/tags`: https://quay.io/repository/biocontainers/perl-file-copy-recursive?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-copy-recursive";
        var versions = ["0.45","0.45","0.45","0.45","0.44"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-copy-recursive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-copy-recursive/README.html