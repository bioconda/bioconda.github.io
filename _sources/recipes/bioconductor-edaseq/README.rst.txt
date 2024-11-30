:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edaseq'
.. highlight: bash

bioconductor-edaseq
===================

.. conda:recipe:: bioconductor-edaseq
   :replaces_section_title:
   :noindex:

   Exploratory Data Analysis and Normalization for RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EDASeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-edaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edaseq/meta.yaml>`_
   :links: biotools: :biotools:`edaseq`

   Numerical and graphical summaries of RNA\-Seq read data. Within\-lane normalization procedures to adjust for GC\-content effect \(or other gene\-level effects\) on read counts\: loess robust local regression\, global\-scaling\, and full\-quantile normalization \(Risso et al.\, 2011\). Between\-lane normalization procedures to adjust for distributional differences between lanes \(e.g.\, sequencing depth\)\: global\-scaling and full\-quantile normalization \(Bullard et al.\, 2010\).


.. conda:package:: bioconductor-edaseq

   |downloads_bioconductor-edaseq| |docker_bioconductor-edaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.1-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-aroma.light: ``>=3.32.0,<3.33.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
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

      mamba install bioconductor-edaseq

   and update with::

      mamba update bioconductor-edaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-edaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-edaseq:<tag>

   (see `bioconductor-edaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-edaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edaseq
   :alt:   (downloads)
.. |docker_bioconductor-edaseq| image:: https://quay.io/repository/biocontainers/bioconductor-edaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edaseq
.. _`bioconductor-edaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-edaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-edaseq";
        var versions = ["2.36.0","2.34.0","2.32.0","2.28.0","2.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edaseq/README.html