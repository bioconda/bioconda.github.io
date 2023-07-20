:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtn'
.. highlight: bash

bioconductor-rtn
================

.. conda:recipe:: bioconductor-rtn
   :replaces_section_title:
   :noindex:

   RTN\: Reconstruction of Transcriptional regulatory Networks and analysis of regulons

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RTN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rtn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtn/meta.yaml>`_

   A transcriptional regulatory network \(TRN\) consists of a collection of transcription factors \(TFs\) and the regulated target genes. TFs are regulators that recognize specific DNA sequences and guide the expression of the genome\, either activating or repressing the expression the target genes. The set of genes controlled by the same TF forms a regulon. This package provides classes and methods for the reconstruction of TRNs and analysis of regulons.


.. conda:package:: bioconductor-rtn

   |downloads_bioconductor-rtn| |docker_bioconductor-rtn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.1-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.1-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.1-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.1-0``,  ``2.6.3-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-minet: ``>=3.58.0,<3.59.0``
   :depends bioconductor-reder: ``>=2.4.0,<2.5.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-viper: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-data.table: 
   :depends r-igraph: 
   :depends r-mixtools: 
   :depends r-pheatmap: 
   :depends r-pwr: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtn

   and update with::

      conda update bioconductor-rtn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtn:<tag>

   (see `bioconductor-rtn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtn
   :alt:   (downloads)
.. |docker_bioconductor-rtn| image:: https://quay.io/repository/biocontainers/bioconductor-rtn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtn
.. _`bioconductor-rtn/tags`: https://quay.io/repository/biocontainers/bioconductor-rtn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtn";
        var versions = ["2.24.0","2.22.0","2.18.0","2.16.0","2.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtn/README.html