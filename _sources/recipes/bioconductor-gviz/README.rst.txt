:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gviz'
.. highlight: bash

bioconductor-gviz
=================

.. conda:recipe:: bioconductor-gviz
   :replaces_section_title:
   :noindex:

   Plotting data and annotation information along genomic coordinates

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Gviz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gviz/meta.yaml>`_
   :links: biotools: :biotools:`gviz`

   Genomic data analyses requires integrated visualization of known genomic information and new experimental data. Gviz uses the biomaRt and the rtracklayer packages to perform live annotation queries to Ensembl and UCSC and translates this to e.g. gene\/transcript structures in viewports of the grid graphics package. This results in genomic information plotted together with your data.


.. conda:package:: bioconductor-gviz

   |downloads_bioconductor-gviz| |docker_bioconductor-gviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.1-0</code>,  <code>1.34.1-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.1-0``,  ``1.34.1-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.4-0``,  ``1.24.0-0``,  ``1.22.3-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.5-2``,  ``1.14.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-biovizbase: ``>=1.48.0,<1.49.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-xvector: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: ``>=0.6.8``
   :depends r-lattice: 
   :depends r-latticeextra: ``>=0.6-26``
   :depends r-matrixstats: ``>=0.8.14``
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-gviz

   and update with::

      mamba update bioconductor-gviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gviz:<tag>

   (see `bioconductor-gviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gviz
   :alt:   (downloads)
.. |docker_bioconductor-gviz| image:: https://quay.io/repository/biocontainers/bioconductor-gviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gviz
.. _`bioconductor-gviz/tags`: https://quay.io/repository/biocontainers/bioconductor-gviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gviz";
        var versions = ["1.44.0","1.42.0","1.38.0","1.36.1","1.34.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gviz/README.html