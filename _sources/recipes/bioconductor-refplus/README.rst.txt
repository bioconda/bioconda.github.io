:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-refplus'
.. highlight: bash

bioconductor-refplus
====================

.. conda:recipe:: bioconductor-refplus
   :replaces_section_title:
   :noindex:

   A function set for the Extrapolation Strategy \(RMA\+\) and Extrapolation Averaging \(RMA\+\+\) methods.

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/RefPlus.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-refplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-refplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-refplus/meta.yaml>`_
   :links: biotools: :biotools:`refplus`, doi: :doi:`10.1093/bioinformatics/btm357`

   The package contains functions for pre\-processing Affymetrix data using the RMA\+ and the RMA\+\+ methods.


.. conda:package:: bioconductor-refplus

   |downloads_bioconductor-refplus| |docker_bioconductor-refplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-affyplm: ``>=1.74.0,<1.75.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-preprocesscore: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-refplus

   and update with::

      conda update bioconductor-refplus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-refplus:<tag>

   (see `bioconductor-refplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-refplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-refplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-refplus
   :alt:   (downloads)
.. |docker_bioconductor-refplus| image:: https://quay.io/repository/biocontainers/bioconductor-refplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-refplus
.. _`bioconductor-refplus/tags`: https://quay.io/repository/biocontainers/bioconductor-refplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-refplus";
        var versions = ["1.68.0","1.64.0","1.62.0","1.60.0","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-refplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-refplus/README.html