:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sbpipe'
.. highlight: bash

sbpipe
======

.. conda:recipe:: sbpipe
   :replaces_section_title:
   :noindex:

   SBpipe is a collection of pipelines for systems modelling of biological networks. It allows mathematical modellers to automatically repeat the tasks of model simulation and parameter estimation\, and extract robustness information from these repeat sequences in a solid and consistent manner\, facilitating model development and analysis. SBpipe can run models implemented in COPASI\, Python or coded in any other programming language using Python as a wrapper module. Pipelines can run on multicore computers\, Sun Grid Engine \(SGE\)\, Load Sharing Facility \(LSF\) clusters\, or via Snakemake.

   :homepage: http://sbpipe.readthedocs.io
   :license: MIT
   :recipe: /`sbpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbpipe/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12918-017-0423-3`

   


.. conda:package:: sbpipe

   |downloads_sbpipe| |docker_sbpipe|

   :versions:
      
      

      ``4.21.0-1``,  ``4.21.0-0``,  ``4.20.0-0``,  ``4.18.0-0``

      

   
   :depends on colorlog: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on r-sbpiper: ``1.8.*``

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

    pixi global install sbpipe

to add into an existing workspace instead, run::

    pixi add sbpipe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sbpipe

Alternatively, to install into a new environment, run::

    conda create -n envname sbpipe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sbpipe:<tag>

(see `sbpipe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sbpipe| image:: https://img.shields.io/conda/dn/bioconda/sbpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/sbpipe
   :alt:   (downloads)
.. |docker_sbpipe| image:: https://quay.io/repository/biocontainers/sbpipe/status
   :target: https://quay.io/repository/biocontainers/sbpipe
.. _`sbpipe/tags`: https://quay.io/repository/biocontainers/sbpipe?tab=tags


.. raw:: html

    <script>
        var package = "sbpipe";
        var versions = ["4.21.0","4.21.0","4.20.0","4.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbpipe/README.html