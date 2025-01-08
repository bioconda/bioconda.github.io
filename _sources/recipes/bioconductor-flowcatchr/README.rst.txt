:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcatchr'
.. highlight: bash

bioconductor-flowcatchr
=======================

.. conda:recipe:: bioconductor-flowcatchr
   :replaces_section_title:
   :noindex:

   Tools to analyze in vivo microscopy imaging data focused on tracking flowing blood cells

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowcatchR.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-flowcatchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcatchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcatchr/meta.yaml>`_

   flowcatchR is a set of tools to analyze in vivo microscopy imaging data\, focused on tracking flowing blood cells. It guides the steps from segmentation to calculation of features\, filtering out particles not of interest\, providing also a set of utilities to help checking the quality of the performed operations \(e.g. how good the segmentation was\). It allows investigating the issue of tracking flowing cells such as in blood vessels\, to categorize the particles in flowing\, rolling and adherent. This classification is applied in the study of phenomena such as hemostasis and study of thrombosis development. Moreover\, flowcatchR presents an integrated workflow solution\, based on the integration with a Shiny App and Jupyter notebooks\, which is delivered alongside the package\, and can enable fully reproducible bioimage analysis in the R environment.


.. conda:package:: bioconductor-flowcatchr

   |downloads_bioconductor-flowcatchr| |docker_bioconductor-flowcatchr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends imagemagick: 
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-colorramps: 
   :depends r-plotly: 
   :depends r-shiny: 
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

      mamba install bioconductor-flowcatchr

   and update with::

      mamba update bioconductor-flowcatchr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowcatchr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcatchr:<tag>

   (see `bioconductor-flowcatchr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcatchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcatchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcatchr
   :alt:   (downloads)
.. |docker_bioconductor-flowcatchr| image:: https://quay.io/repository/biocontainers/bioconductor-flowcatchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcatchr
.. _`bioconductor-flowcatchr/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcatchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowcatchr";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcatchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcatchr/README.html