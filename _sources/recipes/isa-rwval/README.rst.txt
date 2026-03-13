:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isa-rwval'
.. highlight: bash

isa-rwval
=========

.. conda:recipe:: isa-rwval
   :replaces_section_title:
   :noindex:

   ISA metadata tracking tools

   :homepage: https://github.com/ISA-tools/isa-rwval
   :license: CPAL
   :recipe: /`isa-rwval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isa-rwval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isa-rwval/meta.yaml>`_

   


.. conda:package:: isa-rwval

   |downloads_isa-rwval| |docker_isa-rwval|

   :versions:
      
      

      ``0.10.10-0``,  ``0.10.9-0``

      

   
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
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

    pixi global install isa-rwval

to add into an existing workspace instead, run::

    pixi add isa-rwval

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isa-rwval

Alternatively, to install into a new environment, run::

    conda create -n envname isa-rwval

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isa-rwval:<tag>

(see `isa-rwval/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isa-rwval| image:: https://img.shields.io/conda/dn/bioconda/isa-rwval.svg?style=flat
   :target: https://anaconda.org/bioconda/isa-rwval
   :alt:   (downloads)
.. |docker_isa-rwval| image:: https://quay.io/repository/biocontainers/isa-rwval/status
   :target: https://quay.io/repository/biocontainers/isa-rwval
.. _`isa-rwval/tags`: https://quay.io/repository/biocontainers/isa-rwval?tab=tags


.. raw:: html

    <script>
        var package = "isa-rwval";
        var versions = ["0.10.10","0.10.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isa-rwval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isa-rwval/README.html