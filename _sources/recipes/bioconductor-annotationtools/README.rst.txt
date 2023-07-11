:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationtools'
.. highlight: bash

bioconductor-annotationtools
============================

.. conda:recipe:: bioconductor-annotationtools
   :replaces_section_title:
   :noindex:

   Annotate microarrays and perform cross\-species gene expression analyses using flat file databases

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/annotationTools.html
   :license: GPL
   :recipe: /`bioconductor-annotationtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationtools/meta.yaml>`_
   :links: biotools: :biotools:`annotationtools`

   Functions to annotate microarrays\, find orthologs\, and integrate heterogeneous gene expression profiles using annotation and other molecular biology information available as flat file database \(plain text files\).


.. conda:package:: bioconductor-annotationtools

   |downloads_bioconductor-annotationtools| |docker_bioconductor-annotationtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationtools

   and update with::

      conda update bioconductor-annotationtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationtools:<tag>

   (see `bioconductor-annotationtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationtools
   :alt:   (downloads)
.. |docker_bioconductor-annotationtools| image:: https://quay.io/repository/biocontainers/bioconductor-annotationtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationtools
.. _`bioconductor-annotationtools/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotationtools";
        var versions = ["1.74.0","1.72.0","1.68.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationtools/README.html