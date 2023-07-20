:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipanalyser'
.. highlight: bash

bioconductor-chipanalyser
=========================

.. conda:recipe:: bioconductor-chipanalyser
   :replaces_section_title:
   :noindex:

   ChIPanalyser\: Predicting Transcription Factor Binding Sites

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ChIPanalyser.html
   :license: GPL-3
   :recipe: /`bioconductor-chipanalyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipanalyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipanalyser/meta.yaml>`_

   ChIPanalyser is a package to predict and understand TF binding by utilizing a statistical thermodynamic model. The model incorporates 4 main factors thought to drive TF binding\: Chromatin State\, Binding energy\, Number of bound molecules and a scaling factor modulating TF binding affinity. Taken together\, ChIPanalyser produces ChIP\-like profiles that closely mimic the patterns seens in real ChIP\-seq data.


.. conda:package:: bioconductor-chipanalyser

   |downloads_bioconductor-chipanalyser| |docker_bioconductor-chipanalyser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-rcolorbrewer: 
   :depends r-rcpproll: 
   :depends r-rocr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipanalyser

   and update with::

      conda update bioconductor-chipanalyser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipanalyser:<tag>

   (see `bioconductor-chipanalyser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipanalyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipanalyser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipanalyser
   :alt:   (downloads)
.. |docker_bioconductor-chipanalyser| image:: https://quay.io/repository/biocontainers/bioconductor-chipanalyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipanalyser
.. _`bioconductor-chipanalyser/tags`: https://quay.io/repository/biocontainers/bioconductor-chipanalyser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipanalyser";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipanalyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipanalyser/README.html