:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pathosurveilr'
.. highlight: bash

r-pathosurveilr
===============

.. conda:recipe:: r-pathosurveilr
   :replaces_section_title:
   :noindex:

   Utilities for interacting with the pathogensurveillance pipeline.

   :homepage: https://github.com/grunwaldlab/PathoSurveilR
   :license: MIT / MIT
   :recipe: /`r-pathosurveilr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathosurveilr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathosurveilr/meta.yaml>`_

   


.. conda:package:: r-pathosurveilr

   |downloads_r-pathosurveilr| |docker_r-pathosurveilr|

   :versions:
      
      

      ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends r-adegenet: 
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-base64enc: 
   :depends r-dt: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-heattree: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-kableextra: 
   :depends r-lubridate: 
   :depends r-pheatmap: 
   :depends r-phytools: 
   :depends r-plotly: 
   :depends r-poppr: 
   :depends r-rcppsimdjson: 
   :depends r-readods: 
   :depends r-readxl: 
   :depends r-rentrez: 
   :depends r-tibble: 
   :depends r-tidygeocoder: 
   :depends r-webshot2: 
   :depends r-xml2: 
   :depends r-yaml: 
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

      mamba install r-pathosurveilr

   and update with::

      mamba update r-pathosurveilr

  To create a new environment, run::

      mamba create --name myenvname r-pathosurveilr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pathosurveilr:<tag>

   (see `r-pathosurveilr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pathosurveilr| image:: https://img.shields.io/conda/dn/bioconda/r-pathosurveilr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pathosurveilr
   :alt:   (downloads)
.. |docker_r-pathosurveilr| image:: https://quay.io/repository/biocontainers/r-pathosurveilr/status
   :target: https://quay.io/repository/biocontainers/r-pathosurveilr
.. _`r-pathosurveilr/tags`: https://quay.io/repository/biocontainers/r-pathosurveilr?tab=tags


.. raw:: html

    <script>
        var package = "r-pathosurveilr";
        var versions = ["0.4.5","0.4.4","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pathosurveilr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pathosurveilr/README.html