:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ruvseq'
.. highlight: bash

bioconductor-ruvseq
===================

.. conda:recipe:: bioconductor-ruvseq
   :replaces_section_title:
   :noindex:

   Remove Unwanted Variation from RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/RUVSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ruvseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvseq/meta.yaml>`_
   :links: biotools: :biotools:`ruvseq`

   This package implements the remove unwanted variation \(RUV\) methods of Risso et al. \(2014\) for the normalization of RNA\-Seq read counts between samples.


.. conda:package:: bioconductor-ruvseq

   |downloads_bioconductor-ruvseq| |docker_bioconductor-ruvseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-edaseq: ``>=2.26.0,<2.27.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ruvseq

   and update with::

      conda update bioconductor-ruvseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ruvseq:<tag>

   (see `bioconductor-ruvseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ruvseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ruvseq
   :alt:   (downloads)
.. |docker_bioconductor-ruvseq| image:: https://quay.io/repository/biocontainers/bioconductor-ruvseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvseq
.. _`bioconductor-ruvseq/tags`: https://quay.io/repository/biocontainers/bioconductor-ruvseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvseq/README.html