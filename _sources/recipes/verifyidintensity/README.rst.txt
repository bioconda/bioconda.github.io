:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verifyidintensity'
.. highlight: bash

verifyidintensity
=================

.. conda:recipe:: verifyidintensity
   :replaces_section_title:
   :noindex:

   verifyIDintensity detects and estimates sample contamination using intensity data from Illumina genotyping arrays.

   :homepage: https://genome.sph.umich.edu/wiki/VerifyIDintensity
   :license: GPL3
   :recipe: /`verifyidintensity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifyidintensity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifyidintensity/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.ajhg.2012.09.004`

   


.. conda:package:: verifyidintensity

   |downloads_verifyidintensity| |docker_verifyidintensity|

   :versions:
      
      

      ``0.0.1-6``,  ``0.0.1-5``,  ``0.0.1-4``,  ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on tclap: 
   :depends on zlib: 

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

    pixi global install verifyidintensity

to add into an existing workspace instead, run::

    pixi add verifyidintensity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install verifyidintensity

Alternatively, to install into a new environment, run::

    conda create -n envname verifyidintensity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/verifyidintensity:<tag>

(see `verifyidintensity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_verifyidintensity| image:: https://img.shields.io/conda/dn/bioconda/verifyidintensity.svg?style=flat
   :target: https://anaconda.org/bioconda/verifyidintensity
   :alt:   (downloads)
.. |docker_verifyidintensity| image:: https://quay.io/repository/biocontainers/verifyidintensity/status
   :target: https://quay.io/repository/biocontainers/verifyidintensity
.. _`verifyidintensity/tags`: https://quay.io/repository/biocontainers/verifyidintensity?tab=tags


.. raw:: html

    <script>
        var package = "verifyidintensity";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verifyidintensity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verifyidintensity/README.html