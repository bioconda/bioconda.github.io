:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shasta'
.. highlight: bash

shasta
======

.. conda:recipe:: shasta
   :replaces_section_title:
   :noindex:

   De novo assembly from Oxford Nanopore reads.

   :homepage: https://github.com/paoloshasta/shasta
   :documentation: https://paoloshasta.github.io/shasta/
   
   :license: MIT / MIT
   :recipe: /`shasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shasta/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1038/s41587-020-0503-6`

   


.. conda:package:: shasta

   |downloads_shasta| |docker_shasta|

   :versions:
      
      

      ``0.14.0-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.1-2``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.8.0-0``,  ``0.6.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libpng: 
   :depends on libstdcxx: ``>=13``
   :depends on python: 

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

    pixi global install shasta

to add into an existing workspace instead, run::

    pixi add shasta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shasta

Alternatively, to install into a new environment, run::

    conda create -n envname shasta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shasta:<tag>

(see `shasta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shasta| image:: https://img.shields.io/conda/dn/bioconda/shasta.svg?style=flat
   :target: https://anaconda.org/bioconda/shasta
   :alt:   (downloads)
.. |docker_shasta| image:: https://quay.io/repository/biocontainers/shasta/status
   :target: https://quay.io/repository/biocontainers/shasta
.. _`shasta/tags`: https://quay.io/repository/biocontainers/shasta?tab=tags


.. raw:: html

    <script>
        var package = "shasta";
        var versions = ["0.14.0","0.13.0","0.13.0","0.12.0","0.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shasta/README.html