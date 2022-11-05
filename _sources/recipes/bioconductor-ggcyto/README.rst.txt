:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggcyto'
.. highlight: bash

bioconductor-ggcyto
===================

.. conda:recipe:: bioconductor-ggcyto
   :replaces_section_title:
   :noindex:

   Visualize Cytometry data with ggplot

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ggcyto.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggcyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggcyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggcyto/meta.yaml>`_
   :links: biotools: :biotools:`ggcyto`, doi: :doi:`10.1038/nmeth.3252`

   With the dedicated fortify method implemented for flowSet\, ncdfFlowSet and GatingSet classes\, both raw and gated flow cytometry data can be plotted directly with ggplot. ggcyto wrapper and some customed layers also make it easy to add gates and population statistics to the plot.


.. conda:package:: bioconductor-ggcyto

   |downloads_bioconductor-ggcyto| |docker_bioconductor-ggcyto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.2-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.10.0,<2.11.0``
   :depends bioconductor-flowworkspace: ``>=4.10.0,<4.11.0``
   :depends bioconductor-ncdfflow: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-gridextra: 
   :depends r-hexbin: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggcyto

   and update with::

      conda update bioconductor-ggcyto

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggcyto:<tag>

   (see `bioconductor-ggcyto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggcyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggcyto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggcyto
   :alt:   (downloads)
.. |docker_bioconductor-ggcyto| image:: https://quay.io/repository/biocontainers/bioconductor-ggcyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggcyto
.. _`bioconductor-ggcyto/tags`: https://quay.io/repository/biocontainers/bioconductor-ggcyto?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggcyto";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggcyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggcyto/README.html