:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_orfs'
.. highlight: bash

get_orfs
========

.. conda:recipe:: get_orfs
   :replaces_section_title:
   :noindex:

   Fast extraction of ORFs in all possible translation tables

   :homepage: https://github.com/linsalrob/get_orfs
   :license: MIT / MIT
   :recipe: /`get_orfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_orfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_orfs/meta.yaml>`_

   


.. conda:package:: get_orfs

   |downloads_get_orfs| |docker_get_orfs|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pthread-stubs: 
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

    pixi global install get_orfs

to add into an existing workspace instead, run::

    pixi add get_orfs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install get_orfs

Alternatively, to install into a new environment, run::

    conda create -n envname get_orfs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/get_orfs:<tag>

(see `get_orfs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_get_orfs| image:: https://img.shields.io/conda/dn/bioconda/get_orfs.svg?style=flat
   :target: https://anaconda.org/bioconda/get_orfs
   :alt:   (downloads)
.. |docker_get_orfs| image:: https://quay.io/repository/biocontainers/get_orfs/status
   :target: https://quay.io/repository/biocontainers/get_orfs
.. _`get_orfs/tags`: https://quay.io/repository/biocontainers/get_orfs?tab=tags


.. raw:: html

    <script>
        var package = "get_orfs";
        var versions = ["1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_orfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_orfs/README.html