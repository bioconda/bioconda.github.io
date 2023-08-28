:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-color-theme'
.. highlight: bash

perl-color-theme
================

.. conda:recipe:: perl-color-theme
   :replaces_section_title:
   :noindex:

   Color theme structure

   :homepage: https://metacpan.org/release/Color-Theme
   :license: perl_5
   :recipe: /`perl-color-theme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-color-theme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-color-theme/meta.yaml>`_

   


.. conda:package:: perl-color-theme

   |downloads_perl-color-theme| |docker_perl-color-theme|

   :versions:
      
      

      ``0.10.1-1``,  ``0.10.1-0``,  ``0.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-color-theme

   and update with::

      mamba update perl-color-theme

  To create a new environment, run::

      mamba create --name myenvname perl-color-theme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-color-theme:<tag>

   (see `perl-color-theme/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-color-theme| image:: https://img.shields.io/conda/dn/bioconda/perl-color-theme.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-color-theme
   :alt:   (downloads)
.. |docker_perl-color-theme| image:: https://quay.io/repository/biocontainers/perl-color-theme/status
   :target: https://quay.io/repository/biocontainers/perl-color-theme
.. _`perl-color-theme/tags`: https://quay.io/repository/biocontainers/perl-color-theme?tab=tags


.. raw:: html

    <script>
        var package = "perl-color-theme";
        var versions = ["0.10.1","0.10.1","0.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-color-theme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-color-theme/README.html