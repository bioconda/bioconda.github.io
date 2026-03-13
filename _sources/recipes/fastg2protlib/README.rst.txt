:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastg2protlib'
.. highlight: bash

fastg2protlib
=============

.. conda:recipe:: fastg2protlib
   :replaces_section_title:
   :noindex:

   FASTG sequences to a protein library.

   :homepage: https://github.com/galaxyproteomics/fastg2protlib
   :license: MIT
   :recipe: /`fastg2protlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastg2protlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastg2protlib/meta.yaml>`_

   


.. conda:package:: fastg2protlib

   |downloads_fastg2protlib| |docker_fastg2protlib|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on biopython: 
   :depends on lxml: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pyteomics: 
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

    pixi global install fastg2protlib

to add into an existing workspace instead, run::

    pixi add fastg2protlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastg2protlib

Alternatively, to install into a new environment, run::

    conda create -n envname fastg2protlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastg2protlib:<tag>

(see `fastg2protlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastg2protlib| image:: https://img.shields.io/conda/dn/bioconda/fastg2protlib.svg?style=flat
   :target: https://anaconda.org/bioconda/fastg2protlib
   :alt:   (downloads)
.. |docker_fastg2protlib| image:: https://quay.io/repository/biocontainers/fastg2protlib/status
   :target: https://quay.io/repository/biocontainers/fastg2protlib
.. _`fastg2protlib/tags`: https://quay.io/repository/biocontainers/fastg2protlib?tab=tags


.. raw:: html

    <script>
        var package = "fastg2protlib";
        var versions = ["1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastg2protlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastg2protlib/README.html