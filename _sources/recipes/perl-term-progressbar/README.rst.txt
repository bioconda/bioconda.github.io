:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-progressbar'
.. highlight: bash

perl-term-progressbar
=====================

.. conda:recipe:: perl-term-progressbar
   :replaces_section_title:
   :noindex:

   provide a progress meter on a standard terminal

   :homepage: http://metacpan.org/pod/Term::ProgressBar
   :license: perl_5
   :recipe: /`perl-term-progressbar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-progressbar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-progressbar/meta.yaml>`_

   


.. conda:package:: perl-term-progressbar

   |downloads_perl-term-progressbar| |docker_perl-term-progressbar|

   :versions:
      
      

      ``2.22-1``,  ``2.22-0``,  ``2.21-1``,  ``2.21-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-class-methodmaker: 
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

      mamba install perl-term-progressbar

   and update with::

      mamba update perl-term-progressbar

  To create a new environment, run::

      mamba create --name myenvname perl-term-progressbar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-term-progressbar:<tag>

   (see `perl-term-progressbar/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-progressbar| image:: https://img.shields.io/conda/dn/bioconda/perl-term-progressbar.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-progressbar
   :alt:   (downloads)
.. |docker_perl-term-progressbar| image:: https://quay.io/repository/biocontainers/perl-term-progressbar/status
   :target: https://quay.io/repository/biocontainers/perl-term-progressbar
.. _`perl-term-progressbar/tags`: https://quay.io/repository/biocontainers/perl-term-progressbar?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-progressbar";
        var versions = ["2.22","2.22","2.21","2.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-progressbar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-progressbar/README.html