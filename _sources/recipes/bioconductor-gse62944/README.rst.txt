:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gse62944'
.. highlight: bash

bioconductor-gse62944
=====================

.. conda:recipe:: bioconductor-gse62944
   :replaces_section_title:
   :noindex:

   GEO accession data GSE62944 as a SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/GSE62944.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gse62944 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse62944>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse62944/meta.yaml>`_

   TCGA processed RNA\-Seq data for 9264 tumor and 741 normal samples across 24 cancer types and made them available as GEO accession \[GSE62944\]\(http\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE62944\). GSE62944 data have been parsed into a SummarizedExperiment object available in ExperimentHub.


.. conda:package:: bioconductor-gse62944

   |downloads_bioconductor-gse62944| |docker_bioconductor-gse62944|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.1-0``,  ``1.26.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-gse62944

   and update with::

      mamba update bioconductor-gse62944

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gse62944

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gse62944:<tag>

   (see `bioconductor-gse62944/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gse62944| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gse62944.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gse62944
   :alt:   (downloads)
.. |docker_bioconductor-gse62944| image:: https://quay.io/repository/biocontainers/bioconductor-gse62944/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gse62944
.. _`bioconductor-gse62944/tags`: https://quay.io/repository/biocontainers/bioconductor-gse62944?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gse62944";
        var versions = ["1.30.0","1.28.1","1.26.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gse62944/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gse62944/README.html