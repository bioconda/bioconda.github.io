:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplotter'
.. highlight: bash

bioconductor-geneplotter
========================

.. conda:recipe:: bioconductor-geneplotter
   :replaces_section_title:
   :noindex:

   Graphics related functions for Bioconductor

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/geneplotter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneplotter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplotter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplotter/meta.yaml>`_
   :links: biotools: :biotools:`geneplotter`, doi: :doi:`10.1038/nmeth.3252`

   Functions for plotting genomic data


.. conda:package:: bioconductor-geneplotter

   |downloads_bioconductor-geneplotter| |docker_bioconductor-geneplotter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-lattice: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneplotter

   and update with::

      conda update bioconductor-geneplotter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneplotter:<tag>

   (see `bioconductor-geneplotter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneplotter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplotter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplotter
   :alt:   (downloads)
.. |docker_bioconductor-geneplotter| image:: https://quay.io/repository/biocontainers/bioconductor-geneplotter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplotter
.. _`bioconductor-geneplotter/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplotter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplotter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplotter/README.html