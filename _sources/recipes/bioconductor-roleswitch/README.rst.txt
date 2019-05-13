:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roleswitch'
.. highlight: bash

bioconductor-roleswitch
=======================

.. conda:recipe:: bioconductor-roleswitch
   :replaces_section_title:

   Infer Probabilities of MiRNA\-mRNA Interaction Signature \(ProMISe\) using paired expression data from a single sample. Roleswitch operates in two phases by inferring the probability of mRNA \(miRNA\) being the targets \(\"targets\"\) of miRNA \(mRNA\)\, taking into account the expression of all of the mRNAs \(miRNAs\) due to their potential competition for the same miRNA \(mRNA\). Due to dynamic miRNA repression in the cell\, Roleswitch assumes that the total transcribed mRNA levels are higher than the observed \(equilibrium\) mRNA levels and iteratively updates the total transcription of each mRNA targets based on the above inference. NB\: in the paper\, we used ProMISe as both the model name and inferred score name.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Roleswitch.html
   :license: GPL-2
   :recipe: /`bioconductor-roleswitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roleswitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roleswitch/meta.yaml>`_
   :links: biotools: :biotools:`roleswitch`

   


.. conda:package:: bioconductor-roleswitch

   |downloads_bioconductor-roleswitch| |docker_bioconductor-roleswitch|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-microrna: >=1.40.0,<1.41.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dbi: 
   :depends r-plotrix: 
   :depends r-pracma: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-roleswitch

   and update with::

      conda update bioconductor-roleswitch

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roleswitch:<tag>

   (see `bioconductor-roleswitch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roleswitch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roleswitch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-roleswitch
   :alt:   (downloads)
.. |docker_bioconductor-roleswitch| image:: https://quay.io/repository/biocontainers/bioconductor-roleswitch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roleswitch
.. _`bioconductor-roleswitch/tags`: https://quay.io/repository/biocontainers/bioconductor-roleswitch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roleswitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roleswitch/README.html