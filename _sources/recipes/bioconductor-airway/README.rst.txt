:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-airway'
.. highlight: bash

bioconductor-airway
===================

.. conda:recipe:: bioconductor-airway
   :replaces_section_title:
   :noindex:

   RangedSummarizedExperiment for RNA\-Seq in airway smooth muscle cells\, by Himes et al PLoS One 2014

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/airway.html
   :license: LGPL
   :recipe: /`bioconductor-airway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-airway/meta.yaml>`_

   This package provides a RangedSummarizedExperiment object of read counts in genes for an RNA\-Seq experiment on four human airway smooth muscle cell lines treated with dexamethasone. Details on the gene model and read counting procedure are provided in the package vignette. The citation for the experiment is\: Himes BE\, Jiang X\, Wagner P\, Hu R\, Wang Q\, Klanderman B\, Whitaker RM\, Duan Q\, Lasky\-Su J\, Nikolos C\, Jester W\, Johnson M\, Panettieri R Jr\, Tantisira KG\, Weiss ST\, Lu Q. \'RNA\-Seq Transcriptome Profiling Identifies CRISPLD2 as a Glucocorticoid Responsive Gene that Modulates Cytokine Function in Airway Smooth Muscle Cells.\' PLoS One. 2014 Jun 13\;9\(6\)\:e99625. PMID\: 24926665. GEO\: GSE52778.


.. conda:package:: bioconductor-airway

   |downloads_bioconductor-airway| |docker_bioconductor-airway|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-airway

   and update with::

      conda update bioconductor-airway

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-airway:<tag>

   (see `bioconductor-airway/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-airway| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-airway.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-airway
   :alt:   (downloads)
.. |docker_bioconductor-airway| image:: https://quay.io/repository/biocontainers/bioconductor-airway/status
   :target: https://quay.io/repository/biocontainers/bioconductor-airway
.. _`bioconductor-airway/tags`: https://quay.io/repository/biocontainers/bioconductor-airway?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-airway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-airway/README.html