:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gfacs'
.. highlight: bash

perl-gfacs
==========

.. conda:recipe:: perl-gfacs
   :replaces_section_title:
   :noindex:

   gFACs is a filtering\, analysis\, and conversion tool to unify genome annotations across alignment and gene prediction frameworks.

   :homepage: https://gitlab.com/PlantGenomicsLab/gFACs
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`perl-gfacs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gfacs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gfacs/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.gpb.2019.04.002`

   


.. conda:package:: perl-gfacs

   |downloads_perl-gfacs| |docker_perl-gfacs|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends perl-bioperl: ``>=1.7.2``
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

      mamba install perl-gfacs

   and update with::

      mamba update perl-gfacs

  To create a new environment, run::

      mamba create --name myenvname perl-gfacs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-gfacs:<tag>

   (see `perl-gfacs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gfacs| image:: https://img.shields.io/conda/dn/bioconda/perl-gfacs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gfacs
   :alt:   (downloads)
.. |docker_perl-gfacs| image:: https://quay.io/repository/biocontainers/perl-gfacs/status
   :target: https://quay.io/repository/biocontainers/perl-gfacs
.. _`perl-gfacs/tags`: https://quay.io/repository/biocontainers/perl-gfacs?tab=tags


.. raw:: html

    <script>
        var package = "perl-gfacs";
        var versions = ["1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gfacs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gfacs/README.html