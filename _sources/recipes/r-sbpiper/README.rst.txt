:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sbpiper'
.. highlight: bash

r-sbpiper
=========

.. conda:recipe:: r-sbpiper
   :replaces_section_title:
   :noindex:

   Provides an API for analysing repetitive parameter estimations and simulations of mathematical models. Examples of mathematical models are Ordinary Differential equations \(ODEs\)  or Stochastic Differential Equations \(SDEs\) models. Among the analyses for parameter  estimation \'sbpiper\' calculates statistics and generates plots for parameter density\, PCA of the best  fits\, parameter profile likelihood estimations \(PLEs\)\, and 2D parameter PLEs. These results can  be generated using all or a subset of the best computed parameter sets. Among the analyses  for model simulation \'sbpiper\' calculates statistics and generates plots for deterministic  and stochastic time courses via cartesian and heatmap plots. Plots for the scan of one or two model  parameters can also be generated. This package is primarily used by the software \'SBpipe\'.  Citation\: Dalle Pezze P\, Le NovÃ¨re N. SBpipe\: a collection of pipelines for automating  repetitive simulation and analysis tasks. BMC Systems Biology. 2017\;11\:46. \<doi\:10.1186\/s12918\-017\-0423\-3\>.

   :homepage: https://github.com/pdp10/sbpiper
   :license: MIT / MIT
   :recipe: /`r-sbpiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sbpiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sbpiper/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12918-017-0423-3`

   


.. conda:package:: r-sbpiper

   |downloads_r-sbpiper| |docker_r-sbpiper|

   :versions:
      
      

      ``1.9.0-8``,  ``1.9.0-7``,  ``1.9.0-6``,  ``1.9.0-5``,  ``1.9.0-4``,  ``1.9.0-3``,  ``1.9.0-2``,  ``1.9.0-1``,  ``1.8.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorramps: 
   :depends r-data.table: 
   :depends r-factoextra: 
   :depends r-factominer: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-hmisc: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-stringr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-sbpiper

   and update with::

      mamba update r-sbpiper

  To create a new environment, run::

      mamba create --name myenvname r-sbpiper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-sbpiper:<tag>

   (see `r-sbpiper/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sbpiper| image:: https://img.shields.io/conda/dn/bioconda/r-sbpiper.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sbpiper
   :alt:   (downloads)
.. |docker_r-sbpiper| image:: https://quay.io/repository/biocontainers/r-sbpiper/status
   :target: https://quay.io/repository/biocontainers/r-sbpiper
.. _`r-sbpiper/tags`: https://quay.io/repository/biocontainers/r-sbpiper?tab=tags


.. raw:: html

    <script>
        var package = "r-sbpiper";
        var versions = ["1.9.0","1.9.0","1.9.0","1.9.0","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sbpiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sbpiper/README.html