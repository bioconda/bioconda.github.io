:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-titancna'
.. highlight: bash

bioconductor-titancna
=====================

.. conda:recipe:: bioconductor-titancna
   :replaces_section_title:
   :noindex:

   Subclonal copy number and LOH prediction from whole genome sequencing of tumours

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TitanCNA.html
   :license: GPL-3
   :recipe: /`bioconductor-titancna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-titancna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-titancna/meta.yaml>`_
   :links: biotools: :biotools:`titancna`

   Hidden Markov model to segment and predict regions of subclonal copy number alterations \(CNA\) and loss of heterozygosity \(LOH\)\, and estimate cellular prevalence of clonal clusters in tumour whole genome sequencing data.


.. conda:package:: bioconductor-titancna

   |downloads_bioconductor-titancna| |docker_bioconductor-titancna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.19.1-4``,  ``1.19.1-3``,  ``1.19.1-2``,  ``1.19.1-1``,  ``1.19.1-0``,  ``1.18.0-0``,  ``1.17.2-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.10.4``
   :depends r-dplyr: ``>=0.5.0``
   :depends r-foreach: ``>=1.4.3``
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

      mamba install bioconductor-titancna

   and update with::

      mamba update bioconductor-titancna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-titancna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-titancna:<tag>

   (see `bioconductor-titancna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-titancna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-titancna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-titancna
   :alt:   (downloads)
.. |docker_bioconductor-titancna| image:: https://quay.io/repository/biocontainers/bioconductor-titancna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-titancna
.. _`bioconductor-titancna/tags`: https://quay.io/repository/biocontainers/bioconductor-titancna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-titancna";
        var versions = ["1.44.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-titancna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-titancna/README.html