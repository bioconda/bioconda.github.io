:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hireewas'
.. highlight: bash

bioconductor-hireewas
=====================

.. conda:recipe:: bioconductor-hireewas
   :replaces_section_title:
   :noindex:

   Detection of cell\-type\-specific risk\-CpG sites in epigenome\-wide association studies

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HIREewas.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hireewas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireewas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireewas/meta.yaml>`_

   In epigenome\-wide association studies\, the measured signals for each sample are a mixture of methylation profiles from different cell types. The current approaches to the association detection only claim whether a cytosine\-phosphate\-guanine \(CpG\) site is associated with the phenotype or not\, but they cannot determine the cell type in which the risk\-CpG site is affected by the phenotype. We propose a solid statistical method\, HIgh REsolution \(HIRE\)\, which not only substantially improves the power of association detection at the aggregated level as compared to the existing methods but also enables the detection of risk\-CpG sites for individual cell types. The \"HIREewas\" R package is to implement HIRE model in R.


.. conda:package:: bioconductor-hireewas

   |downloads_bioconductor-hireewas| |docker_bioconductor-hireewas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-gplots: 
   :depends r-quadprog: 
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

      mamba install bioconductor-hireewas

   and update with::

      mamba update bioconductor-hireewas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hireewas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hireewas:<tag>

   (see `bioconductor-hireewas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hireewas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hireewas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hireewas
   :alt:   (downloads)
.. |docker_bioconductor-hireewas| image:: https://quay.io/repository/biocontainers/bioconductor-hireewas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hireewas
.. _`bioconductor-hireewas/tags`: https://quay.io/repository/biocontainers/bioconductor-hireewas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hireewas";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hireewas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hireewas/README.html