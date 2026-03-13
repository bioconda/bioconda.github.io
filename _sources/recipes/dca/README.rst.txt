:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dca'
.. highlight: bash

dca
===

.. conda:recipe:: dca
   :replaces_section_title:
   :noindex:

   Count autoencoder for scRNA\-seq denoising

   :homepage: https://github.com/theislab/dca
   :license: APACHE / Apache Software
   :recipe: /`dca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dca/meta.yaml>`_
   :links: doi: :doi:`10.1101/300681`

   


.. conda:package:: dca

   |downloads_dca| |docker_dca|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends on h5py: 
   :depends on keras: ``>=2.0.8``
   :depends on kopt: 
   :depends on numpy: ``>=1.7``
   :depends on pandas: 
   :depends on python: ``>=3.6``
   :depends on scanpy: 
   :depends on scikit-learn: 
   :depends on six: ``>=1.10.0``

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

    pixi global install dca

to add into an existing workspace instead, run::

    pixi add dca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dca

Alternatively, to install into a new environment, run::

    conda create -n envname dca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dca:<tag>

(see `dca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dca| image:: https://img.shields.io/conda/dn/bioconda/dca.svg?style=flat
   :target: https://anaconda.org/bioconda/dca
   :alt:   (downloads)
.. |docker_dca| image:: https://quay.io/repository/biocontainers/dca/status
   :target: https://quay.io/repository/biocontainers/dca
.. _`dca/tags`: https://quay.io/repository/biocontainers/dca?tab=tags


.. raw:: html

    <script>
        var package = "dca";
        var versions = ["0.3.4","0.3.3","0.3.2","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dca/README.html