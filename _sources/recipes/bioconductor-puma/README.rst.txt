:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-puma'
.. highlight: bash

bioconductor-puma
=================

.. conda:recipe:: bioconductor-puma
   :replaces_section_title:
   :noindex:

   Propagating Uncertainty in Microarray Analysis\(including Affymetrix tranditional 3\' arrays and exon arrays and Human Transcriptome Array 2.0\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/puma.html
   :license: LGPL
   :recipe: /`bioconductor-puma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-puma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-puma/meta.yaml>`_
   :links: biotools: :biotools:`puma`

   Most analyses of Affymetrix GeneChip data \(including tranditional 3\' arrays and exon arrays and Human Transcriptome Array 2.0\) are based on point estimates of expression levels and ignore the uncertainty of such estimates. By propagating uncertainty to downstream analyses we can improve results from microarray analyses. For the first time\, the puma package makes a suite of uncertainty propagation methods available to a general audience. In additon to calculte gene expression from Affymetrix 3\' arrays\, puma also provides methods to process exon arrays and produces gene and isoform expression for alternative splicing study. puma also offers improvements in terms of scope and speed of execution over previously available uncertainty propagation methods. Included are summarisation\, differential expression detection\, clustering and PCA methods\, together with useful plotting functions.


.. conda:package:: bioconductor-puma

   |downloads_bioconductor-puma| |docker_bioconductor-puma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.48.0-0</code>,  <code>3.44.0-0</code>,  <code>3.42.0-0</code>,  <code>3.40.0-1</code>,  <code>3.40.0-0</code>,  <code>3.36.0-2</code>,  <code>3.36.0-1</code>,  <code>3.36.0-0</code>,  <code>3.34.0-0</code>,  </span></summary>
      

      ``3.48.0-0``,  ``3.44.0-0``,  ``3.42.0-0``,  ``3.40.0-1``,  ``3.40.0-0``,  ``3.36.0-2``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.0-1``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.26.0-1``,  ``3.24.0-0``,  ``3.22.0-0``,  ``3.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-affyio: ``>=1.76.0,<1.77.0``
   :depends bioconductor-affyio: ``>=1.76.0,<1.77.0a0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-oligo: ``>=1.70.0,<1.71.0``
   :depends bioconductor-oligo: ``>=1.70.0,<1.71.0a0``
   :depends bioconductor-oligoclasses: ``>=1.68.0,<1.69.0``
   :depends bioconductor-oligoclasses: ``>=1.68.0,<1.69.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mclust: 
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

      mamba install bioconductor-puma

   and update with::

      mamba update bioconductor-puma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-puma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-puma:<tag>

   (see `bioconductor-puma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-puma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-puma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-puma
   :alt:   (downloads)
.. |docker_bioconductor-puma| image:: https://quay.io/repository/biocontainers/bioconductor-puma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-puma
.. _`bioconductor-puma/tags`: https://quay.io/repository/biocontainers/bioconductor-puma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-puma";
        var versions = ["3.48.0","3.44.0","3.42.0","3.40.0","3.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-puma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-puma/README.html