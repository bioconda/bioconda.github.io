:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scxa-plots'
.. highlight: bash

scxa-plots
==========

.. conda:recipe:: scxa-plots
   :replaces_section_title:
   :noindex:

   A set of wrappers to produce some bespoke plots used by the team behind Single\-cell Expresion Atlas \(SCXA\) in single\-cell RNA\-seq analysis. Not to be confused with the plots displayed in SCXA itself.

   :homepage: https://github.com/ebi-gene-expression-group/scxa-plots
   :license: Apache / Apache-2.0
   :recipe: /`scxa-plots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxa-plots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxa-plots/meta.yaml>`_

   


.. conda:package:: scxa-plots

   |downloads_scxa-plots| |docker_scxa-plots|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends on bioconductor-delayedarray: 
   :depends on bioconductor-dropletutils: 
   :depends on font-ttf-dejavu-sans-mono: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-matrix: 
   :depends on r-optparse: 

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

    pixi global install scxa-plots

to add into an existing workspace instead, run::

    pixi add scxa-plots

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scxa-plots

Alternatively, to install into a new environment, run::

    conda create -n envname scxa-plots

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scxa-plots:<tag>

(see `scxa-plots/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scxa-plots| image:: https://img.shields.io/conda/dn/bioconda/scxa-plots.svg?style=flat
   :target: https://anaconda.org/bioconda/scxa-plots
   :alt:   (downloads)
.. |docker_scxa-plots| image:: https://quay.io/repository/biocontainers/scxa-plots/status
   :target: https://quay.io/repository/biocontainers/scxa-plots
.. _`scxa-plots/tags`: https://quay.io/repository/biocontainers/scxa-plots?tab=tags


.. raw:: html

    <script>
        var package = "scxa-plots";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scxa-plots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scxa-plots/README.html