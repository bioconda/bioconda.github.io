:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idiogram'
.. highlight: bash

bioconductor-idiogram
=====================

.. conda:recipe:: bioconductor-idiogram
   :replaces_section_title:
   :noindex:

   idiogram

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/idiogram.html
   :license: GPL-2
   :recipe: /`bioconductor-idiogram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idiogram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idiogram/meta.yaml>`_
   :links: biotools: :biotools:`idiogram`, doi: :doi:`10.1038/nmeth.3252`

   A package for plotting genomic data by chromosomal location


.. conda:package:: bioconductor-idiogram

   |downloads_bioconductor-idiogram| |docker_bioconductor-idiogram|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-plotrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-idiogram

   and update with::

      conda update bioconductor-idiogram

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-idiogram:<tag>

   (see `bioconductor-idiogram/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-idiogram| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idiogram.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idiogram
   :alt:   (downloads)
.. |docker_bioconductor-idiogram| image:: https://quay.io/repository/biocontainers/bioconductor-idiogram/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idiogram
.. _`bioconductor-idiogram/tags`: https://quay.io/repository/biocontainers/bioconductor-idiogram?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-idiogram";
        var versions = ["1.74.0","1.70.0","1.68.0","1.66.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idiogram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idiogram/README.html