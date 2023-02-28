:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-swamp'
.. highlight: bash

r-swamp
=======

.. conda:recipe:: r-swamp
   :replaces_section_title:
   :noindex:

   Collection of functions to connect the structure of the data with the information on the samples. Three types of associations are covered\: 1. linear model of principal components. 2. hierarchical clustering analysis. 3. distribution of features\-sample annotation associations. Additionally\, the inter\-relation between sample annotations can be analyzed. Simple methods are provided for the correction of batch effects and removal of principal components.

   :homepage: https://CRAN.R-project.org/package=swamp
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-swamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-swamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-swamp/meta.yaml>`_

   


.. conda:package:: r-swamp

   |downloads_r-swamp| |docker_r-swamp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-4</code>,  <code>1.5.1-3</code>,  <code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.4.1-3</code>,  <code>1.4.1-2</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.5.1-4``,  ``1.5.1-3``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: 
   :depends r-amap: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-gplots: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-swamp

   and update with::

      conda update r-swamp

   or use the docker container::

      docker pull quay.io/biocontainers/r-swamp:<tag>

   (see `r-swamp/tags`_ for valid values for ``<tag>``)


.. |downloads_r-swamp| image:: https://img.shields.io/conda/dn/bioconda/r-swamp.svg?style=flat
   :target: https://anaconda.org/bioconda/r-swamp
   :alt:   (downloads)
.. |docker_r-swamp| image:: https://quay.io/repository/biocontainers/r-swamp/status
   :target: https://quay.io/repository/biocontainers/r-swamp
.. _`r-swamp/tags`: https://quay.io/repository/biocontainers/r-swamp?tab=tags


.. raw:: html

    <script>
        var package = "r-swamp";
        var versions = ["1.5.1","1.5.1","1.5.1","1.5.1","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-swamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-swamp/README.html