:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-viper'
.. highlight: bash

bioconductor-viper
==================

.. conda:recipe:: bioconductor-viper
   :replaces_section_title:
   :noindex:

   Virtual Inference of Protein\-activity by Enriched Regulon analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/viper.html
   :license: file LICENSE
   :recipe: /`bioconductor-viper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-viper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-viper/meta.yaml>`_
   :links: biotools: :biotools:`viper`

   Inference of protein activity from gene expression data\, including the VIPER and msVIPER algorithms


.. conda:package:: bioconductor-viper

   |downloads_bioconductor-viper| |docker_bioconductor-viper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-e1071: 
   :depends r-kernsmooth: 
   :depends r-mixtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-viper

   and update with::

      conda update bioconductor-viper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-viper:<tag>

   (see `bioconductor-viper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-viper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-viper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-viper
   :alt:   (downloads)
.. |docker_bioconductor-viper| image:: https://quay.io/repository/biocontainers/bioconductor-viper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-viper
.. _`bioconductor-viper/tags`: https://quay.io/repository/biocontainers/bioconductor-viper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-viper";
        var versions = ["1.28.0","1.26.0","1.24.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-viper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-viper/README.html