:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamaps'
.. highlight: bash

metamaps
========

.. conda:recipe:: metamaps
   :replaces_section_title:
   :noindex:

   MetaMaps is a tool for long\-read metagenomic analysis

   :homepage: https://github.com/DiltheyLab/MetaMaps
   :license: Public Domain / Public Domain
   :recipe: /`metamaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamaps/meta.yaml>`_

   


.. conda:package:: metamaps

   |downloads_metamaps| |docker_metamaps|

   :versions:
      
      

      ``0.1.98102e9-2``,  ``0.1.98102e9-1``,  ``0.1.98102e9-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends perl-file-slurp: 
   :depends perl-http-message: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-simple: 
   :depends perl-math-random: 
   :depends perl-set-intervaltree: 
   :depends perl-statistics-basic: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :depends zlib: 
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

      mamba install metamaps

   and update with::

      mamba update metamaps

  To create a new environment, run::

      mamba create --name myenvname metamaps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metamaps:<tag>

   (see `metamaps/tags`_ for valid values for ``<tag>``)


.. |downloads_metamaps| image:: https://img.shields.io/conda/dn/bioconda/metamaps.svg?style=flat
   :target: https://anaconda.org/bioconda/metamaps
   :alt:   (downloads)
.. |docker_metamaps| image:: https://quay.io/repository/biocontainers/metamaps/status
   :target: https://quay.io/repository/biocontainers/metamaps
.. _`metamaps/tags`: https://quay.io/repository/biocontainers/metamaps?tab=tags


.. raw:: html

    <script>
        var package = "metamaps";
        var versions = ["0.1.98102e9","0.1.98102e9","0.1.98102e9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamaps/README.html