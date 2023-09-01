:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phyloprofile'
.. highlight: bash

bioconductor-phyloprofile
=========================

.. conda:recipe:: bioconductor-phyloprofile
   :replaces_section_title:
   :noindex:

   PhyloProfile

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PhyloProfile.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-phyloprofile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloprofile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloprofile/meta.yaml>`_

   PhyloProfile is a tool for exploring complex phylogenetic profiles. Phylogenetic profiles\, presence\/absence patterns of genes over a set of species\, are commonly used to trace the functional and evolutionary history of genes across species and time. With PhyloProfile we can enrich regular phylogenetic profiles with further data like sequence\/structure similarity\, to make phylogenetic profiling more meaningful. Besides the interactive visualisation powered by R\-Shiny\, the package offers a set of further analysis features to gain insights like the gene age estimation or core gene identification.


.. conda:package:: bioconductor-phyloprofile

   |downloads_bioconductor-phyloprofile| |docker_bioconductor-phyloprofile|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.5-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.4.9-0</code>,  <code>1.4.0-0</code>,  <code>1.2.8-1</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  </span></summary>
      

      ``1.14.5-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.9-0``,  ``1.4.0-0``,  ``1.2.8-1``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.28.0,<2.29.0``
   :depends bioconductor-biodist: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-omadb: ``>=2.16.0,<2.17.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colourpicker: 
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-energy: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-pbapply: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinyfiles: 
   :depends r-shinyjs: 
   :depends r-xml2: 
   :depends r-yaml: 
   :depends r-zoo: 
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

      mamba install bioconductor-phyloprofile

   and update with::

      mamba update bioconductor-phyloprofile

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phyloprofile

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phyloprofile:<tag>

   (see `bioconductor-phyloprofile/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phyloprofile| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phyloprofile.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phyloprofile
   :alt:   (downloads)
.. |docker_bioconductor-phyloprofile| image:: https://quay.io/repository/biocontainers/bioconductor-phyloprofile/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phyloprofile
.. _`bioconductor-phyloprofile/tags`: https://quay.io/repository/biocontainers/bioconductor-phyloprofile?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phyloprofile";
        var versions = ["1.14.5","1.12.0","1.8.0","1.6.1","1.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phyloprofile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phyloprofile/README.html