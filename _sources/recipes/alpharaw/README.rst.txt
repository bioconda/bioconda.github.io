:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alpharaw'
.. highlight: bash

alpharaw
========

.. conda:recipe:: alpharaw
   :replaces_section_title:
   :noindex:

   An open\-source Python package to unify raw MS data access and storage

   :homepage: https://github.com/MannLabs/alpharaw
   :license: APACHE / Apache-2.0
   :recipe: /`alpharaw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alpharaw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alpharaw/meta.yaml>`_

   AlphaRaw provides unified access to raw mass spectrometry data from
   various instrument vendors\, converting them to a standardized HDF5
   format for downstream analysis in the AlphaPept ecosystem.



.. conda:package:: alpharaw

   |downloads_alpharaw| |docker_alpharaw|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends on alphabase: ``>=1.5.0``
   :depends on alphatims: 
   :depends on h5py: 
   :depends on lxml: 
   :depends on numba: 
   :depends on numpy: 
   :depends on owlready2: 
   :depends on pandas: 
   :depends on pyteomics: 
   :depends on python: ``>=3.8``
   :depends on pythonnet: 

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

    pixi global install alpharaw

to add into an existing workspace instead, run::

    pixi add alpharaw

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alpharaw

Alternatively, to install into a new environment, run::

    conda create -n envname alpharaw

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alpharaw:<tag>

(see `alpharaw/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alpharaw| image:: https://img.shields.io/conda/dn/bioconda/alpharaw.svg?style=flat
   :target: https://anaconda.org/bioconda/alpharaw
   :alt:   (downloads)
.. |docker_alpharaw| image:: https://quay.io/repository/biocontainers/alpharaw/status
   :target: https://quay.io/repository/biocontainers/alpharaw
.. _`alpharaw/tags`: https://quay.io/repository/biocontainers/alpharaw?tab=tags


.. raw:: html

    <script>
        var package = "alpharaw";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alpharaw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alpharaw/README.html