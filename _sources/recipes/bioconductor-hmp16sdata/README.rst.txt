:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmp16sdata'
.. highlight: bash

bioconductor-hmp16sdata
=======================

.. conda:recipe:: bioconductor-hmp16sdata
   :replaces_section_title:
   :noindex:

   16S rRNA Sequencing Data from the Human Microbiome Project

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/HMP16SData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hmp16sdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp16sdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp16sdata/meta.yaml>`_

   HMP16SData is a Bioconductor ExperimentData package of the Human Microbiome Project \(HMP\) 16S rRNA sequencing data for variable regions 1–3 and 3–5. Raw data files are provided in the package as downloaded from the HMP Data Analysis and Coordination Center. Processed data is provided as SummarizedExperiment class objects via ExperimentHub.


.. conda:package:: bioconductor-hmp16sdata

   |downloads_bioconductor-hmp16sdata| |docker_bioconductor-hmp16sdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-stringr: 
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

      mamba install bioconductor-hmp16sdata

   and update with::

      mamba update bioconductor-hmp16sdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hmp16sdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmp16sdata:<tag>

   (see `bioconductor-hmp16sdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmp16sdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmp16sdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hmp16sdata
   :alt:   (downloads)
.. |docker_bioconductor-hmp16sdata| image:: https://quay.io/repository/biocontainers/bioconductor-hmp16sdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmp16sdata
.. _`bioconductor-hmp16sdata/tags`: https://quay.io/repository/biocontainers/bioconductor-hmp16sdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hmp16sdata";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmp16sdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmp16sdata/README.html