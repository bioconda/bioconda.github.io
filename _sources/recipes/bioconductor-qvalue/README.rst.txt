:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qvalue'
.. highlight: bash

bioconductor-qvalue
===================

.. conda:recipe:: bioconductor-qvalue
   :replaces_section_title:
   :noindex:

   Q\-value estimation for false discovery rate control

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/qvalue.html
   :license: LGPL
   :recipe: /`bioconductor-qvalue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qvalue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qvalue/meta.yaml>`_

   This package takes a list of p\-values resulting from the simultaneous testing of many hypotheses and estimates their q\-values and local FDR values. The q\-value of a test measures the proportion of false positives incurred \(called the false discovery rate\) when that particular test is called significant. The local FDR measures the posterior probability the null hypothesis is true given the test\'s p\-value. Various plots are automatically generated\, allowing one to make sensible significance cut\-offs. Several mathematical results have recently been shown on the conservative accuracy of the estimated q\-values from this software. The software can be applied to problems in genomics\, brain imaging\, astrophysics\, and data mining.


.. conda:package:: bioconductor-qvalue

   |downloads_bioconductor-qvalue| |docker_bioconductor-qvalue|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.1-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.2-0``,  ``2.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qvalue

   and update with::

      conda update bioconductor-qvalue

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qvalue:<tag>

   (see `bioconductor-qvalue/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qvalue| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qvalue.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qvalue
   :alt:   (downloads)
.. |docker_bioconductor-qvalue| image:: https://quay.io/repository/biocontainers/bioconductor-qvalue/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qvalue
.. _`bioconductor-qvalue/tags`: https://quay.io/repository/biocontainers/bioconductor-qvalue?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qvalue";
        var versions = ["2.32.0","2.30.0","2.26.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qvalue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qvalue/README.html