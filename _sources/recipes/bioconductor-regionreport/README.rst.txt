:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regionreport'
.. highlight: bash

bioconductor-regionreport
=========================

.. conda:recipe:: bioconductor-regionreport
   :replaces_section_title:
   :noindex:

   Generate HTML or PDF reports for a set of genomic regions or DESeq2\/edgeR results

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/regionReport.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-regionreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionreport/meta.yaml>`_

   Generate HTML or PDF reports to explore a set of regions such as the results from annotation\-agnostic expression analysis of RNA\-seq data at base\-pair resolution performed by derfinder. You can also create reports for DESeq2 or edgeR results.


.. conda:package:: bioconductor-regionreport

   |downloads_bioconductor-regionreport| |docker_bioconductor-regionreport|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.27.1-0</code>,  <code>1.26.0-0</code>,  <code>1.24.2-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.2-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.27.1-0``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.16.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.28.0,<2.29.0``
   :depends bioconductor-deformats: ``>=1.28.0,<1.29.0``
   :depends bioconductor-derfinder: ``>=1.34.0,<1.35.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-knitr: ``>=1.6``
   :depends r-knitrbootstrap: ``>=0.9.0``
   :depends r-refmanager: 
   :depends r-rmarkdown: ``>=0.9.5``
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

      mamba install bioconductor-regionreport

   and update with::

      mamba update bioconductor-regionreport

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regionreport

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regionreport:<tag>

   (see `bioconductor-regionreport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regionreport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regionreport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regionreport
   :alt:   (downloads)
.. |docker_bioconductor-regionreport| image:: https://quay.io/repository/biocontainers/bioconductor-regionreport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regionreport
.. _`bioconductor-regionreport/tags`: https://quay.io/repository/biocontainers/bioconductor-regionreport?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regionreport";
        var versions = ["1.34.0","1.32.0","1.27.1","1.26.0","1.24.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regionreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regionreport/README.html