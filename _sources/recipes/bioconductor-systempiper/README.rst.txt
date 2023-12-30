:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-systempiper'
.. highlight: bash

bioconductor-systempiper
========================

.. conda:recipe:: bioconductor-systempiper
   :replaces_section_title:
   :noindex:

   systemPipeR\: workflow management and report generation environment

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/systemPipeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-systempiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiper/meta.yaml>`_
   :links: biotools: :biotools:`systempiper`

   systemPipeR is a multipurpose data analysis workflow environment that unifies R with command\-line tools. It enables scientists to analyze many types of large\- or small\-scale data on local or distributed computer systems with a high level of reproducibility\, scalability and portability. At its core is a command\-line interface \(CLI\) that adopts the Common Workflow Language \(CWL\). This design allows users to choose for each analysis step the optimal R or command\-line software. It supports both end\-to\-end and partial execution of workflows with built\-in restart functionalities. Efficient management of complex analysis tasks is accomplished by a flexible workflow control container class. Handling of large numbers of input samples and experimental designs is facilitated by consistent sample annotation mechanisms. As a multi\-purpose workflow toolkit\, systemPipeR enables users to run existing workflows\, customize them or design entirely new ones while taking advantage of widely adopted data structures within the Bioconductor ecosystem. Another important core functionality is the generation of reproducible scientific analysis and technical reports. For result interpretation\, systemPipeR offers a wide range of plotting functionality\, while an associated Shiny App offers many useful functionalities for interactive result exploration. The vignettes linked from this page include \(1\) a general introduction\, \(2\) a description of technical details\, and \(3\) a collection of workflow templates.


.. conda:package:: bioconductor-systempiper

   |downloads_bioconductor-systempiper| |docker_bioconductor-systempiper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.3-0</code>,  <code>2.4.0-0</code>,  <code>2.0.0-0</code>,  <code>1.26.2-0</code>,  <code>1.24.3-0</code>,  <code>1.24.2-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.3-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.26.2-0``,  ``1.24.3-0``,  ``1.24.2-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.9.0-0``,  ``1.4.8-0``,  ``1.4.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-magrittr: 
   :depends r-stringr: 
   :depends r-yaml: 
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

      mamba install bioconductor-systempiper

   and update with::

      mamba update bioconductor-systempiper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-systempiper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-systempiper:<tag>

   (see `bioconductor-systempiper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-systempiper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-systempiper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-systempiper
   :alt:   (downloads)
.. |docker_bioconductor-systempiper| image:: https://quay.io/repository/biocontainers/bioconductor-systempiper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-systempiper
.. _`bioconductor-systempiper/tags`: https://quay.io/repository/biocontainers/bioconductor-systempiper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-systempiper";
        var versions = ["2.8.0","2.6.3","2.4.0","2.0.0","1.26.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-systempiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-systempiper/README.html