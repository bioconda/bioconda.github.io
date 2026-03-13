:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocbook'
.. highlight: bash

bioconductor-biocbook
=====================

.. conda:recipe:: bioconductor-biocbook
   :replaces_section_title:
   :noindex:

   Write\, containerize\, publish and version Quarto books with Bioconductor

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocBook.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-biocbook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocbook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocbook/meta.yaml>`_

   A BiocBook can be created by authors \(e.g. R developers\, but also scientists\, teachers\, communicators\, ...\) who wish to 1\) write \(compile a body of biological and\/or bioinformatics knowledge\)\, 2\) containerize \(provide Docker images to reproduce the examples illustrated in the compendium\)\, 3\) publish \(deploy an online book to disseminate the compendium\)\, and 4\) version \(automatically generate specific online book versions and Docker images for specific Bioconductor releases\).


.. conda:package:: bioconductor-biocbook

   |downloads_bioconductor-biocbook| |docker_bioconductor-biocbook|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-dplyr: 
   :depends on r-gert: 
   :depends on r-gh: 
   :depends on r-gitcreds: 
   :depends on r-glue: 
   :depends on r-httr: 
   :depends on r-pak: 
   :depends on r-purrr: 
   :depends on r-quarto: 
   :depends on r-renv: 
   :depends on r-rlang: 
   :depends on r-rprojroot: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-usethis: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-biocbook

to add into an existing workspace instead, run::

    pixi add bioconductor-biocbook

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biocbook

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biocbook

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biocbook:<tag>

(see `bioconductor-biocbook/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biocbook| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocbook.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocbook
   :alt:   (downloads)
.. |docker_bioconductor-biocbook| image:: https://quay.io/repository/biocontainers/bioconductor-biocbook/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocbook
.. _`bioconductor-biocbook/tags`: https://quay.io/repository/biocontainers/bioconductor-biocbook?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocbook";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocbook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocbook/README.html