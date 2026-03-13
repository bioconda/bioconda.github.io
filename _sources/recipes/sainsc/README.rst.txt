:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sainsc'
.. highlight: bash

sainsc
======

.. conda:recipe:: sainsc
   :replaces_section_title:
   :noindex:

   Segmentation\-free Analysis of In Situ Capture data.

   :homepage: https://github.com/HiDiHlabs/sainsc
   :documentation: https://sainsc.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`sainsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sainsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sainsc/meta.yaml>`_

   


.. conda:package:: sainsc

   |downloads_sainsc| |docker_sainsc|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on anndata: ``>=0.9``
   :depends on matplotlib-base: 
   :depends on matplotlib-scalebar: 
   :depends on numba: ``>=0.44``
   :depends on numpy: ``>=1.21``
   :depends on pandas: 
   :depends on polars: ``>=1``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-image: ``>=0.18``
   :depends on scipy: ``>=1.9``
   :depends on seaborn-base: ``>=0.11``
   :depends on typing-extensions: ``>=4``

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

    pixi global install sainsc

to add into an existing workspace instead, run::

    pixi add sainsc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sainsc

Alternatively, to install into a new environment, run::

    conda create -n envname sainsc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sainsc:<tag>

(see `sainsc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sainsc| image:: https://img.shields.io/conda/dn/bioconda/sainsc.svg?style=flat
   :target: https://anaconda.org/bioconda/sainsc
   :alt:   (downloads)
.. |docker_sainsc| image:: https://quay.io/repository/biocontainers/sainsc/status
   :target: https://quay.io/repository/biocontainers/sainsc
.. _`sainsc/tags`: https://quay.io/repository/biocontainers/sainsc?tab=tags


.. raw:: html

    <script>
        var package = "sainsc";
        var versions = ["0.3.1","0.3.0","0.2.1","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sainsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sainsc/README.html