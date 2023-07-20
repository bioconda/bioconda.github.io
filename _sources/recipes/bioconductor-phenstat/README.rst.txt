:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenstat'
.. highlight: bash

bioconductor-phenstat
=====================

.. conda:recipe:: bioconductor-phenstat
   :replaces_section_title:
   :noindex:

   Statistical analysis of phenotypic data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PhenStat.html
   :license: file LICENSE
   :recipe: /`bioconductor-phenstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenstat/meta.yaml>`_

   Package contains methods for statistical analysis of phenotypic data.


.. conda:package:: bioconductor-phenstat

   |downloads_bioconductor-phenstat| |docker_bioconductor-phenstat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.34.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.1-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-corrplot: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-lme4: 
   :depends r-logistf: 
   :depends r-mass: 
   :depends r-msgps: 
   :depends r-nlme: 
   :depends r-nortest: 
   :depends r-pingr: 
   :depends r-reshape: 
   :depends r-smoothwin: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phenstat

   and update with::

      conda update bioconductor-phenstat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phenstat:<tag>

   (see `bioconductor-phenstat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phenstat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenstat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenstat
   :alt:   (downloads)
.. |docker_bioconductor-phenstat| image:: https://quay.io/repository/biocontainers/bioconductor-phenstat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenstat
.. _`bioconductor-phenstat/tags`: https://quay.io/repository/biocontainers/bioconductor-phenstat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phenstat";
        var versions = ["2.36.0","2.34.0","2.30.0","2.28.0","2.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenstat/README.html