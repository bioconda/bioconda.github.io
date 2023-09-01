:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytoml'
.. highlight: bash

bioconductor-cytoml
===================

.. conda:recipe:: bioconductor-cytoml
   :replaces_section_title:
   :noindex:

   A GatingML Interface for Cross Platform Cytometry Data Sharing

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CytoML.html
   :license: AGPL-3.0-only
   :recipe: /`bioconductor-cytoml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoml/meta.yaml>`_

   Uses platform\-specific implemenations of the GatingML2.0 standard to exchange gated cytometry data with other software platforms.


.. conda:package:: bioconductor-cytoml

   |downloads_bioconductor-cytoml| |docker_bioconductor-cytoml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-cytolib: ``>=2.12.0,<2.13.0``
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends bioconductor-flowworkspace: ``>=4.12.0,<4.13.0``
   :depends bioconductor-ggcyto: ``>=1.28.0,<1.29.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-opencyto: ``>=2.12.0,<2.13.0``
   :depends bioconductor-rbgl: ``>=1.76.0,<1.77.0``
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rhdf5lib: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rprotobuflib: ``>=2.12.0,<2.13.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libxml2: ``>=2.11.4,<2.12.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: ``>=1.62.0-1``
   :depends r-cpp11: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-tibble: 
   :depends r-xml: 
   :depends r-yaml: 
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

      mamba install bioconductor-cytoml

   and update with::

      mamba update bioconductor-cytoml

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytoml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytoml:<tag>

   (see `bioconductor-cytoml/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytoml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytoml.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytoml
   :alt:   (downloads)
.. |docker_bioconductor-cytoml| image:: https://quay.io/repository/biocontainers/bioconductor-cytoml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytoml
.. _`bioconductor-cytoml/tags`: https://quay.io/repository/biocontainers/bioconductor-cytoml?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytoml";
        var versions = ["2.12.0","2.10.0","2.6.0","2.6.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytoml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytoml/README.html