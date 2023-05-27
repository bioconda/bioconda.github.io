:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iggeneusage'
.. highlight: bash

bioconductor-iggeneusage
========================

.. conda:recipe:: bioconductor-iggeneusage
   :replaces_section_title:
   :noindex:

   Differential gene usage in immune repertoires

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/IgGeneUsage.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-iggeneusage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iggeneusage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iggeneusage/meta.yaml>`_

   Detection of biases in the usage of immunoglobulin \(Ig\) genes is an important task in immune repertoire profiling. IgGeneUsage detects aberrant Ig gene usage between biological conditions using a probabilistic model which is analyzed computationally by Bayes inference. With this IgGeneUsage also avoids some common problems related to the current practice of null\-hypothesis significance testing.


.. conda:package:: bioconductor-iggeneusage

   |downloads_bioconductor-iggeneusage| |docker_bioconductor-iggeneusage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bh: ``>=1.66.0``
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-rcppparallel: ``>=5.0.1``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-rstan: ``>=2.18.1``
   :depends r-rstantools: ``>=2.2.0``
   :depends r-stanheaders: ``>=2.18.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iggeneusage

   and update with::

      conda update bioconductor-iggeneusage

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iggeneusage:<tag>

   (see `bioconductor-iggeneusage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iggeneusage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iggeneusage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iggeneusage
   :alt:   (downloads)
.. |docker_bioconductor-iggeneusage| image:: https://quay.io/repository/biocontainers/bioconductor-iggeneusage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iggeneusage
.. _`bioconductor-iggeneusage/tags`: https://quay.io/repository/biocontainers/bioconductor-iggeneusage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iggeneusage";
        var versions = ["1.12.0","1.12.0","1.8.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iggeneusage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iggeneusage/README.html