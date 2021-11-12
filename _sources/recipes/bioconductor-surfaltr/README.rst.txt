:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-surfaltr'
.. highlight: bash

bioconductor-surfaltr
=====================

.. conda:recipe:: bioconductor-surfaltr
   :replaces_section_title:
   :noindex:

   Rapid Comparison of Surface Protein Isoform Membrane Topologies Through surfaltr

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/surfaltr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-surfaltr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-surfaltr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-surfaltr/meta.yaml>`_

   Cell surface proteins form a major fraction of the druggable proteome and can be used for tissue\-specific delivery of oligonucleotide\/cell\-based therapeutics. Alternatively spliced surface protein isoforms have been shown to differ in their subcellular localization and\/or their transmembrane \(TM\) topology. Surface proteins are hydrophobic and remain difficult to study thereby necessitating the use of TM topology prediction methods such as TMHMM and Phobius. However\, there exists a need for bioinformatic approaches to streamline batch processing of isoforms for comparing and visualizing topologies. To address this gap\, we have developed an R package\, surfaltr. It pairs inputted isoforms\, either known alternatively spliced or novel\, with their APPRIS annotated principal counterparts\, predicts their TM topologies using TMHMM or Phobius\, and generates a customizable graphical output. Further\, surfaltr facilitates the prioritization of biologically diverse isoform pairs through the incorporation of three different ranking metrics and through protein alignment functions. Citations for programs mentioned here can be found in the vignette.


.. conda:package:: bioconductor-surfaltr

   |downloads_bioconductor-surfaltr| |docker_bioconductor-surfaltr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-msa: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: ``>=1.0.6``
   :depends r-ggplot2: ``>=3.3.2``
   :depends r-httr: ``>=1.4.2``
   :depends r-protr: ``>=1.6-2``
   :depends r-readr: ``>=1.4.0``
   :depends r-seqinr: ``>=4.2-5``
   :depends r-stringr: ``>=1.4.0``
   :depends r-testthat: ``>=3.0.0``
   :depends r-xml2: ``>=1.3.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-surfaltr

   and update with::

      conda update bioconductor-surfaltr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-surfaltr:<tag>

   (see `bioconductor-surfaltr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-surfaltr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-surfaltr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-surfaltr
   :alt:   (downloads)
.. |docker_bioconductor-surfaltr| image:: https://quay.io/repository/biocontainers/bioconductor-surfaltr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-surfaltr
.. _`bioconductor-surfaltr/tags`: https://quay.io/repository/biocontainers/bioconductor-surfaltr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-surfaltr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-surfaltr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-surfaltr/README.html