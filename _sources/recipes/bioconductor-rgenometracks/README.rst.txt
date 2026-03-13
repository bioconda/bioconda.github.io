:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgenometracks'
.. highlight: bash

bioconductor-rgenometracks
==========================

.. conda:recipe:: bioconductor-rgenometracks
   :replaces_section_title:
   :noindex:

   Integerated visualization of epigenomic data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rGenomeTracks.html
   :license: GPL-3
   :recipe: /`bioconductor-rgenometracks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracks/meta.yaml>`_

   rGenomeTracks package leverages the power of pyGenomeTracks software with the interactivity of R. pyGenomeTracks is a python software that offers robust method for visualizing epigenetic data files like narrowPeak\, Hic matrix\, TADs and arcs\, however though\, here is no way currently to use it within R interactive session. rGenomeTracks wrapped the whole functionality of pyGenomeTracks with additional utilites to make to more pleasant for R users.


.. conda:package:: bioconductor-rgenometracks

   |downloads_bioconductor-rgenometracks| |docker_bioconductor-rgenometracks|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-rgenometracksdata: ``>=0.99.0,<0.100.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-imager: 
   :depends on r-reticulate: 

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

    pixi global install bioconductor-rgenometracks

to add into an existing workspace instead, run::

    pixi add bioconductor-rgenometracks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgenometracks

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgenometracks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgenometracks:<tag>

(see `bioconductor-rgenometracks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rgenometracks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgenometracks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgenometracks
   :alt:   (downloads)
.. |docker_bioconductor-rgenometracks| image:: https://quay.io/repository/biocontainers/bioconductor-rgenometracks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgenometracks
.. _`bioconductor-rgenometracks/tags`: https://quay.io/repository/biocontainers/bioconductor-rgenometracks?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgenometracks";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgenometracks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgenometracks/README.html