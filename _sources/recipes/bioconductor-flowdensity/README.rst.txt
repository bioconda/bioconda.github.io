:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowdensity'
.. highlight: bash

bioconductor-flowdensity
========================

.. conda:recipe:: bioconductor-flowdensity
   :replaces_section_title:
   :noindex:

   Sequential Flow Cytometry Data Gating

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/flowDensity.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowdensity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowdensity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowdensity/meta.yaml>`_
   :links: biotools: :biotools:`flowdensity`, doi: :doi:`10.1093/bioinformatics/btu677`

   This package provides tools for automated sequential gating analogous to the manual gating strategy based on the density of the data.


.. conda:package:: bioconductor-flowdensity

   |downloads_bioconductor-flowdensity| |docker_bioconductor-flowdensity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.4.0,<2.5.0``
   :depends bioconductor-flowviz: ``>=1.56.0,<1.57.0``
   :depends bioconductor-flowworkspace: ``>=4.4.0,<4.5.0``
   :depends libxml2: ``>=2.9.12,<2.10.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-car: 
   :depends r-gplots: 
   :depends r-rfoc: 
   :depends r-rgeos: 
   :depends r-sp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowdensity

   and update with::

      conda update bioconductor-flowdensity

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowdensity:<tag>

   (see `bioconductor-flowdensity/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowdensity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowdensity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowdensity
   :alt:   (downloads)
.. |docker_bioconductor-flowdensity| image:: https://quay.io/repository/biocontainers/bioconductor-flowdensity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowdensity
.. _`bioconductor-flowdensity/tags`: https://quay.io/repository/biocontainers/bioconductor-flowdensity?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowdensity";
        var versions = ["1.26.0","1.24.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowdensity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowdensity/README.html