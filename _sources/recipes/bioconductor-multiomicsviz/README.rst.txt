:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multiomicsviz'
.. highlight: bash

bioconductor-multiomicsviz
==========================

.. conda:recipe:: bioconductor-multiomicsviz
   :replaces_section_title:
   :noindex:

   Plot the effect of one omics data on other omics data along the chromosome

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/multiOmicsViz.html
   :license: LGPL
   :recipe: /`bioconductor-multiomicsviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiomicsviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiomicsviz/meta.yaml>`_

   Calculate the spearman correlation between the source omics data and other target omics data\, identify the significant correlations and plot the significant correlations on the heat map in which the x\-axis and y\-axis are ordered by the chromosomal location.


.. conda:package:: bioconductor-multiomicsviz

   |downloads_bioconductor-multiomicsviz| |docker_bioconductor-multiomicsviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
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

      mamba install bioconductor-multiomicsviz

   and update with::

      mamba update bioconductor-multiomicsviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multiomicsviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multiomicsviz:<tag>

   (see `bioconductor-multiomicsviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multiomicsviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiomicsviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multiomicsviz
   :alt:   (downloads)
.. |docker_bioconductor-multiomicsviz| image:: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz
.. _`bioconductor-multiomicsviz/tags`: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multiomicsviz";
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiomicsviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiomicsviz/README.html