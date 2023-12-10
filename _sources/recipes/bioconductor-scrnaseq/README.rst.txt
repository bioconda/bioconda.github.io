:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scrnaseq'
.. highlight: bash

bioconductor-scrnaseq
=====================

.. conda:recipe:: bioconductor-scrnaseq
   :replaces_section_title:
   :noindex:

   Collection of Public Single\-Cell RNA\-Seq Datasets

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/scRNAseq.html
   :license: CC0
   :recipe: /`bioconductor-scrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scrnaseq/meta.yaml>`_

   Gene\-level counts for a collection of public scRNA\-seq datasets\, provided as SingleCellExperiment objects with cell\- and gene\-level metadata.


.. conda:package:: bioconductor-scrnaseq

   |downloads_bioconductor-scrnaseq| |docker_bioconductor-scrnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.1-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.3.17-0</code>,  </span></summary>
      

      ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.17-0``,  ``2.2.0-0``,  ``1.99.8-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-ensembldb: ``>=2.26.0,<2.27.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
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

      mamba install bioconductor-scrnaseq

   and update with::

      mamba update bioconductor-scrnaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scrnaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scrnaseq:<tag>

   (see `bioconductor-scrnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scrnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scrnaseq
   :alt:   (downloads)
.. |docker_bioconductor-scrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-scrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scrnaseq
.. _`bioconductor-scrnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-scrnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scrnaseq";
        var versions = ["2.16.0","2.14.0","2.12.0","2.8.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scrnaseq/README.html