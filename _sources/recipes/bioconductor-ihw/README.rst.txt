:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ihw'
.. highlight: bash

bioconductor-ihw
================

.. conda:recipe:: bioconductor-ihw
   :replaces_section_title:
   :noindex:

   Independent Hypothesis Weighting

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/IHW.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ihw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ihw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ihw/meta.yaml>`_
   :links: biotools: :biotools:`IHW`, doi: :doi:`10.1038/nmeth.3885`

   Independent hypothesis weighting \(IHW\) is a multiple testing procedure that increases power compared to the method of Benjamini and Hochberg by assigning data\-driven weights to each hypothesis. The input to IHW is a two\-column table of p\-values and covariates. The covariate can be any continuous\-valued or categorical variable that is thought to be informative on the statistical properties of each hypothesis test\, while it is independent of the p\-value under the null hypothesis.


.. conda:package:: bioconductor-ihw

   |downloads_bioconductor-ihw| |docker_bioconductor-ihw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.1-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-lpsymphony: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fdrtool: 
   :depends r-slam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ihw

   and update with::

      conda update bioconductor-ihw

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ihw:<tag>

   (see `bioconductor-ihw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ihw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ihw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ihw
   :alt:   (downloads)
.. |docker_bioconductor-ihw| image:: https://quay.io/repository/biocontainers/bioconductor-ihw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ihw
.. _`bioconductor-ihw/tags`: https://quay.io/repository/biocontainers/bioconductor-ihw?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ihw";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ihw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ihw/README.html