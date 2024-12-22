:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genextender'
.. highlight: bash

bioconductor-genextender
========================

.. conda:recipe:: bioconductor-genextender
   :replaces_section_title:
   :noindex:

   Optimized Functional Annotation Of ChIP\-seq Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/geneXtendeR.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-genextender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genextender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genextender/meta.yaml>`_
   :links: biotools: :biotools:`genextender`

   geneXtendeR optimizes the functional annotation of ChIP\-seq peaks by exploring relative differences in annotating ChIP\-seq peak sets to variable\-length gene bodies.  In contrast to prior techniques\, geneXtendeR considers peak annotations beyond just the closest gene\, allowing users to see peak summary statistics for the first\-closest gene\, second\-closest gene\, ...\, n\-closest gene whilst ranking the output according to biologically relevant events and iteratively comparing the fidelity of peak\-to\-gene overlap across a user\-defined range of upstream and downstream extensions on the original boundaries of each gene\'s coordinates.  Since different ChIP\-seq peak callers produce different differentially enriched peaks with a large variance in peak length distribution and total peak count\, annotating peak lists with their nearest genes can often be a noisy process.  As such\, the goal of geneXtendeR is to robustly link differentially enriched peaks with their respective genes\, thereby aiding experimental follow\-up and validation in designing primers for a set of prospective gene candidates during qPCR.


.. conda:package:: bioconductor-genextender

   |downloads_bioconductor-genextender| |docker_bioconductor-genextender|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0a0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0a0``
   :depends bioconductor-org.rn.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-org.rn.eg.db: ``>=3.20.0,<3.21.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-networkd3: 
   :depends r-rcolorbrewer: 
   :depends r-snowballc: 
   :depends r-tm: 
   :depends r-wordcloud: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-genextender

   and update with::

      mamba update bioconductor-genextender

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genextender

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genextender:<tag>

   (see `bioconductor-genextender/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genextender| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genextender.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genextender
   :alt:   (downloads)
.. |docker_bioconductor-genextender| image:: https://quay.io/repository/biocontainers/bioconductor-genextender/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genextender
.. _`bioconductor-genextender/tags`: https://quay.io/repository/biocontainers/bioconductor-genextender?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genextender";
        var versions = ["1.32.0","1.28.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genextender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genextender/README.html