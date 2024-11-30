:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-copy-recursive-reduced'
.. highlight: bash

perl-file-copy-recursive-reduced
================================

.. conda:recipe:: perl-file-copy-recursive-reduced
   :replaces_section_title:
   :noindex:

   Recursive copying of files and directories within Perl 5 toolchain

   :homepage: http://thenceforward.net/perl/modules/File-Copy-Recursive-Reduced/
   :license: perl_5
   :recipe: /`perl-file-copy-recursive-reduced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive-reduced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-copy-recursive-reduced/meta.yaml>`_

   


.. conda:package:: perl-file-copy-recursive-reduced

   |downloads_perl-file-copy-recursive-reduced| |docker_perl-file-copy-recursive-reduced|

   :versions:
      
      

      ``0.006-1``,  ``0.006-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-path: 
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

      mamba install perl-file-copy-recursive-reduced

   and update with::

      mamba update perl-file-copy-recursive-reduced

  To create a new environment, run::

      mamba create --name myenvname perl-file-copy-recursive-reduced

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-copy-recursive-reduced:<tag>

   (see `perl-file-copy-recursive-reduced/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-copy-recursive-reduced| image:: https://img.shields.io/conda/dn/bioconda/perl-file-copy-recursive-reduced.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-copy-recursive-reduced
   :alt:   (downloads)
.. |docker_perl-file-copy-recursive-reduced| image:: https://quay.io/repository/biocontainers/perl-file-copy-recursive-reduced/status
   :target: https://quay.io/repository/biocontainers/perl-file-copy-recursive-reduced
.. _`perl-file-copy-recursive-reduced/tags`: https://quay.io/repository/biocontainers/perl-file-copy-recursive-reduced?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-copy-recursive-reduced";
        var versions = ["0.006","0.006"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-copy-recursive-reduced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-copy-recursive-reduced/README.html