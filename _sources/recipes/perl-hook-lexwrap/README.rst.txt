:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-hook-lexwrap'
.. highlight: bash

perl-hook-lexwrap
=================

.. conda:recipe:: perl-hook-lexwrap/0.26
   :replaces_section_title:
   :noindex:

   Lexically scoped subroutine wrappers

   :homepage: https://github.com/karenetheridge/Hook-LexWrap
   :license: perl_5
   :recipe: /`perl-hook-lexwrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hook-lexwrap>`_/`0.26 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hook-lexwrap/0.26>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hook-lexwrap/0.26/meta.yaml>`_

   


.. conda:package:: perl-hook-lexwrap

   |downloads_perl-hook-lexwrap| |docker_perl-hook-lexwrap|

   :versions:
      
      

      ``0.26-2``,  ``0.26-1``,  ``0.26-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
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

      mamba install perl-hook-lexwrap

   and update with::

      mamba update perl-hook-lexwrap

  To create a new environment, run::

      mamba create --name myenvname perl-hook-lexwrap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-hook-lexwrap:<tag>

   (see `perl-hook-lexwrap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-hook-lexwrap| image:: https://img.shields.io/conda/dn/bioconda/perl-hook-lexwrap.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-hook-lexwrap
   :alt:   (downloads)
.. |docker_perl-hook-lexwrap| image:: https://quay.io/repository/biocontainers/perl-hook-lexwrap/status
   :target: https://quay.io/repository/biocontainers/perl-hook-lexwrap
.. _`perl-hook-lexwrap/tags`: https://quay.io/repository/biocontainers/perl-hook-lexwrap?tab=tags


.. raw:: html

    <script>
        var package = "perl-hook-lexwrap";
        var versions = ["0.26","0.26","0.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hook-lexwrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hook-lexwrap/README.html