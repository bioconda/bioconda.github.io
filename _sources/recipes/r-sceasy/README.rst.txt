:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sceasy'
.. highlight: bash

r-sceasy
========

.. conda:recipe:: r-sceasy
   :replaces_section_title:
   :noindex:

   A package providing functions to convert between different single\-cell data formats.

   :homepage: https://github.com/cellgeni/sceasy
   :license: GPL / GPL3
   :recipe: /`r-sceasy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sceasy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sceasy/meta.yaml>`_

   


.. conda:package:: r-sceasy

   |downloads_r-sceasy| |docker_r-sceasy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.7-2</code>,  <code>0.0.7-1</code>,  <code>0.0.7-0</code>,  <code>0.0.6-2</code>,  <code>0.0.6-1</code>,  <code>0.0.6-0</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  </span></summary>
      

      ``0.0.7-2``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-2``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: 
   :depends bioconductor-loomexperiment: ``>=1.1.5``
   :depends bioconductor-singlecellexperiment: ``>=1.4.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-monocle3: ``>=1.0.0``
   :depends r-reticulate: 
   :depends r-seurat: ``>=3.0.1``
   :depends scipy: 
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

      mamba install r-sceasy

   and update with::

      mamba update r-sceasy

  To create a new environment, run::

      mamba create --name myenvname r-sceasy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-sceasy:<tag>

   (see `r-sceasy/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sceasy| image:: https://img.shields.io/conda/dn/bioconda/r-sceasy.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sceasy
   :alt:   (downloads)
.. |docker_r-sceasy| image:: https://quay.io/repository/biocontainers/r-sceasy/status
   :target: https://quay.io/repository/biocontainers/r-sceasy
.. _`r-sceasy/tags`: https://quay.io/repository/biocontainers/r-sceasy?tab=tags


.. raw:: html

    <script>
        var package = "r-sceasy";
        var versions = ["0.0.7","0.0.7","0.0.7","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sceasy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sceasy/README.html