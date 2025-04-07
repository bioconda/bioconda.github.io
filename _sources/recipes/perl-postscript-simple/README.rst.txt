:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-postscript-simple'
.. highlight: bash

perl-postscript-simple
======================

.. conda:recipe:: perl-postscript-simple
   :replaces_section_title:
   :noindex:

   Produce PostScript files from Perl.

   :homepage: https://metacpan.org/pod/PostScript::Simple
   :license: GNU General Public License 2
   :recipe: /`perl-postscript-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-postscript-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-postscript-simple/meta.yaml>`_

   


.. conda:package:: perl-postscript-simple

   |downloads_perl-postscript-simple| |docker_perl-postscript-simple|

   :versions:
      
      

      ``0.09-0``

      

   
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

      mamba install perl-postscript-simple

   and update with::

      mamba update perl-postscript-simple

  To create a new environment, run::

      mamba create --name myenvname perl-postscript-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-postscript-simple:<tag>

   (see `perl-postscript-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-postscript-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-postscript-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-postscript-simple
   :alt:   (downloads)
.. |docker_perl-postscript-simple| image:: https://quay.io/repository/biocontainers/perl-postscript-simple/status
   :target: https://quay.io/repository/biocontainers/perl-postscript-simple
.. _`perl-postscript-simple/tags`: https://quay.io/repository/biocontainers/perl-postscript-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-postscript-simple";
        var versions = ["0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-postscript-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-postscript-simple/README.html