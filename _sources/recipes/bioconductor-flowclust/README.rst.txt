:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowclust'
.. highlight: bash

bioconductor-flowclust
======================

.. conda:recipe:: bioconductor-flowclust
   :replaces_section_title:
   :noindex:

   Clustering for Flow Cytometry

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/flowClust.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclust/meta.yaml>`_

   Robust model\-based clustering using a t\-mixture model with Box\-Cox transformation. Note\: users should have GSL installed. Windows users\: \'consult the README file available in the inst directory of the source distribution for necessary configuration instructions\'.


.. conda:package:: bioconductor-flowclust

   |downloads_bioconductor-flowclust| |docker_bioconductor-flowclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.32.0-1</code>,  <code>3.32.0-0</code>,  <code>3.30.0-0</code>,  <code>3.28.0-2</code>,  <code>3.28.0-1</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-0</code>,  <code>3.22.0-1</code>,  </span></summary>
      

      ``3.32.0-1``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-2``,  ``3.28.0-1``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.22.0-1``,  ``3.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends bioconductor-flowviz: ``>=1.58.0,<1.59.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-clue: 
   :depends r-corpcor: 
   :depends r-ellipse: 
   :depends r-mnormt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowclust

   and update with::

      conda update bioconductor-flowclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowclust:<tag>

   (see `bioconductor-flowclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowclust
   :alt:   (downloads)
.. |docker_bioconductor-flowclust| image:: https://quay.io/repository/biocontainers/bioconductor-flowclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowclust
.. _`bioconductor-flowclust/tags`: https://quay.io/repository/biocontainers/bioconductor-flowclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowclust";
        var versions = ["3.32.0","3.32.0","3.30.0","3.28.0","3.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowclust/README.html