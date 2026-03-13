:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomod'
.. highlight: bash

nanomod
=======

.. conda:recipe:: nanomod
   :replaces_section_title:
   :noindex:

   A computational method for Nanopore signal analysis and modification detection.

   :homepage: https://github.com/WGLab/NanoMod
   :license: GPL3
   :recipe: /`nanomod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomod/meta.yaml>`_

   


.. conda:package:: nanomod

   |downloads_nanomod| |docker_nanomod|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends on bwa: 
   :depends on h5py: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on python: ``2.7.*``
   :depends on r-base: ``>=3.4``
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-scales: 
   :depends on rpy2: 
   :depends on scipy: 

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

    pixi global install nanomod

to add into an existing workspace instead, run::

    pixi add nanomod

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanomod

Alternatively, to install into a new environment, run::

    conda create -n envname nanomod

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanomod:<tag>

(see `nanomod/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanomod| image:: https://img.shields.io/conda/dn/bioconda/nanomod.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomod
   :alt:   (downloads)
.. |docker_nanomod| image:: https://quay.io/repository/biocontainers/nanomod/status
   :target: https://quay.io/repository/biocontainers/nanomod
.. _`nanomod/tags`: https://quay.io/repository/biocontainers/nanomod?tab=tags


.. raw:: html

    <script>
        var package = "nanomod";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomod/README.html