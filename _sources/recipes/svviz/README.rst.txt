:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svviz'
.. highlight: bash

svviz
=====

.. conda:recipe:: svviz
   :replaces_section_title:
   :noindex:

   A read visualizer for structural variants

   :homepage: https://github.com/svviz/svviz
   :license: MIT License
   :recipe: /`svviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svviz/meta.yaml>`_

   


.. conda:package:: svviz

   |downloads_svviz| |docker_svviz|

   :versions:
      
      

      ``1.6.2-6``,  ``1.6.2-5``,  ``1.6.2-4``,  ``1.6.2-3``,  ``1.6.2-2``,  ``1.6.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.0-0``

      

   
   :depends on flask: 
   :depends on joblib: 
   :depends on libgcc-ng: ``>=12``
   :depends on numpy: 
   :depends on pyfaidx: 
   :depends on pysam: ``>=0.7.8``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on requests: 

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

    pixi global install svviz

to add into an existing workspace instead, run::

    pixi add svviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svviz

Alternatively, to install into a new environment, run::

    conda create -n envname svviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svviz:<tag>

(see `svviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svviz| image:: https://img.shields.io/conda/dn/bioconda/svviz.svg?style=flat
   :target: https://anaconda.org/bioconda/svviz
   :alt:   (downloads)
.. |docker_svviz| image:: https://quay.io/repository/biocontainers/svviz/status
   :target: https://quay.io/repository/biocontainers/svviz
.. _`svviz/tags`: https://quay.io/repository/biocontainers/svviz?tab=tags


.. raw:: html

    <script>
        var package = "svviz";
        var versions = ["1.6.2","1.6.2","1.6.2","1.6.2","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svviz/README.html