.. _`bioconductor-roleswitch`:

bioconductor-roleswitch
=======================

|downloads|

Infer Probabilities of MiRNA\-mRNA Interaction Signature \(ProMISe\) using paired expression data from a single sample. Roleswitch operates in two phases by inferring the probability of mRNA \(miRNA\) being the targets \(\"targets\"\) of miRNA \(mRNA\)\, taking into account the expression of all of the mRNAs \(miRNAs\) due to their potential competition for the same miRNA \(mRNA\). Due to dynamic miRNA repression in the cell\, Roleswitch assumes that the total transcribed mRNA levels are higher than the observed \(equilibrium\) mRNA levels and iteratively updates the total transcription of each mRNA targets based on the above inference. NB\: in the paper\, we used ProMISe as both the model name and inferred score name.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/Roleswitch.html
Versions      1.14.0, 1.16.0, 1.18.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roleswitch



Links         biotools: :biotools:`roleswitch`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-roleswitch

and update with::

   conda update bioconductor-roleswitch



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-roleswitch.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-roleswitch/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-roleswitch/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-roleswitch/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-roleswitch
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-roleswitch/status
                :target: https://quay.io/repository/biocontainers/bioconductor-roleswitch

