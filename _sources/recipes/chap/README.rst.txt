:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chap'
.. highlight: bash

chap
====

.. conda:recipe:: chap
   :replaces_section_title:
   :noindex:

   CHAP is a tool for the functional annotation of ion channel structures

   :homepage: https://github.com/channotation/chap
   :license: MIT
   :recipe: /`chap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chap/meta.yaml>`_

   


.. conda:package:: chap

   |downloads_chap| |docker_chap|

   :versions:
      
      

      ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``

      

   
   :depends on boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends on gromacs: ``2018.6.*``
   :depends on intel-compute-runtime: 
   :depends on libcblas: ``3.8.0 8_*_netlib``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on liblapacke: ``3.8.0 8_*_netlib``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on rapidjson: 

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

    pixi global install chap

to add into an existing workspace instead, run::

    pixi add chap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chap

Alternatively, to install into a new environment, run::

    conda create -n envname chap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chap:<tag>

(see `chap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chap| image:: https://img.shields.io/conda/dn/bioconda/chap.svg?style=flat
   :target: https://anaconda.org/bioconda/chap
   :alt:   (downloads)
.. |docker_chap| image:: https://quay.io/repository/biocontainers/chap/status
   :target: https://quay.io/repository/biocontainers/chap
.. _`chap/tags`: https://quay.io/repository/biocontainers/chap?tab=tags


.. raw:: html

    <script>
        var package = "chap";
        var versions = ["0.9.1","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chap/README.html