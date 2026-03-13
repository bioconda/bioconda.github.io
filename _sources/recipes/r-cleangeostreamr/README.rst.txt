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

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-devtools: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-jsonlite: 
   :depends on r-leaflet: 
   :depends on r-lubridate: 
   :depends on r-magrittr: 
   :depends on r-optparse: 
   :depends on r-r.utils: 
   :depends on r-readr: 
   :depends on r-rnaturalearth: 
   :depends on r-rnaturalearthdata: 
   :depends on r-sf: 
   :depends on r-sp: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidygeocoder: 
   :depends on r-tidyr: 
   :depends on r-tidyverse: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install r-cleangeostreamr

to add into an existing workspace instead, run::

    pixi add r-cleangeostreamr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cleangeostreamr

Alternatively, to install into a new environment, run::

    conda create -n envname r-cleangeostreamr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cleangeostreamr:<tag>

(see `r-cleangeostreamr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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