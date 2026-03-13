:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libcarna-python'
.. highlight: bash

libcarna-python
===============

.. conda:recipe:: libcarna-python
   :replaces_section_title:
   :noindex:

   Real\-time 3D visualization of biomedical data and beyond in Python

   :homepage: https://github.com/kostrykin/LibCarna-Python
   :documentation: https://libcarna.readthedocs.io
   
   :license: MIT
   :recipe: /`libcarna-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcarna-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcarna-python/meta.yaml>`_

   


.. conda:package:: libcarna-python

   |downloads_libcarna-python| |docker_libcarna-python|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends on ffmpeg: ``>=4.3.2``
   :depends on libcarna: ``3.4``
   :depends on libcarna: ``>=3.4.0,<3.5.0a0``
   :depends on libegl: ``>=1.7.0,<2.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgl: ``>=1.7.0,<2.0a0``
   :depends on libglu: ``>=9.0.3,<9.1.0a0``
   :depends on libopengl: ``>=1.7.0,<2.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on matplotlib-base: 
   :depends on numpngw: ``>=0.1.4,<0.2``
   :depends on numpy: ``<2.3``
   :depends on pooch: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-image: 
   :depends on scikit-video: ``1.1.*``
   :depends on scipy: 
   :depends on tifffile: 
   :depends on typing_extensions: 

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

    pixi global install libcarna-python

to add into an existing workspace instead, run::

    pixi add libcarna-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libcarna-python

Alternatively, to install into a new environment, run::

    conda create -n envname libcarna-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libcarna-python:<tag>

(see `libcarna-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libcarna-python| image:: https://img.shields.io/conda/dn/bioconda/libcarna-python.svg?style=flat
   :target: https://anaconda.org/bioconda/libcarna-python
   :alt:   (downloads)
.. |docker_libcarna-python| image:: https://quay.io/repository/biocontainers/libcarna-python/status
   :target: https://quay.io/repository/biocontainers/libcarna-python
.. _`libcarna-python/tags`: https://quay.io/repository/biocontainers/libcarna-python?tab=tags


.. raw:: html

    <script>
        var package = "libcarna-python";
        var versions = ["0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libcarna-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libcarna-python/README.html