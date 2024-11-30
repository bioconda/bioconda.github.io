:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmelsgi'
.. highlight: bash

bioconductor-dmelsgi
====================

.. conda:recipe:: bioconductor-dmelsgi
   :replaces_section_title:
   :noindex:

   Experimental data and documented source code for the paper \"A Map of Directional Genetic Interactions in a Metazoan Cell\"

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/DmelSGI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dmelsgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmelsgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmelsgi/meta.yaml>`_

   The package contains the experimental data and documented source code of the manuscript \"Fischer et al.\, A Map of Directional Genetic Interactions in a Metazoan Cell\, eLife\, 2015\, in Press.\". The vignette code generates all figures in the paper.


.. conda:package:: bioconductor-dmelsgi

   |downloads_bioconductor-dmelsgi| |docker_bioconductor-dmelsgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.29.1-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.29.1-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends curl: 
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-tsp: 
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

      mamba install bioconductor-dmelsgi

   and update with::

      mamba update bioconductor-dmelsgi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dmelsgi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmelsgi:<tag>

   (see `bioconductor-dmelsgi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmelsgi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmelsgi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmelsgi
   :alt:   (downloads)
.. |docker_bioconductor-dmelsgi| image:: https://quay.io/repository/biocontainers/bioconductor-dmelsgi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmelsgi
.. _`bioconductor-dmelsgi/tags`: https://quay.io/repository/biocontainers/bioconductor-dmelsgi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmelsgi";
        var versions = ["1.34.0","1.32.0","1.29.1","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmelsgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmelsgi/README.html