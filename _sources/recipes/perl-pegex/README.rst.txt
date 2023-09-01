:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pegex'
.. highlight: bash

perl-pegex
==========

.. conda:recipe:: perl-pegex
   :replaces_section_title:
   :noindex:

   Pegex Grammar for the Pegex Grammar Language

   :homepage: http://search.cpan.org/~ingy/Pegex-0.61/lib/Pegex.pod
   :license: perl_5
   :recipe: /`perl-pegex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pegex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pegex/meta.yaml>`_

   


.. conda:package:: perl-pegex

   |downloads_perl-pegex| |docker_perl-pegex|

   :versions:
      
      

      ``0.61-2``,  ``0.61-1``,  ``0.61-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-extutils-makemaker: 
   :depends perl-file-sharedir-install: 
   :depends perl-yaml-libyaml: 
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

      mamba install perl-pegex

   and update with::

      mamba update perl-pegex

  To create a new environment, run::

      mamba create --name myenvname perl-pegex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pegex:<tag>

   (see `perl-pegex/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pegex| image:: https://img.shields.io/conda/dn/bioconda/perl-pegex.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pegex
   :alt:   (downloads)
.. |docker_perl-pegex| image:: https://quay.io/repository/biocontainers/perl-pegex/status
   :target: https://quay.io/repository/biocontainers/perl-pegex
.. _`perl-pegex/tags`: https://quay.io/repository/biocontainers/perl-pegex?tab=tags


.. raw:: html

    <script>
        var package = "perl-pegex";
        var versions = ["0.61","0.61","0.61"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pegex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pegex/README.html