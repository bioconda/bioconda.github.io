.. _`r-sbpiper`:

r-sbpiper
=========

|downloads|

Provides an API for analysing repetitive parameter estimations and simulations of mathematical models. Examples of mathematical models are Ordinary Differential equations \(ODEs\)  or Stochastic Differential Equations \(SDEs\) models. Among the analyses for parameter  estimation \'sbpiper\' calculates statistics and generates plots for parameter density\, PCA of the best  fits\, parameter profile likelihood estimations \(PLEs\)\, and 2D parameter PLEs. These results can  be generated using all or a subset of the best computed parameter sets. Among the analyses  for model simulation \'sbpiper\' calculates statistics and generates plots for deterministic  and stochastic time courses via cartesian and heatmap plots. Plots for the scan of one or two model  parameters can also be generated. This package is primarily used by the software \'SBpipe\'.  Citation\: Dalle Pezze P\, Le NovÃ¨re N. SBpipe\: a collection of pipelines for automating  repetitive simulation and analysis tasks. BMC Systems Biology. 2017\;11\:46. \<doi\:10.1186\/s12918\-017\-0423\-3\>.

============= ===========
Home          https://github.com/pdp10/sbpiper
Versions      1.8.0
License       MIT + file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sbpiper



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-sbpiper

and update with::

   conda update r-sbpiper



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-sbpiper.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-sbpiper/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-sbpiper/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-sbpiper/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-sbpiper
.. |docker| image:: https://quay.io/repository/biocontainers/r-sbpiper/status
                :target: https://quay.io/repository/biocontainers/r-sbpiper

