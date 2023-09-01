:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-locale-maketext-simple'
.. highlight: bash

perl-locale-maketext-simple
===========================

.. conda:recipe:: perl-locale-maketext-simple
   :replaces_section_title:
   :noindex:

   Simple interface to Locale\:\:Maketext\:\:Lexicon

   :homepage: http://metacpan.org/pod/Locale::Maketext::Simple
   :license: perl_5
   :recipe: /`perl-locale-maketext-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-locale-maketext-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-locale-maketext-simple/meta.yaml>`_

   


.. conda:package:: perl-locale-maketext-simple

   |downloads_perl-locale-maketext-simple| |docker_perl-locale-maketext-simple|

   :versions:
      
      

      ``0.21-3``,  ``0.21-2``,  ``0.21-1``,  ``0.21-0``

      

   
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

      mamba install perl-locale-maketext-simple

   and update with::

      mamba update perl-locale-maketext-simple

  To create a new environment, run::

      mamba create --name myenvname perl-locale-maketext-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-locale-maketext-simple:<tag>

   (see `perl-locale-maketext-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-locale-maketext-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-locale-maketext-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-locale-maketext-simple
   :alt:   (downloads)
.. |docker_perl-locale-maketext-simple| image:: https://quay.io/repository/biocontainers/perl-locale-maketext-simple/status
   :target: https://quay.io/repository/biocontainers/perl-locale-maketext-simple
.. _`perl-locale-maketext-simple/tags`: https://quay.io/repository/biocontainers/perl-locale-maketext-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-locale-maketext-simple";
        var versions = ["0.21","0.21","0.21","0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-locale-maketext-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-locale-maketext-simple/README.html