:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pargenes'
.. highlight: bash

pargenes
========

.. conda:recipe:: pargenes
   :replaces_section_title:
   :noindex:

   A massively parallel tool for model selection and tree inference on thousands of genes

   :homepage: https://github.com/BenoitMorel/ParGenes
   :license: GNU General Public License v3.
   :recipe: /`pargenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pargenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pargenes/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.02.28.969980`

   


.. conda:package:: pargenes

   |downloads_pargenes| |docker_pargenes|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``
   :depends on openjdk: 
   :depends on openmpi: ``>=4.0.5,<4.1.0a0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``

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

    pixi global install pargenes

to add into an existing workspace instead, run::

    pixi add pargenes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pargenes

Alternatively, to install into a new environment, run::

    conda create -n envname pargenes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pargenes:<tag>

(see `pargenes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pargenes| image:: https://img.shields.io/conda/dn/bioconda/pargenes.svg?style=flat
   :target: https://anaconda.org/bioconda/pargenes
   :alt:   (downloads)
.. |docker_pargenes| image:: https://quay.io/repository/biocontainers/pargenes/status
   :target: https://quay.io/repository/biocontainers/pargenes
.. _`pargenes/tags`: https://quay.io/repository/biocontainers/pargenes?tab=tags


.. raw:: html

    <script>
        var package = "pargenes";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pargenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pargenes/README.html