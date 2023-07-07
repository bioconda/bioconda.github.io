:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffgeneanalysis'
.. highlight: bash

bioconductor-diffgeneanalysis
=============================

.. conda:recipe:: bioconductor-diffgeneanalysis
   :replaces_section_title:
   :noindex:

   Performs differential gene expression Analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/diffGeneAnalysis.html
   :license: GPL
   :recipe: /`bioconductor-diffgeneanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffgeneanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffgeneanalysis/meta.yaml>`_
   :links: biotools: :biotools:`diffgeneanalysis`, doi: :doi:`10.1038/nmeth.3252`

   Analyze microarray data


.. conda:package:: bioconductor-diffgeneanalysis

   |downloads_bioconductor-diffgeneanalysis| |docker_bioconductor-diffgeneanalysis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.82.0-0</code>,  <code>1.80.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  </span></summary>
      

      ``1.82.0-0``,  ``1.80.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-minpack.lm: ``>=1.0-4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffgeneanalysis

   and update with::

      conda update bioconductor-diffgeneanalysis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffgeneanalysis:<tag>

   (see `bioconductor-diffgeneanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffgeneanalysis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffgeneanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffgeneanalysis
   :alt:   (downloads)
.. |docker_bioconductor-diffgeneanalysis| image:: https://quay.io/repository/biocontainers/bioconductor-diffgeneanalysis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffgeneanalysis
.. _`bioconductor-diffgeneanalysis/tags`: https://quay.io/repository/biocontainers/bioconductor-diffgeneanalysis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffgeneanalysis";
        var versions = ["1.82.0","1.80.0","1.76.0","1.74.0","1.72.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffgeneanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffgeneanalysis/README.html