:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metams'
.. highlight: bash

bioconductor-metams
===================

.. conda:recipe:: bioconductor-metams
   :replaces_section_title:
   :noindex:

   MS\-based metabolomics annotation pipeline

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/metaMS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-metams <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metams>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metams/meta.yaml>`_
   :links: biotools: :biotools:`metams`

   MS\-based metabolomics data processing and compound annotation pipeline.


.. conda:package:: bioconductor-metams

   |downloads_bioconductor-metams| |docker_bioconductor-metams|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-camera: ``>=1.62.0,<1.63.0``
   :depends bioconductor-xcms: ``>=4.4.0,<4.5.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
   :depends r-robustbase: 
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

      mamba install bioconductor-metams

   and update with::

      mamba update bioconductor-metams

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metams

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metams:<tag>

   (see `bioconductor-metams/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metams| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metams.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metams
   :alt:   (downloads)
.. |docker_bioconductor-metams| image:: https://quay.io/repository/biocontainers/bioconductor-metams/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metams
.. _`bioconductor-metams/tags`: https://quay.io/repository/biocontainers/bioconductor-metams?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metams";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metams/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metams/README.html