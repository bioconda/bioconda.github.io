:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ballgown'
.. highlight: bash

bioconductor-ballgown
=====================

.. conda:recipe:: bioconductor-ballgown
   :replaces_section_title:
   :noindex:

   Flexible\, isoform\-level differential expression analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ballgown.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ballgown <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ballgown>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ballgown/meta.yaml>`_
   :links: biotools: :biotools:`ballgown`, doi: :doi:`10.1038/nbt.3172`

   Tools for statistical analysis of assembled transcriptomes\, including flexible differential expression analysis\, visualization of transcript structures\, and matching of assembled transcripts to annotation.


.. conda:package:: bioconductor-ballgown

   |downloads_bioconductor-ballgown| |docker_bioconductor-ballgown|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.4-0</code>,  </span></summary>
      

      ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.4-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-sva: ``>=3.38.0,<3.39.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ballgown

   and update with::

      conda update bioconductor-ballgown

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ballgown:<tag>

   (see `bioconductor-ballgown/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ballgown| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ballgown.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ballgown
   :alt:   (downloads)
.. |docker_bioconductor-ballgown| image:: https://quay.io/repository/biocontainers/bioconductor-ballgown/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ballgown
.. _`bioconductor-ballgown/tags`: https://quay.io/repository/biocontainers/bioconductor-ballgown?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ballgown/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ballgown/README.html