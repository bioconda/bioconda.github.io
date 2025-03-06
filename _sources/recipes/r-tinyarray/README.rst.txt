:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tinyarray'
.. highlight: bash

r-tinyarray
===========

.. conda:recipe:: r-tinyarray
   :replaces_section_title:
   :noindex:

   Gene Expression Omnibus\(GEO\) and The Cancer Genome Atlas\(TCGA\) are common bioinformatics public databases. We integrate the regular analysis and charts for expression data\, to analyze and display the data concisely and intuitively.

   :homepage: https://github.com/xjsun1221/tinyarray
   :license: MIT / MIT
   :recipe: /`r-tinyarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tinyarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tinyarray/meta.yaml>`_

   


.. conda:package:: r-tinyarray

   |downloads_r-tinyarray| |docker_r-tinyarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.3-0</code>,  <code>2.4.2-0</code>,  <code>2.4.1-0</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  </span></summary>
      

      ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.9-0``,  ``2.2.7-1``,  ``2.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-clusterprofiler: 
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-patchwork: 
   :depends r-pheatmap: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-tibble: 
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

      mamba install r-tinyarray

   and update with::

      mamba update r-tinyarray

  To create a new environment, run::

      mamba create --name myenvname r-tinyarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-tinyarray:<tag>

   (see `r-tinyarray/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tinyarray| image:: https://img.shields.io/conda/dn/bioconda/r-tinyarray.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tinyarray
   :alt:   (downloads)
.. |docker_r-tinyarray| image:: https://quay.io/repository/biocontainers/r-tinyarray/status
   :target: https://quay.io/repository/biocontainers/r-tinyarray
.. _`r-tinyarray/tags`: https://quay.io/repository/biocontainers/r-tinyarray?tab=tags


.. raw:: html

    <script>
        var package = "r-tinyarray";
        var versions = ["2.4.3","2.4.2","2.4.1","2.3.3","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tinyarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tinyarray/README.html