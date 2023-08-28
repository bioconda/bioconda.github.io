:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancersubtypes'
.. highlight: bash

bioconductor-cancersubtypes
===========================

.. conda:recipe:: bioconductor-cancersubtypes
   :replaces_section_title:
   :noindex:

   Cancer subtypes identification\, validation and visualization based on multiple genomic data sets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CancerSubtypes.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cancersubtypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancersubtypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancersubtypes/meta.yaml>`_
   :links: biotools: :biotools:`cancersubtypes`, doi: :doi:`10.1038/nmeth.3252`

   CancerSubtypes integrates the current common computational biology methods for cancer subtypes identification and provides a standardized framework for cancer subtype analysis based multi\-omics data\, such as gene expression\, miRNA expression\, DNA methylation and others.


.. conda:package:: bioconductor-cancersubtypes

   |downloads_bioconductor-cancersubtypes| |docker_bioconductor-cancersubtypes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-consensusclusterplus: ``>=1.64.0,<1.65.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-nmf: 
   :depends r-sigclust: 
   :depends r-survival: 
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

      mamba install bioconductor-cancersubtypes

   and update with::

      mamba update bioconductor-cancersubtypes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cancersubtypes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancersubtypes:<tag>

   (see `bioconductor-cancersubtypes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancersubtypes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancersubtypes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancersubtypes
   :alt:   (downloads)
.. |docker_bioconductor-cancersubtypes| image:: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes
.. _`bioconductor-cancersubtypes/tags`: https://quay.io/repository/biocontainers/bioconductor-cancersubtypes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cancersubtypes";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancersubtypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancersubtypes/README.html