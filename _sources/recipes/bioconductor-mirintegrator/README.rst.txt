:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirintegrator'
.. highlight: bash

bioconductor-mirintegrator
==========================

.. conda:recipe:: bioconductor-mirintegrator
   :replaces_section_title:
   :noindex:

   Integrating microRNA expression into signaling pathways for pathway analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/mirIntegrator.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-mirintegrator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirintegrator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirintegrator/meta.yaml>`_
   :links: biotools: :biotools:`mirintegrator`, doi: :doi:`10.1038/srep29251`

   Tools for augmenting signaling pathways to perform pathway analysis of microRNA and mRNA expression levels.


.. conda:package:: bioconductor-mirintegrator

   |downloads_bioconductor-mirintegrator| |docker_bioconductor-mirintegrator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-rgraphviz: ``>=2.38.0,<2.39.0``
   :depends bioconductor-rontotools: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirintegrator

   and update with::

      conda update bioconductor-mirintegrator

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirintegrator:<tag>

   (see `bioconductor-mirintegrator/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirintegrator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirintegrator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirintegrator
   :alt:   (downloads)
.. |docker_bioconductor-mirintegrator| image:: https://quay.io/repository/biocontainers/bioconductor-mirintegrator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirintegrator
.. _`bioconductor-mirintegrator/tags`: https://quay.io/repository/biocontainers/bioconductor-mirintegrator?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirintegrator";
        var versions = ["1.24.0","1.22.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirintegrator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirintegrator/README.html