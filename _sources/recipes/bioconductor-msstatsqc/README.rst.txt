:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsqc'
.. highlight: bash

bioconductor-msstatsqc
======================

.. conda:recipe:: bioconductor-msstatsqc
   :replaces_section_title:
   :noindex:

   Longitudinal system suitability monitoring and quality control for proteomic experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MSstatsQC.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-msstatsqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsqc/meta.yaml>`_

   MSstatsQC is an R package which provides longitudinal system suitability monitoring and quality control tools for proteomic experiments.


.. conda:package:: bioconductor-msstatsqc

   |downloads_bioconductor-msstatsqc| |docker_bioconductor-msstatsqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends bioconductor-qcmetrics: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggextra: 
   :depends r-ggplot2: 
   :depends r-plotly: 
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

      mamba install bioconductor-msstatsqc

   and update with::

      mamba update bioconductor-msstatsqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msstatsqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsqc:<tag>

   (see `bioconductor-msstatsqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsqc
   :alt:   (downloads)
.. |docker_bioconductor-msstatsqc| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsqc
.. _`bioconductor-msstatsqc/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsqc";
        var versions = ["2.20.0","2.18.0","2.16.0","2.12.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsqc/README.html