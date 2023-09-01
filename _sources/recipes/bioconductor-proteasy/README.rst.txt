:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proteasy'
.. highlight: bash

bioconductor-proteasy
=====================

.. conda:recipe:: bioconductor-proteasy
   :replaces_section_title:
   :noindex:

   Protease Mapping

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/proteasy.html
   :license: GPL-3
   :recipe: /`bioconductor-proteasy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteasy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteasy/meta.yaml>`_

   Retrieval of experimentally derived protease\- and cleavage data derived from the MEROPS database. Proteasy contains functions for mapping peptide termini to known sites where a protease cleaves. This package also makes it possible to quickly look up known substrates based on a list of \(potential\) proteases\, or vice versa \- look up proteases based on a list of substrates.


.. conda:package:: bioconductor-proteasy

   |downloads_bioconductor-proteasy| |docker_bioconductor-proteasy|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationfilter: ``>=1.24.0,<1.25.0``
   :depends bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensdb.mmusculus.v79: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensdb.rnorvegicus.v79: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rcpi: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-stringr: 
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

      mamba install bioconductor-proteasy

   and update with::

      mamba update bioconductor-proteasy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-proteasy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proteasy:<tag>

   (see `bioconductor-proteasy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proteasy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteasy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proteasy
   :alt:   (downloads)
.. |docker_bioconductor-proteasy| image:: https://quay.io/repository/biocontainers/bioconductor-proteasy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteasy
.. _`bioconductor-proteasy/tags`: https://quay.io/repository/biocontainers/bioconductor-proteasy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proteasy";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteasy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteasy/README.html