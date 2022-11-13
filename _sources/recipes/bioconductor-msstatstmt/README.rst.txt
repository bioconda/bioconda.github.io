:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatstmt'
.. highlight: bash

bioconductor-msstatstmt
=======================

.. conda:recipe:: bioconductor-msstatstmt
   :replaces_section_title:
   :noindex:

   Protein Significance Analysis in shotgun mass spectrometry\-based proteomic experiments with tandem mass tag \(TMT\) labeling

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MSstatsTMT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatstmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatstmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatstmt/meta.yaml>`_

   The package provides statistical tools for detecting differentially abundant proteins in shotgun mass spectrometry\-based proteomic experiments with tandem mass tag \(TMT\) labeling. It provides multiple functionalities\, including aata visualization\, protein quantification and normalization\, and statistical modeling and inference. Furthermore\, it is inter\-operable with other data processing tools\, such as Proteome Discoverer\, MaxQuant\, OpenMS and SpectroMine.


.. conda:package:: bioconductor-msstatstmt

   |downloads_bioconductor-msstatstmt| |docker_bioconductor-msstatstmt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.8.2-1</code>,  <code>1.8.2-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.5-0</code>,  </span></summary>
      

      ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.5-0``,  ``1.1.2-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-msstats: ``>=4.6.0,<4.7.0``
   :depends bioconductor-msstatsconvert: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-lme4: 
   :depends r-lmertest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msstatstmt

   and update with::

      conda update bioconductor-msstatstmt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatstmt:<tag>

   (see `bioconductor-msstatstmt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatstmt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatstmt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatstmt
   :alt:   (downloads)
.. |docker_bioconductor-msstatstmt| image:: https://quay.io/repository/biocontainers/bioconductor-msstatstmt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatstmt
.. _`bioconductor-msstatstmt/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatstmt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatstmt";
        var versions = ["2.6.0","2.2.0","2.0.0","1.8.2","1.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatstmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatstmt/README.html