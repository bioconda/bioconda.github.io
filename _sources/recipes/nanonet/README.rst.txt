:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanonet'
.. highlight: bash

nanonet
=======

.. conda:recipe:: nanonet
   :replaces_section_title:
   :noindex:

   Nanonet provides recurrent neural network basecalling for Oxford Nanopore MinION data.

   :homepage: https://github.com/nanoporetech/nanonet
   :license: MPL-2.0
   :recipe: /`nanonet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanonet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanonet/meta.yaml>`_

   


.. conda:package:: nanonet

   |downloads_nanonet| |docker_nanonet|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on argh: 
   :depends on boost: ``1.60*``
   :depends on cython: 
   :depends on h5py: 
   :depends on hdf5: 
   :depends on libgcc: 
   :depends on myriad: ``>=0.1.2``
   :depends on numpy: 
   :depends on pathtools: ``>=0.1.1``
   :depends on python: ``2.7*``
   :depends on pyyaml: ``>=3.10``
   :depends on six: 
   :depends on watchdog: 

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

    pixi global install nanonet

to add into an existing workspace instead, run::

    pixi add nanonet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanonet

Alternatively, to install into a new environment, run::

    conda create -n envname nanonet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanonet:<tag>

(see `nanonet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanonet| image:: https://img.shields.io/conda/dn/bioconda/nanonet.svg?style=flat
   :target: https://anaconda.org/bioconda/nanonet
   :alt:   (downloads)
.. |docker_nanonet| image:: https://quay.io/repository/biocontainers/nanonet/status
   :target: https://quay.io/repository/biocontainers/nanonet
.. _`nanonet/tags`: https://quay.io/repository/biocontainers/nanonet?tab=tags


.. raw:: html

    <script>
        var package = "nanonet";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanonet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanonet/README.html