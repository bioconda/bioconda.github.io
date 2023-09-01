:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-heatplus'
.. highlight: bash

bioconductor-heatplus
=====================

.. conda:recipe:: bioconductor-heatplus
   :replaces_section_title:
   :noindex:

   Heatmaps with row and\/or column covariates and colored clusters

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Heatplus.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-heatplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heatplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heatplus/meta.yaml>`_
   :links: biotools: :biotools:`heatplus`, doi: :doi:`10.1038/nmeth.3252`

   Display a rectangular heatmap \(intensity plot\) of a data matrix. By default\, both samples \(columns\) and features \(row\) of the matrix are sorted according to a hierarchical clustering\, and the corresponding dendrogram is plotted. Optionally\, panels with additional information about samples and features can be added to the plot.


.. conda:package:: bioconductor-heatplus

   |downloads_bioconductor-heatplus| |docker_bioconductor-heatplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8.0-0</code>,  <code>3.6.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.0-0</code>,  <code>2.36.0-1</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-1</code>,  </span></summary>
      

      ``3.8.0-0``,  ``3.6.0-0``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-heatplus

   and update with::

      mamba update bioconductor-heatplus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-heatplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-heatplus:<tag>

   (see `bioconductor-heatplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-heatplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-heatplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-heatplus
   :alt:   (downloads)
.. |docker_bioconductor-heatplus| image:: https://quay.io/repository/biocontainers/bioconductor-heatplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-heatplus
.. _`bioconductor-heatplus/tags`: https://quay.io/repository/biocontainers/bioconductor-heatplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-heatplus";
        var versions = ["3.8.0","3.6.0","3.2.0","3.0.0","2.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-heatplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-heatplus/README.html