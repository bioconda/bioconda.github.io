:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roc'
.. highlight: bash

bioconductor-roc
================

.. conda:recipe:: bioconductor-roc
   :replaces_section_title:
   :noindex:

   utilities for ROC\, with microarray focus

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ROC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-roc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roc/meta.yaml>`_
   :links: biotools: :biotools:`roc`, doi: :doi:`10.1038/nmeth.3252`

   Provide utilities for ROC\, with microarray focus.


.. conda:package:: bioconductor-roc

   |downloads_bioconductor-roc| |docker_bioconductor-roc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-2</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  </span></summary>
      

      ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-knitr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-roc

   and update with::

      conda update bioconductor-roc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roc:<tag>

   (see `bioconductor-roc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-roc
   :alt:   (downloads)
.. |docker_bioconductor-roc| image:: https://quay.io/repository/biocontainers/bioconductor-roc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roc
.. _`bioconductor-roc/tags`: https://quay.io/repository/biocontainers/bioconductor-roc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-roc";
        var versions = ["1.70.0","1.70.0","1.70.0","1.68.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roc/README.html