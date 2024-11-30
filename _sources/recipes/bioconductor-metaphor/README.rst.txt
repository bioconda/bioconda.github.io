:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaphor'
.. highlight: bash

bioconductor-metaphor
=====================

.. conda:recipe:: bioconductor-metaphor
   :replaces_section_title:
   :noindex:

   Metabolic Pathway Analysis of RNA

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MetaPhOR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metaphor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaphor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaphor/meta.yaml>`_

   MetaPhOR was developed to enable users to assess metabolic dysregulation using transcriptomic\-level data \(RNA\-sequencing and Microarray data\) and produce publication\-quality figures. A list of differentially expressed genes \(DEGs\)\, which includes fold change and p value\, from DESeq2 or limma\, can be used as input\, with sample size for MetaPhOR\, and will produce a data frame of scores for each KEGG pathway. These scores represent the magnitude and direction of transcriptional change within the pathway\, along with estimated p\-values.MetaPhOR then uses these scores to visualize metabolic profiles within and between samples through a variety of mechanisms\, including\: bubble plots\, heatmaps\, and pathway models.


.. conda:package:: bioconductor-metaphor

   |downloads_bioconductor-metaphor| |docker_bioconductor-metaphor|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-rcy3: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-pheatmap: 
   :depends r-recordlinkage: 
   :depends r-stringr: 
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

      mamba install bioconductor-metaphor

   and update with::

      mamba update bioconductor-metaphor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metaphor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaphor:<tag>

   (see `bioconductor-metaphor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaphor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaphor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaphor
   :alt:   (downloads)
.. |docker_bioconductor-metaphor| image:: https://quay.io/repository/biocontainers/bioconductor-metaphor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaphor
.. _`bioconductor-metaphor/tags`: https://quay.io/repository/biocontainers/bioconductor-metaphor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metaphor";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaphor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaphor/README.html