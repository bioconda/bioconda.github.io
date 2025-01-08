:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ivygapse'
.. highlight: bash

bioconductor-ivygapse
=====================

.. conda:recipe:: bioconductor-ivygapse
   :replaces_section_title:
   :noindex:

   A SummarizedExperiment for Ivy\-GAP data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ivygapSE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ivygapse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ivygapse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ivygapse/meta.yaml>`_

   Define a SummarizedExperiment and exploratory app for Ivy\-GAP glioblastoma image\, expression\, and clinical data.


.. conda:package:: bioconductor-ivygapse

   |downloads_bioconductor-ivygapse| |docker_bioconductor-ivygapse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-hwriter: 
   :depends r-plotly: 
   :depends r-shiny: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-upsetr: 
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

      mamba install bioconductor-ivygapse

   and update with::

      mamba update bioconductor-ivygapse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ivygapse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ivygapse:<tag>

   (see `bioconductor-ivygapse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ivygapse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ivygapse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ivygapse
   :alt:   (downloads)
.. |docker_bioconductor-ivygapse| image:: https://quay.io/repository/biocontainers/bioconductor-ivygapse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ivygapse
.. _`bioconductor-ivygapse/tags`: https://quay.io/repository/biocontainers/bioconductor-ivygapse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ivygapse";
        var versions = ["1.28.0","1.24.0","1.22.1","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ivygapse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ivygapse/README.html