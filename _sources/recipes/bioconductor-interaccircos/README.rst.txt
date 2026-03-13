:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interaccircos'
.. highlight: bash

bioconductor-interaccircos
==========================

.. conda:recipe:: bioconductor-interaccircos
   :replaces_section_title:
   :noindex:

   The Generation of Interactive Circos Plot

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/interacCircos.html
   :license: GPL-3
   :recipe: /`bioconductor-interaccircos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interaccircos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interaccircos/meta.yaml>`_

   Implement in an efficient approach to display the genomic data\, relationship\, information in an interactive circular genome\(Circos\) plot. \'interacCircos\' are inspired by \'circosJS\'\, \'BioCircos.js\' and \'NG\-Circos\' and we integrate the modules of \'circosJS\'\, \'BioCircos.js\' and \'NG\-Circos\' into this R package\, based on \'htmlwidgets\' framework.


.. conda:package:: bioconductor-interaccircos

   |downloads_bioconductor-interaccircos| |docker_bioconductor-interaccircos|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-htmlwidgets: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-interaccircos

to add into an existing workspace instead, run::

    pixi add bioconductor-interaccircos

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-interaccircos

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-interaccircos

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-interaccircos:<tag>

(see `bioconductor-interaccircos/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-interaccircos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interaccircos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-interaccircos
   :alt:   (downloads)
.. |docker_bioconductor-interaccircos| image:: https://quay.io/repository/biocontainers/bioconductor-interaccircos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interaccircos
.. _`bioconductor-interaccircos/tags`: https://quay.io/repository/biocontainers/bioconductor-interaccircos?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-interaccircos";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interaccircos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interaccircos/README.html