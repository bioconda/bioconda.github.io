:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowviz'
.. highlight: bash

bioconductor-flowviz
====================

.. conda:recipe:: bioconductor-flowviz
   :replaces_section_title:
   :noindex:

   Visualization for flow cytometry

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/flowViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowviz/meta.yaml>`_
   :links: biotools: :biotools:`flowviz`, doi: :doi:`10.1093/bioinformatics/btn021`

   Provides visualization tools for flow cytometry data.


.. conda:package:: bioconductor-flowviz

   |downloads_bioconductor-flowviz| |docker_bioconductor-flowviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.46.1-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.1-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-flowcore: ``>=2.2.0,<2.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-hexbin: 
   :depends r-idpmisc: 
   :depends r-kernsmooth: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowviz

   and update with::

      conda update bioconductor-flowviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowviz:<tag>

   (see `bioconductor-flowviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowviz
   :alt:   (downloads)
.. |docker_bioconductor-flowviz| image:: https://quay.io/repository/biocontainers/bioconductor-flowviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowviz
.. _`bioconductor-flowviz/tags`: https://quay.io/repository/biocontainers/bioconductor-flowviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowviz/README.html