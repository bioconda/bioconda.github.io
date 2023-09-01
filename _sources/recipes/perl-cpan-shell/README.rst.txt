:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cpan-shell'
.. highlight: bash

perl-cpan-shell
===============

.. conda:recipe:: perl-cpan-shell/5.5004
   :replaces_section_title:
   :noindex:

   

   :homepage: http://metacpan.org/pod/CPAN::Shell
   :license: perl_5
   :recipe: /`perl-cpan-shell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-shell>`_/`5.5004 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-shell/5.5004>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-shell/5.5004/meta.yaml>`_

   


.. conda:package:: perl-cpan-shell

   |downloads_perl-cpan-shell| |docker_perl-cpan-shell|

   :versions:
      
      

      ``5.5004-2``,  ``5.5004-1``,  ``5.5004-0``

      

   
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

      mamba install perl-cpan-shell

   and update with::

      mamba update perl-cpan-shell

  To create a new environment, run::

      mamba create --name myenvname perl-cpan-shell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-cpan-shell:<tag>

   (see `perl-cpan-shell/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cpan-shell| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-shell.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cpan-shell
   :alt:   (downloads)
.. |docker_perl-cpan-shell| image:: https://quay.io/repository/biocontainers/perl-cpan-shell/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-shell
.. _`perl-cpan-shell/tags`: https://quay.io/repository/biocontainers/perl-cpan-shell?tab=tags


.. raw:: html

    <script>
        var package = "perl-cpan-shell";
        var versions = ["5.5004","5.5004","5.5004"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-shell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-shell/README.html