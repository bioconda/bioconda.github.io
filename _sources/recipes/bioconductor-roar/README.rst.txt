:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roar'
.. highlight: bash

bioconductor-roar
=================

.. conda:recipe:: bioconductor-roar
   :replaces_section_title:
   :noindex:

   Identify differential APA usage from RNA\-seq alignments

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/roar.html
   :license: GPL-3
   :recipe: /`bioconductor-roar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roar/meta.yaml>`_
   :links: biotools: :biotools:`roar`, doi: :doi:`10.1038/nmeth.3252`

   Identify preferential usage of APA sites\, comparing two biological conditions\, starting from known alternative sites and alignments obtained from standard RNA\-seq experiments.


.. conda:package:: bioconductor-roar

   |downloads_bioconductor-roar| |docker_bioconductor-roar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-roar

   and update with::

      conda update bioconductor-roar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roar:<tag>

   (see `bioconductor-roar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-roar
   :alt:   (downloads)
.. |docker_bioconductor-roar| image:: https://quay.io/repository/biocontainers/bioconductor-roar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roar
.. _`bioconductor-roar/tags`: https://quay.io/repository/biocontainers/bioconductor-roar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roar/README.html