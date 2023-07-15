:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tissueenrich'
.. highlight: bash

bioconductor-tissueenrich
=========================

.. conda:recipe:: bioconductor-tissueenrich
   :replaces_section_title:
   :noindex:

   Tissue\-specific gene enrichment analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/TissueEnrich.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tissueenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissueenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissueenrich/meta.yaml>`_

   The TissueEnrich package is used to calculate enrichment of tissue\-specific genes in a set of input genes. For example\, the user can input the most highly expressed genes from RNA\-Seq data\, or gene co\-expression modules to determine which tissue\-specific genes are enriched in those datasets. Tissue\-specific genes were defined by processing RNA\-Seq data from the Human Protein Atlas \(HPA\) \(Uhlén et al. 2015\)\, GTEx \(Ardlie et al. 2015\)\, and mouse ENCODE \(Shen et al. 2012\) using the algorithm from the HPA \(Uhlén et al. 2015\).The hypergeometric test is being used to determine if the tissue\-specific genes are enriched among the input genes. Along with tissue\-specific gene enrichment\, the TissueEnrich package can also be used to define tissue\-specific genes from expression datasets provided by the user\, which can then be used to calculate tissue\-specific gene enrichments.


.. conda:package:: bioconductor-tissueenrich

   |downloads_bioconductor-tissueenrich| |docker_bioconductor-tissueenrich|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.7.3``
   :depends r-ensurer: ``>=1.1.0``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-tidyr: ``>=0.8.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tissueenrich

   and update with::

      conda update bioconductor-tissueenrich

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tissueenrich:<tag>

   (see `bioconductor-tissueenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tissueenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tissueenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tissueenrich
   :alt:   (downloads)
.. |docker_bioconductor-tissueenrich| image:: https://quay.io/repository/biocontainers/bioconductor-tissueenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tissueenrich
.. _`bioconductor-tissueenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-tissueenrich?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tissueenrich";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tissueenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tissueenrich/README.html