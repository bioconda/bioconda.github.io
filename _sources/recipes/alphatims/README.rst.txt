:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alphatims'
.. highlight: bash

alphatims
=========

.. conda:recipe:: alphatims
   :replaces_section_title:
   :noindex:

   A Python package for indexing Bruker timsTOF raw data

   :homepage: https://github.com/MannLabs/alphatims
   :documentation: https://alphatims.readthedocs.io/en/latest/
   
   :license: APACHE / Apache-2.0
   :recipe: /`alphatims <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphatims>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphatims/meta.yaml>`_

   AlphaTims provides fast indexing and slicing of Bruker timsTOF raw
   data for mass spectrometry\-based proteomics.



.. conda:package:: alphatims

   |downloads_alphatims| |docker_alphatims|

   :versions:
      
      

      ``1.0.10-0``,  ``1.0.9-0``

      

   
   :depends on click: 
   :depends on h5py: 
   :depends on numba: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on python: ``>=3.8``
   :depends on pyzstd: 
   :depends on tqdm: 

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

    pixi global install alphatims

to add into an existing workspace instead, run::

    pixi add alphatims

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alphatims

Alternatively, to install into a new environment, run::

    conda create -n envname alphatims

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alphatims:<tag>

(see `alphatims/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alphatims| image:: https://img.shields.io/conda/dn/bioconda/alphatims.svg?style=flat
   :target: https://anaconda.org/bioconda/alphatims
   :alt:   (downloads)
.. |docker_alphatims| image:: https://quay.io/repository/biocontainers/alphatims/status
   :target: https://quay.io/repository/biocontainers/alphatims
.. _`alphatims/tags`: https://quay.io/repository/biocontainers/alphatims?tab=tags


.. raw:: html

    <script>
        var package = "alphatims";
        var versions = ["1.0.10","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphatims/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphatims/README.html