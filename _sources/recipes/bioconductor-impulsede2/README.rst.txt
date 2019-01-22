.. _`bioconductor-impulsede2`:

bioconductor-impulsede2
=======================

|downloads|

ImpulseDE2 is a differential expression algorithm for longitudinal count data sets which arise in sequencing experiments such as RNA\-seq\, ChIP\-seq\, ATAC\-seq and DNaseI\-seq. ImpulseDE2 is based on a negative binomial noise model with dispersion trend smoothing by DESeq2 and uses the impulse model to constrain the mean expression trajectory of each gene. The impulse model was empirically found to fit global expression changes in cells after environmental and developmental stimuli and is therefore appropriate in most cell biological scenarios. The constraint on the mean expression trajectory prevents overfitting to small expression fluctuations. Secondly\, ImpulseDE2 has higher statistical testing power than generalized linear model\-based differential expression algorithms which fit time as a categorial variable if more than six time points are sampled because of the fixed number of parameters.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/ImpulseDE2.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impulsede2



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-impulsede2

and update with::

   conda update bioconductor-impulsede2



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-impulsede2.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-impulsede2/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-impulsede2/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-impulsede2/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-impulsede2
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-impulsede2/status
                :target: https://quay.io/repository/biocontainers/bioconductor-impulsede2

