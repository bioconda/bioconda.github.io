:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orderedlist'
.. highlight: bash

bioconductor-orderedlist
========================

.. conda:recipe:: bioconductor-orderedlist
   :replaces_section_title:
   :noindex:

   Similarities of Ordered Gene Lists

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/OrderedList.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-orderedlist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orderedlist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orderedlist/meta.yaml>`_
   :links: biotools: :biotools:`orderedlist`, doi: :doi:`10.1093/bioinformatics/btl385`

   Detection of similarities between ordered lists of genes. Thereby\, either simple lists can be compared or gene expression data can be used to deduce the lists. Significance of similarities is evaluated by shuffling lists or by resampling in microarray data\, respectively.


.. conda:package:: bioconductor-orderedlist

   |downloads_bioconductor-orderedlist| |docker_bioconductor-orderedlist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.59.1-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.59.1-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-twilight: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-orderedlist

   and update with::

      conda update bioconductor-orderedlist

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orderedlist:<tag>

   (see `bioconductor-orderedlist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orderedlist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orderedlist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orderedlist
   :alt:   (downloads)
.. |docker_bioconductor-orderedlist| image:: https://quay.io/repository/biocontainers/bioconductor-orderedlist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orderedlist
.. _`bioconductor-orderedlist/tags`: https://quay.io/repository/biocontainers/bioconductor-orderedlist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orderedlist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orderedlist/README.html