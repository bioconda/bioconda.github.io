:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytopipeline'
.. highlight: bash

bioconductor-cytopipeline
=========================

.. conda:recipe:: bioconductor-cytopipeline
   :replaces_section_title:
   :noindex:

   Automation and visualization of flow cytometry data analysis pipelines

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CytoPipeline.html
   :license: GPL-3
   :recipe: /`bioconductor-cytopipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytopipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytopipeline/meta.yaml>`_

   This package provides support for automation and visualization of flow cytometry data analysis pipelines. In the current state\, the package focuses on the preprocessing and quality control part. The framework is based on two main S4 classes\, i.e. CytoPipeline and CytoProcessingStep. The pipeline steps are linked to corresponding R functions \- that are either provided in the CytoPipeline package itself\, or exported from a third party package\, or coded by the user her\/himself. The processing steps need to be specified centrally and explicitly using either a json input file or through step by step creation of a CytoPipeline object with dedicated methods. After having run the pipeline\, obtained results at all steps can be retrieved and visualized thanks to file caching \(the running facility uses a BiocFileCache implementation\). The package provides also specific visualization tools like pipeline workflow summary display\, and 1D\/2D comparison plots of obtained flowFrames at various steps of the pipeline.


.. conda:package:: bioconductor-cytopipeline

   |downloads_bioconductor-cytopipeline| |docker_bioconductor-cytopipeline|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-flowai: ``>=1.32.0,<1.33.0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends bioconductor-ggcyto: ``>=1.30.0,<1.31.0``
   :depends bioconductor-peacoqc: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-diagram: 
   :depends r-ggplot2: ``>=3.4.1``
   :depends r-jsonlite: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-withr: 
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

      mamba install bioconductor-cytopipeline

   and update with::

      mamba update bioconductor-cytopipeline

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytopipeline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytopipeline:<tag>

   (see `bioconductor-cytopipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytopipeline| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytopipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytopipeline
   :alt:   (downloads)
.. |docker_bioconductor-cytopipeline| image:: https://quay.io/repository/biocontainers/bioconductor-cytopipeline/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytopipeline
.. _`bioconductor-cytopipeline/tags`: https://quay.io/repository/biocontainers/bioconductor-cytopipeline?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytopipeline";
        var versions = ["1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytopipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytopipeline/README.html