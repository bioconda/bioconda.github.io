:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kpop'
.. highlight: bash

kpop
====

.. conda:recipe:: kpop
   :replaces_section_title:
   :noindex:

   An assembly\-free and scalable method for the comparative analysis of microbial genomes\, based on full k\-mer spectra and dataset\-specific transformations.

   :homepage: https://github.com/PaoloRibeca/KPop
   :license: GPL-3.0-only
   :recipe: /`kpop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kpop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kpop/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.06.22.497172`

   KPop is an assembly\-free and scalable method for the comparative analysis of microbial genomes\, based on full k\-mer spectra and dataset\-specific transformations. It is built using OCaml \<https\:\/\/ocaml.org\> and R \<https\:\/\/www.r\-project.org\/\>.


.. conda:package:: kpop

   |downloads_kpop| |docker_kpop|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends r-ca: 
   :depends r-data.table: 
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

      mamba install kpop

   and update with::

      mamba update kpop

  To create a new environment, run::

      mamba create --name myenvname kpop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kpop:<tag>

   (see `kpop/tags`_ for valid values for ``<tag>``)


.. |downloads_kpop| image:: https://img.shields.io/conda/dn/bioconda/kpop.svg?style=flat
   :target: https://anaconda.org/bioconda/kpop
   :alt:   (downloads)
.. |docker_kpop| image:: https://quay.io/repository/biocontainers/kpop/status
   :target: https://quay.io/repository/biocontainers/kpop
.. _`kpop/tags`: https://quay.io/repository/biocontainers/kpop?tab=tags


.. raw:: html

    <script>
        var package = "kpop";
        var versions = ["1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kpop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kpop/README.html