:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocviews'
.. highlight: bash

bioconductor-biocviews
======================

.. conda:recipe:: bioconductor-biocviews
   :replaces_section_title:
   :noindex:

   Categorized views of R package repositories

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/biocViews.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocviews <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocviews>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocviews/meta.yaml>`_
   :links: biotools: :biotools:`biocviews`, doi: :doi:`10.1038/nmeth.3252`

   Infrastructure to support \'views\' used to classify Bioconductor packages. \'biocViews\' are directed acyclic graphs of terms from a controlled vocabulary. There are three major classifications\, corresponding to \'software\'\, \'annotation\'\, and \'experiment data\' packages.


.. conda:package:: bioconductor-biocviews

   |downloads_bioconductor-biocviews| |docker_bioconductor-biocviews|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.1-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.2-0</code>,  <code>1.50.9-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.1-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.2-0``,  ``1.50.9-0``,  ``1.48.3-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends bioconductor-rbgl: ``>=1.74.0,<1.75.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: 
   :depends r-rcurl: 
   :depends r-runit: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocviews

   and update with::

      conda update bioconductor-biocviews

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocviews:<tag>

   (see `bioconductor-biocviews/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocviews| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocviews.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocviews
   :alt:   (downloads)
.. |docker_bioconductor-biocviews| image:: https://quay.io/repository/biocontainers/bioconductor-biocviews/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocviews
.. _`bioconductor-biocviews/tags`: https://quay.io/repository/biocontainers/bioconductor-biocviews?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocviews";
        var versions = ["1.66.0","1.62.0","1.60.0","1.58.1","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocviews/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocviews/README.html