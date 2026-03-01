:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytoml'
.. highlight: bash

bioconductor-cytoml
===================

.. conda:recipe:: bioconductor-cytoml
   :replaces_section_title:
   :noindex:

   A GatingML Interface for Cross Platform Cytometry Data Sharing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CytoML.html
   :license: AGPL-3.0-only
   :recipe: /`bioconductor-cytoml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytoml/meta.yaml>`_

   Uses platform\-specific implemenations of the GatingML2.0 standard to exchange gated cytometry data with other software platforms.


.. conda:package:: bioconductor-cytoml

   |downloads_bioconductor-cytoml| |docker_bioconductor-cytoml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends bioconductor-cytolib: ``>=2.22.0,<2.23.0``
   :depends bioconductor-cytolib: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends bioconductor-flowcore: ``>=2.22.1,<2.23.0a0``
   :depends bioconductor-flowworkspace: ``>=4.22.0,<4.23.0``
   :depends bioconductor-flowworkspace: ``>=4.22.1,<4.23.0a0``
   :depends bioconductor-ggcyto: ``>=1.38.0,<1.39.0``
   :depends bioconductor-ggcyto: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends bioconductor-opencyto: ``>=2.22.0,<2.23.0``
   :depends bioconductor-opencyto: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends bioconductor-rbgl: ``>=1.86.0,<1.87.0a0``
   :depends bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
   :depends bioconductor-rgraphviz: ``>=2.54.0,<2.55.0a0``
   :depends bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rhdf5lib: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-rprotobuflib: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rprotobuflib: ``>=2.22.0,<2.23.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=14``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libstdcxx: ``>=14``
   :depends libxml2: ``>=2.13.9,<2.14.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-bh: ``>=1.62.0-1``
   :depends r-cpp11: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-tibble: 
   :depends r-xml: 
   :depends r-yaml: 
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
        var versions = ["2.22.0","2.14.0","2.14.0","2.12.0","2.10.0"];
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