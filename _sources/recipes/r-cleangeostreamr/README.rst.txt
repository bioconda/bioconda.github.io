:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cleangeostreamr'
.. highlight: bash

r-cleangeostreamr
=================

.. conda:recipe:: r-cleangeostreamr
   :replaces_section_title:
   :noindex:

   Automatic curation of spatially annotated data.

   :homepage: https://codebase.helmholtz.cloud/department-computational-biology/software/cleangeostreamr
   :license: GPL-3.0
   :recipe: /`r-cleangeostreamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cleangeostreamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cleangeostreamr/meta.yaml>`_
   :links: biotools: :biotools:`cleangeostreamr`

   CleanGeoStreamR package is designed to automate the curation of spatially annotated data which frequently present challenges due to inconsistencies\, errors\, and missing information. CleanGeoStreamR tackles these issues by providing a range of tools for preprocessing\, curating\, and finalizing spatial data\, ensuring its accuracy and integrity.



.. conda:package:: r-cleangeostreamr

   |downloads_r-cleangeostreamr| |docker_r-cleangeostreamr|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-jsonlite: 
   :depends r-leaflet: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-optparse: 
   :depends r-r.utils: 
   :depends r-readr: 
   :depends r-rnaturalearth: 
   :depends r-rnaturalearthdata: 
   :depends r-sf: 
   :depends r-sp: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidygeocoder: 
   :depends r-tidyr: 
   :depends r-tidyverse: 
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

      mamba install r-cleangeostreamr

   and update with::

      mamba update r-cleangeostreamr

  To create a new environment, run::

      mamba create --name myenvname r-cleangeostreamr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cleangeostreamr:<tag>

   (see `r-cleangeostreamr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cleangeostreamr| image:: https://img.shields.io/conda/dn/bioconda/r-cleangeostreamr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cleangeostreamr
   :alt:   (downloads)
.. |docker_r-cleangeostreamr| image:: https://quay.io/repository/biocontainers/r-cleangeostreamr/status
   :target: https://quay.io/repository/biocontainers/r-cleangeostreamr
.. _`r-cleangeostreamr/tags`: https://quay.io/repository/biocontainers/r-cleangeostreamr?tab=tags


.. raw:: html

    <script>
        var package = "r-cleangeostreamr";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cleangeostreamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cleangeostreamr/README.html