:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-r4rna'
.. highlight: bash

bioconductor-r4rna
==================

.. conda:recipe:: bioconductor-r4rna
   :replaces_section_title:
   :noindex:

   An R package for RNA visualization and analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/R4RNA.html
   :license: GPL-3
   :recipe: /`bioconductor-r4rna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r4rna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r4rna/meta.yaml>`_
   :links: biotools: :biotools:`r4rna`

   A package for RNA basepair analysis\, including the visualization of basepairs as arc diagrams for easy comparison and annotation of sequence and structure.  Arc diagrams can additionally be projected onto multiple sequence alignments to assess basepair conservation and covariation\, with numerical methods for computing statistics for each.


.. conda:package:: bioconductor-r4rna

   |downloads_bioconductor-r4rna| |docker_bioconductor-r4rna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-r4rna

   and update with::

      mamba update bioconductor-r4rna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-r4rna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-r4rna:<tag>

   (see `bioconductor-r4rna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-r4rna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r4rna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-r4rna
   :alt:   (downloads)
.. |docker_bioconductor-r4rna| image:: https://quay.io/repository/biocontainers/bioconductor-r4rna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r4rna
.. _`bioconductor-r4rna/tags`: https://quay.io/repository/biocontainers/bioconductor-r4rna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-r4rna";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r4rna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r4rna/README.html