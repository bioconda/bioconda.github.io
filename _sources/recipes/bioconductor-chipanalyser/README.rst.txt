.. _`bioconductor-chipanalyser`:

bioconductor-chipanalyser
=========================

|downloads|

Based on a statistical thermodynamic framework\, ChIPanalyser tries to produce ChIP\-seq like profile. The model relies on four consideration\: TF binding sites can be scored using a Position weight Matrix\, DNA accessibility plays a role in Transcription Factor binding\, binding profiles are dependant on the number of transcription factors bound to DNA and finally binding energy \(another way of describing PWM\'s\) or binding specificity should be modulated \(hence the introduction of a binding specificity modulator\). The end result of ChIPanalyser is to produce profiles simulating real ChIP\-seq profile and provide accuracy measurements of these predicted profiles after being compared to real ChIP\-seq data. The ultimate goal is to produce ChIP\-seq like profiles predicting ChIP\-seq like profile to circumvent the need to produce costly ChIP\-seq experiments.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ChIPanalyser.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipanalyser



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-chipanalyser

and update with::

   conda update bioconductor-chipanalyser



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-chipanalyser.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-chipanalyser/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-chipanalyser/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-chipanalyser/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-chipanalyser
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-chipanalyser/status
                :target: https://quay.io/repository/biocontainers/bioconductor-chipanalyser

