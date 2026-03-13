:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fec'
.. highlight: bash

fec
===

.. conda:recipe:: fec
   :replaces_section_title:
   :noindex:

   An error correction tool

   :homepage: https://github.com/zhangjuncsu/Fec
   :license: MIT
   :recipe: /`fec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fec/meta.yaml>`_

   


.. conda:package:: fec

   |downloads_fec| |docker_fec|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx: 
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on minimap2: ``>=2.17``
   :depends on python: ``>=3.6``
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

    pixi global install fec

to add into an existing workspace instead, run::

    pixi add fec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fec

Alternatively, to install into a new environment, run::

    conda create -n envname fec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fec:<tag>

(see `fec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fec| image:: https://img.shields.io/conda/dn/bioconda/fec.svg?style=flat
   :target: https://anaconda.org/bioconda/fec
   :alt:   (downloads)
.. |docker_fec| image:: https://quay.io/repository/biocontainers/fec/status
   :target: https://quay.io/repository/biocontainers/fec
.. _`fec/tags`: https://quay.io/repository/biocontainers/fec?tab=tags


.. raw:: html

    <script>
        var package = "fec";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fec/README.html