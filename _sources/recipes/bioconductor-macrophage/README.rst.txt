:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macrophage'
.. highlight: bash

bioconductor-macrophage
=======================

.. conda:recipe:: bioconductor-macrophage
   :replaces_section_title:
   :noindex:

   Human macrophage immune response

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/macrophage.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-macrophage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macrophage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macrophage/meta.yaml>`_

   This package provides the output of running Salmon on a set of 24 RNA\-seq samples from Alasoo\, et al. \"Shared genetic effects on chromatin and gene expression indicate a role for enhancer priming in immune response\"\, published in Nature Genetics\, January 2018. For details on version numbers and how the samples were processed see the package vignette.


.. conda:package:: bioconductor-macrophage

   |downloads_bioconductor-macrophage| |docker_bioconductor-macrophage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-macrophage

   and update with::

      conda update bioconductor-macrophage

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macrophage:<tag>

   (see `bioconductor-macrophage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macrophage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macrophage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macrophage
   :alt:   (downloads)
.. |docker_bioconductor-macrophage| image:: https://quay.io/repository/biocontainers/bioconductor-macrophage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macrophage
.. _`bioconductor-macrophage/tags`: https://quay.io/repository/biocontainers/bioconductor-macrophage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macrophage";
        var versions = ["1.10.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macrophage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macrophage/README.html