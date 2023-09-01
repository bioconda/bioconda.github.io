:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sgtr'
.. highlight: bash

r-sgtr
======

.. conda:recipe:: r-sgtr
   :replaces_section_title:
   :noindex:

   Visualize population genomics analyses results in R.

   :homepage: https://github.com/SexGenomicsToolkit/sgtr
   :license: GPL3
   :recipe: /`r-sgtr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sgtr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sgtr/meta.yaml>`_

   


.. conda:package:: r-sgtr

   |downloads_r-sgtr| |docker_r-sgtr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.4-7</code>,  <code>1.1.4-6</code>,  <code>1.1.4-5</code>,  <code>1.1.4-4</code>,  <code>1.1.4-3</code>,  <code>1.1.4-2</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-1</code>,  </span></summary>
      

      ``1.1.4-7``,  ``1.1.4-6``,  ``1.1.4-5``,  ``1.1.4-4``,  ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-cowplot: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-readr: 
   :depends r-reshape2: 
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

      mamba install r-sgtr

   and update with::

      mamba update r-sgtr

  To create a new environment, run::

      mamba create --name myenvname r-sgtr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-sgtr:<tag>

   (see `r-sgtr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sgtr| image:: https://img.shields.io/conda/dn/bioconda/r-sgtr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sgtr
   :alt:   (downloads)
.. |docker_r-sgtr| image:: https://quay.io/repository/biocontainers/r-sgtr/status
   :target: https://quay.io/repository/biocontainers/r-sgtr
.. _`r-sgtr/tags`: https://quay.io/repository/biocontainers/r-sgtr?tab=tags


.. raw:: html

    <script>
        var package = "r-sgtr";
        var versions = ["1.1.4","1.1.4","1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sgtr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sgtr/README.html