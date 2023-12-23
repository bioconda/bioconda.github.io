:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-starbiotrek'
.. highlight: bash

bioconductor-starbiotrek
========================

.. conda:recipe:: bioconductor-starbiotrek
   :replaces_section_title:
   :noindex:

   StarBioTrek

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/StarBioTrek.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-starbiotrek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starbiotrek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starbiotrek/meta.yaml>`_
   :links: biotools: :biotools:`starbiotrek`, doi: :doi:`10.1186/s12918-015-0211-x`

   This tool StarBioTrek presents some methodologies to measure pathway activity and cross\-talk among pathways integrating also the information of network data.


.. conda:package:: bioconductor-starbiotrek

   |downloads_bioconductor-starbiotrek| |docker_bioconductor-starbiotrek|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-graphite: ``>=1.48.0,<1.49.0``
   :depends bioconductor-spidermir: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-mlmetrics: 
   :depends r-reshape2: 
   :depends r-rocr: 
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

      mamba install bioconductor-starbiotrek

   and update with::

      mamba update bioconductor-starbiotrek

  To create a new environment, run::

      mamba create --name myenvname bioconductor-starbiotrek

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-starbiotrek:<tag>

   (see `bioconductor-starbiotrek/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-starbiotrek| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-starbiotrek.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-starbiotrek
   :alt:   (downloads)
.. |docker_bioconductor-starbiotrek| image:: https://quay.io/repository/biocontainers/bioconductor-starbiotrek/status
   :target: https://quay.io/repository/biocontainers/bioconductor-starbiotrek
.. _`bioconductor-starbiotrek/tags`: https://quay.io/repository/biocontainers/bioconductor-starbiotrek?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-starbiotrek";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-starbiotrek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-starbiotrek/README.html