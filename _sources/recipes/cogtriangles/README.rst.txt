:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogtriangles'
.. highlight: bash

cogtriangles
============

.. conda:recipe:: cogtriangles
   :replaces_section_title:
   :noindex:

   Low\-polynomial algorithm for assembling clusters of orthologous groups from intergenomic symmetric best matches.

   :homepage: https://ftp.ncbi.nih.gov/pub/wolf/COGs/COGsoft
   :license: Public Domain
   :recipe: /`cogtriangles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogtriangles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogtriangles/meta.yaml>`_
   :links: biotools: :biotools:`cogtriangles`, doi: :doi:`10.1093/bioinformatics/btq229`

   


.. conda:package:: cogtriangles

   |downloads_cogtriangles| |docker_cogtriangles|

   :versions:
      
      

      ``2012.04-4``,  ``2012.04-3``,  ``2012.04-2``,  ``2012.04-1``,  ``2012.04-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install cogtriangles

to add into an existing workspace instead, run::

    pixi add cogtriangles

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cogtriangles

Alternatively, to install into a new environment, run::

    conda create -n envname cogtriangles

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cogtriangles:<tag>

(see `cogtriangles/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cogtriangles| image:: https://img.shields.io/conda/dn/bioconda/cogtriangles.svg?style=flat
   :target: https://anaconda.org/bioconda/cogtriangles
   :alt:   (downloads)
.. |docker_cogtriangles| image:: https://quay.io/repository/biocontainers/cogtriangles/status
   :target: https://quay.io/repository/biocontainers/cogtriangles
.. _`cogtriangles/tags`: https://quay.io/repository/biocontainers/cogtriangles?tab=tags


.. raw:: html

    <script>
        var package = "cogtriangles";
        var versions = ["2012.04","2012.04","2012.04","2012.04","2012.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogtriangles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogtriangles/README.html