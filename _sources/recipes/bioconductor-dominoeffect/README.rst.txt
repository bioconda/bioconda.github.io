:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dominoeffect'
.. highlight: bash

bioconductor-dominoeffect
=========================

.. conda:recipe:: bioconductor-dominoeffect
   :replaces_section_title:
   :noindex:

   Identification and Annotation of Protein Hotspot Residues

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DominoEffect.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-dominoeffect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dominoeffect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dominoeffect/meta.yaml>`_

   The functions support identification and annotation of hotspot residues in proteins. These are individual amino acids that accumulate mutations at a much higher rate than their surrounding regions.


.. conda:package:: bioconductor-dominoeffect

   |downloads_bioconductor-dominoeffect| |docker_bioconductor-dominoeffect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biomart: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dominoeffect

   and update with::

      conda update bioconductor-dominoeffect

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dominoeffect:<tag>

   (see `bioconductor-dominoeffect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dominoeffect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dominoeffect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dominoeffect
   :alt:   (downloads)
.. |docker_bioconductor-dominoeffect| image:: https://quay.io/repository/biocontainers/bioconductor-dominoeffect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dominoeffect
.. _`bioconductor-dominoeffect/tags`: https://quay.io/repository/biocontainers/bioconductor-dominoeffect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dominoeffect";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dominoeffect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dominoeffect/README.html