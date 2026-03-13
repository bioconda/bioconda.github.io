:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coolpuppy'
.. highlight: bash

coolpuppy
=========

.. conda:recipe:: coolpuppy
   :replaces_section_title:
   :noindex:

   A versatile tool to perform pile\-up analysis on Hi\-C data in .cool format 

   :homepage: https://github.com/open2c/coolpuppy
   :documentation: https://coolpuppy.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`coolpuppy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolpuppy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolpuppy/meta.yaml>`_

   


.. conda:package:: coolpuppy

   |downloads_coolpuppy| |docker_coolpuppy|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on bioframe: ``>=0.3.3``
   :depends on cooler: ``>=0.8.5``
   :depends on cooltools: ``>=0.5.2``
   :depends on h5py: ``>=3.0``
   :depends on h5sparse: 
   :depends on m2r2: 
   :depends on matplotlib-base: 
   :depends on more-itertools: 
   :depends on multiprocessing-logging: 
   :depends on natsort: 
   :depends on numba: 
   :depends on numpy: ``>=1.16.5``
   :depends on pandas: 
   :depends on pytables: 
   :depends on python: 
   :depends on scipy: 
   :depends on seaborn: 

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

    pixi global install coolpuppy

to add into an existing workspace instead, run::

    pixi add coolpuppy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coolpuppy

Alternatively, to install into a new environment, run::

    conda create -n envname coolpuppy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coolpuppy:<tag>

(see `coolpuppy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coolpuppy| image:: https://img.shields.io/conda/dn/bioconda/coolpuppy.svg?style=flat
   :target: https://anaconda.org/bioconda/coolpuppy
   :alt:   (downloads)
.. |docker_coolpuppy| image:: https://quay.io/repository/biocontainers/coolpuppy/status
   :target: https://quay.io/repository/biocontainers/coolpuppy
.. _`coolpuppy/tags`: https://quay.io/repository/biocontainers/coolpuppy?tab=tags


.. raw:: html

    <script>
        var package = "coolpuppy";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coolpuppy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coolpuppy/README.html