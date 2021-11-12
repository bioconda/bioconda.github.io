:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbcbook1'
.. highlight: bash

bioconductor-rbcbook1
=====================

.. conda:recipe:: bioconductor-rbcbook1
   :replaces_section_title:
   :noindex:

   Support for Springer monograph on Bioconductor

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/RbcBook1.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rbcbook1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbcbook1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbcbook1/meta.yaml>`_
   :links: biotools: :biotools:`rbcbook1`, doi: :doi:`10.1038/nmeth.3252`

   tools for building book


.. conda:package:: bioconductor-rbcbook1

   |downloads_bioconductor-rbcbook1| |docker_bioconductor-rbcbook1|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rpart: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbcbook1

   and update with::

      conda update bioconductor-rbcbook1

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbcbook1:<tag>

   (see `bioconductor-rbcbook1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbcbook1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbcbook1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbcbook1
   :alt:   (downloads)
.. |docker_bioconductor-rbcbook1| image:: https://quay.io/repository/biocontainers/bioconductor-rbcbook1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbcbook1
.. _`bioconductor-rbcbook1/tags`: https://quay.io/repository/biocontainers/bioconductor-rbcbook1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbcbook1";
        var versions = ["1.62.0","1.60.0","1.58.0","1.58.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbcbook1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbcbook1/README.html