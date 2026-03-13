:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mypmfs_py'
.. highlight: bash

mypmfs_py
=========

.. conda:recipe:: mypmfs_py
   :replaces_section_title:
   :noindex:

   Python package for mypmfs training \(includes batch download from PDB\).

   :homepage: https://github.com/bibip-impmc/mypmfs
   :license: MIT / MIT
   :recipe: /`mypmfs_py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mypmfs_py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mypmfs_py/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.biochi.2018.05.013`

   


.. conda:package:: mypmfs_py

   |downloads_mypmfs_py| |docker_mypmfs_py|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``

      

   
   :depends on libstdcxx-ng: 
   :depends on python: ``>=3.6``

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

    pixi global install mypmfs_py

to add into an existing workspace instead, run::

    pixi add mypmfs_py

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mypmfs_py

Alternatively, to install into a new environment, run::

    conda create -n envname mypmfs_py

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mypmfs_py:<tag>

(see `mypmfs_py/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mypmfs_py| image:: https://img.shields.io/conda/dn/bioconda/mypmfs_py.svg?style=flat
   :target: https://anaconda.org/bioconda/mypmfs_py
   :alt:   (downloads)
.. |docker_mypmfs_py| image:: https://quay.io/repository/biocontainers/mypmfs_py/status
   :target: https://quay.io/repository/biocontainers/mypmfs_py
.. _`mypmfs_py/tags`: https://quay.io/repository/biocontainers/mypmfs_py?tab=tags


.. raw:: html

    <script>
        var package = "mypmfs_py";
        var versions = ["0.1.8","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mypmfs_py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mypmfs_py/README.html