:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsqcgui'
.. highlight: bash

bioconductor-msstatsqcgui
=========================

.. conda:recipe:: bioconductor-msstatsqcgui
   :replaces_section_title:
   :noindex:

   A graphical user interface for MSstatsQC package

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSstatsQCgui.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-msstatsqcgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqcgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqcgui/meta.yaml>`_

   MSstatsQCgui is a Shiny app which provides longitudinal system suitability monitoring and quality control tools for proteomic experiments.


.. conda:package:: bioconductor-msstatsqcgui

   |downloads_bioconductor-msstatsqcgui| |docker_bioconductor-msstatsqcgui|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-msstatsqc: ``>=2.24.0,<2.25.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggextra: 
   :depends r-gridextra: 
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

      mamba install bioconductor-msstatsqcgui

   and update with::

      mamba update bioconductor-msstatsqcgui

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msstatsqcgui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsqcgui:<tag>

   (see `bioconductor-msstatsqcgui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsqcgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsqcgui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsqcgui
   :alt:   (downloads)
.. |docker_bioconductor-msstatsqcgui| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsqcgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsqcgui
.. _`bioconductor-msstatsqcgui/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsqcgui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsqcgui";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsqcgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsqcgui/README.html