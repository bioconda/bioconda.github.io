:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggseqalign'
.. highlight: bash

bioconductor-ggseqalign
=======================

.. conda:recipe:: bioconductor-ggseqalign
   :replaces_section_title:
   :noindex:

   Minimal Visualization of Sequence Alignments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ggseqalign.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggseqalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggseqalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggseqalign/meta.yaml>`_

   Simple visualizations of alignments of DNA or AA sequences as well as arbitrary strings. Compatible with Biostrings and ggplot2. The plots are fully customizable using ggplot2 modifiers such as theme\(\).


.. conda:package:: bioconductor-ggseqalign

   |downloads_bioconductor-ggseqalign| |docker_bioconductor-ggseqalign|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-ggseqalign

   and update with::

      mamba update bioconductor-ggseqalign

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggseqalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggseqalign:<tag>

   (see `bioconductor-ggseqalign/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggseqalign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggseqalign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggseqalign
   :alt:   (downloads)
.. |docker_bioconductor-ggseqalign| image:: https://quay.io/repository/biocontainers/bioconductor-ggseqalign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggseqalign
.. _`bioconductor-ggseqalign/tags`: https://quay.io/repository/biocontainers/bioconductor-ggseqalign?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggseqalign";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggseqalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggseqalign/README.html