:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunogenviewer'
.. highlight: bash

bioconductor-immunogenviewer
============================

.. conda:recipe:: bioconductor-immunogenviewer
   :replaces_section_title:
   :noindex:

   Visualization and evaluation of protein immunogens

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/immunogenViewer.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-immunogenviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunogenviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunogenviewer/meta.yaml>`_

   Plots protein properties and visualizes position of peptide immunogens within protein sequence. Allows evaluation of immunogens based on structural and functional annotations to infer suitability for antibody\-based methods aiming to detect native proteins.


.. conda:package:: bioconductor-immunogenviewer

   |downloads_bioconductor-immunogenviewer| |docker_bioconductor-immunogenviewer|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-uniprot.ws: ``>=2.50.0,<2.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-patchwork: 

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

    pixi global install bioconductor-immunogenviewer

to add into an existing workspace instead, run::

    pixi add bioconductor-immunogenviewer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-immunogenviewer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-immunogenviewer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-immunogenviewer:<tag>

(see `bioconductor-immunogenviewer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-immunogenviewer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunogenviewer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunogenviewer
   :alt:   (downloads)
.. |docker_bioconductor-immunogenviewer| image:: https://quay.io/repository/biocontainers/bioconductor-immunogenviewer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunogenviewer
.. _`bioconductor-immunogenviewer/tags`: https://quay.io/repository/biocontainers/bioconductor-immunogenviewer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-immunogenviewer";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunogenviewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunogenviewer/README.html