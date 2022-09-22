:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahcytobands'
.. highlight: bash

bioconductor-ahcytobands
========================

.. conda:recipe:: bioconductor-ahcytobands
   :replaces_section_title:
   :noindex:

   CytoBands for AnnotationHub

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/AHCytoBands.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahcytobands <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahcytobands>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahcytobands/meta.yaml>`_

   Supplies AnnotationHub with CytoBand information from UCSC. There is a track for each major organism. Giemsa\-stained bands are commonly used to decorate chromosomal overviews in visualizations of genomic data.


.. conda:package:: bioconductor-ahcytobands

   |downloads_bioconductor-ahcytobands| |docker_bioconductor-ahcytobands|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.1-1</code>,  <code>0.99.1-0</code>,  <code>0.99.0-7</code>,  <code>0.99.0-6</code>,  <code>0.99.0-5</code>,  <code>0.99.0-4</code>,  <code>0.99.0-3</code>,  <code>0.99.0-2</code>,  <code>0.99.0-1</code>,  </span></summary>
      

      ``0.99.1-1``,  ``0.99.1-0``,  ``0.99.0-7``,  ``0.99.0-6``,  ``0.99.0-5``,  ``0.99.0-4``,  ``0.99.0-3``,  ``0.99.0-2``,  ``0.99.0-1``,  ``0.99.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ahcytobands

   and update with::

      conda update bioconductor-ahcytobands

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ahcytobands:<tag>

   (see `bioconductor-ahcytobands/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ahcytobands| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ahcytobands.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ahcytobands
   :alt:   (downloads)
.. |docker_bioconductor-ahcytobands| image:: https://quay.io/repository/biocontainers/bioconductor-ahcytobands/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ahcytobands
.. _`bioconductor-ahcytobands/tags`: https://quay.io/repository/biocontainers/bioconductor-ahcytobands?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ahcytobands";
        var versions = ["0.99.1","0.99.1","0.99.0","0.99.0","0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ahcytobands/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ahcytobands/README.html