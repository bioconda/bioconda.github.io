:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multiassayexperiment'
.. highlight: bash

bioconductor-multiassayexperiment
=================================

.. conda:recipe:: bioconductor-multiassayexperiment
   :replaces_section_title:
   :noindex:

   Software for the integration of multi\-omics experiments in Bioconductor

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MultiAssayExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-multiassayexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiassayexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiassayexperiment/meta.yaml>`_
   :links: biotools: :biotools:`multiassayexperiment`, doi: :doi:`10.1101/144774`

   Harmonize data management of multiple experimental assays performed on an overlapping set of specimens.  It provides a familiar Bioconductor user experience by extending concepts from SummarizedExperiment\, supporting an open\-ended mix of standard data classes for individual assays\, and allowing subsetting by genomic ranges or rownames. Facilities are provided for reshaping data into wide and long formats for adaptability to graphing and downstream analysis.


.. conda:package:: bioconductor-multiassayexperiment

   |downloads_bioconductor-multiassayexperiment| |docker_bioconductor-multiassayexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.4-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocbaseutils: ``>=1.8.0,<1.9.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-tidyr: 
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

      mamba install bioconductor-multiassayexperiment

   and update with::

      mamba update bioconductor-multiassayexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multiassayexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multiassayexperiment:<tag>

   (see `bioconductor-multiassayexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multiassayexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiassayexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multiassayexperiment
   :alt:   (downloads)
.. |docker_bioconductor-multiassayexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-multiassayexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiassayexperiment
.. _`bioconductor-multiassayexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-multiassayexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multiassayexperiment";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiassayexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiassayexperiment/README.html