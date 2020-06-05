:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqlogo'
.. highlight: bash

bioconductor-seqlogo
====================

.. conda:recipe:: bioconductor-seqlogo
   :replaces_section_title:
   :noindex:

   Sequence logos for DNA sequence alignments

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/seqLogo.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-seqlogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqlogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqlogo/meta.yaml>`_
   :links: biotools: :biotools:`seqlogo`, doi: :doi:`10.1038/nmeth.3252`

   seqLogo takes the position weight matrix of a DNA sequence motif and plots the corresponding sequence logo as introduced by Schneider and Stephens \(1990\).


.. conda:package:: bioconductor-seqlogo

   |downloads_bioconductor-seqlogo| |docker_bioconductor-seqlogo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.1-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.54.1-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqlogo

   and update with::

      conda update bioconductor-seqlogo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqlogo:<tag>

   (see `bioconductor-seqlogo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqlogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqlogo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqlogo
   :alt:   (downloads)
.. |docker_bioconductor-seqlogo| image:: https://quay.io/repository/biocontainers/bioconductor-seqlogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqlogo
.. _`bioconductor-seqlogo/tags`: https://quay.io/repository/biocontainers/bioconductor-seqlogo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqlogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqlogo/README.html