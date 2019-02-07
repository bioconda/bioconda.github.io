.. title:: Package Recipe 'r-sbpiper'
.. highlight: bash


r-sbpiper
=========

.. conda:recipe:: r-sbpiper
   :replaces_section_title:

   Provides an API for analysing repetitive parameter estimations and simulations of mathematical models. Examples of mathematical models are Ordinary Differential equations \(ODEs\)  or Stochastic Differential Equations \(SDEs\) models. Among the analyses for parameter  estimation \'sbpiper\' calculates statistics and generates plots for parameter density\, PCA of the best  fits\, parameter profile likelihood estimations \(PLEs\)\, and 2D parameter PLEs. These results can  be generated using all or a subset of the best computed parameter sets. Among the analyses  for model simulation \'sbpiper\' calculates statistics and generates plots for deterministic  and stochastic time courses via cartesian and heatmap plots. Plots for the scan of one or two model  parameters can also be generated. This package is primarily used by the software \'SBpipe\'.  Citation\: Dalle Pezze P\, Le NovÃ¨re N. SBpipe\: a collection of pipelines for automating  repetitive simulation and analysis tasks. BMC Systems Biology. 2017\;11\:46. \<doi\:10.1186\/s12918\-017\-0423\-3\>.

   :homepage: https://github.com/pdp10/sbpiper
   :license: MIT / MIT
   :recipe: /`r-sbpiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sbpiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sbpiper/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12918-017-0423-3`

   


.. conda:package:: r-sbpiper

   |downloads_r-sbpiper| |docker_r-sbpiper|

   :versions: 1.9.0, 1.8.0

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-colorramps`  :conda:package:`r-data.table`  :conda:package:`r-factoextra`  :conda:package:`r-factominer`  :conda:package:`r-ggplot2` >=2.2.0 :conda:package:`r-hmisc`  :conda:package:`r-reshape2`  :conda:package:`r-scales`  :conda:package:`r-stringr`  

   :required~by: |required_by_r-sbpiper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sbpiper

   and update with::

      conda update r-sbpiper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-sbpiper


.. |required_by_r-sbpiper| conda:required_by:: r-sbpiper
.. |downloads_r-sbpiper| image:: https://img.shields.io/conda/dn/bioconda/r-sbpiper.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sbpiper| image:: https://quay.io/repository/biocontainers/r-sbpiper/status
   :target: https://quay.io/repository/biocontainers/r-sbpiper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sbpiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sbpiper/README.html

