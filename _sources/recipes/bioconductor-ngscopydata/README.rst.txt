:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ngscopydata'
.. highlight: bash

bioconductor-ngscopydata
========================

.. conda:recipe:: bioconductor-ngscopydata
   :replaces_section_title:
   :noindex:

   Subset of BAM files of human tumor and pooled normal sequencing data \(Zhao et al. 2014\) for the NGScopy package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/NGScopyData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-ngscopydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngscopydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngscopydata/meta.yaml>`_

   Subset of BAM files of human lung tumor and pooled normal samples by targeted panel sequencing. \[Zhao et al 2014. Targeted Sequencing in Non\-Small Cell Lung Cancer \(NSCLC\) Using the University of North Carolina \(UNC\) Sequencing Assay Captures Most Previously Described Genetic Aberrations in NSCLC. In preparation.\] Each sample is a 10 percent random subsample drawn from the original sequencing data. The pooled normal sample has been rescaled accroding to the total number of normal samples in the \"pool\". Here provided is the subsampled data on chr6 \(hg19\).


.. conda:package:: bioconductor-ngscopydata

   |downloads_bioconductor-ngscopydata| |docker_bioconductor-ngscopydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-ngscopydata

   and update with::

      mamba update bioconductor-ngscopydata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ngscopydata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ngscopydata:<tag>

   (see `bioconductor-ngscopydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ngscopydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ngscopydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ngscopydata
   :alt:   (downloads)
.. |docker_bioconductor-ngscopydata| image:: https://quay.io/repository/biocontainers/bioconductor-ngscopydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ngscopydata
.. _`bioconductor-ngscopydata/tags`: https://quay.io/repository/biocontainers/bioconductor-ngscopydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ngscopydata";
        var versions = ["1.26.0","1.22.0","1.20.0","1.17.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ngscopydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ngscopydata/README.html