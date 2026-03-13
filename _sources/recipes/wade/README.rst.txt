:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wade'
.. highlight: bash

wade
====

.. conda:recipe:: wade
   :replaces_section_title:
   :noindex:

   WADE provides a flexible and customizable method to extract specific genes from a large number of genomes at once.

   :homepage: https://github.com/phac-nml/wade
   :documentation: https://github.com/phac-nml/wade/blob/v1.2.0/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`wade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wade/meta.yaml>`_

   


.. conda:package:: wade

   |downloads_wade| |docker_wade|

   :versions:
      
      

      ``1.2.0-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends on bioconductor-biostrings: 
   :depends on blast: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-optparse: 
   :depends on r-readxl: 
   :depends on r-shiny: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 
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

    pixi global install wade

to add into an existing workspace instead, run::

    pixi add wade

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wade

Alternatively, to install into a new environment, run::

    conda create -n envname wade

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wade:<tag>

(see `wade/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wade| image:: https://img.shields.io/conda/dn/bioconda/wade.svg?style=flat
   :target: https://anaconda.org/bioconda/wade
   :alt:   (downloads)
.. |docker_wade| image:: https://quay.io/repository/biocontainers/wade/status
   :target: https://quay.io/repository/biocontainers/wade
.. _`wade/tags`: https://quay.io/repository/biocontainers/wade?tab=tags


.. raw:: html

    <script>
        var package = "wade";
        var versions = ["1.2.0","0.2.6","0.2.6","0.2.5","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wade/README.html