:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cntools'
.. highlight: bash

bioconductor-cntools
====================

.. conda:recipe:: bioconductor-cntools
   :replaces_section_title:
   :noindex:

   Convert segment data into a region by sample matrix to allow for other high level computational analyses.

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CNTools.html
   :license: LGPL
   :recipe: /`bioconductor-cntools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cntools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cntools/meta.yaml>`_
   :links: biotools: :biotools:`cntools`, doi: :doi:`10.1038/nmeth.3252`

   This package provides tools to convert the output of segmentation analysis using DNAcopy to a matrix structure with overlapping segments as rows and samples as columns so that other computational analyses can be applied to segmented data


.. conda:package:: bioconductor-cntools

   |downloads_bioconductor-cntools| |docker_bioconductor-cntools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genefilter: ``>=1.76.0,<1.77.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cntools

   and update with::

      conda update bioconductor-cntools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cntools:<tag>

   (see `bioconductor-cntools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cntools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cntools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cntools
   :alt:   (downloads)
.. |docker_bioconductor-cntools| image:: https://quay.io/repository/biocontainers/bioconductor-cntools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cntools
.. _`bioconductor-cntools/tags`: https://quay.io/repository/biocontainers/bioconductor-cntools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cntools";
        var versions = ["1.50.0","1.48.0","1.46.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cntools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cntools/README.html