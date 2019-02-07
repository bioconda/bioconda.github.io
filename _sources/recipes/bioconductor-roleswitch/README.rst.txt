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

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-microrna` >=1.40.0,<1.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-plotrix`  :conda:package:`r-pracma`  :conda:package:`r-reshape`  

   :required~by: |required_by_bioconductor-roleswitch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-roleswitch

   and update with::

      conda update bioconductor-roleswitch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-roleswitch


.. |required_by_bioconductor-roleswitch| conda:required_by:: bioconductor-roleswitch
.. |downloads_bioconductor-roleswitch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roleswitch.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-roleswitch| image:: https://quay.io/repository/biocontainers/bioconductor-roleswitch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roleswitch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roleswitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roleswitch/README.html

