:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygresql'
.. highlight: bash

pygresql
========

.. conda:recipe:: pygresql
   :replaces_section_title:
   :noindex:

   Python PostgreSQL Interfaces

   :homepage: http://www.pygresql.org
   :license: Python Software Foundation License
   :recipe: /`pygresql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygresql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygresql/meta.yaml>`_

   


.. conda:package:: pygresql

   |downloads_pygresql| |docker_pygresql|

   :versions:
      
      

      ``5.0.1-1``,  ``5.0.1-0``

      

   
   :depends on postgresql: 
   :depends on python: ``>=2.7,<2.8.0a0``

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

    pixi global install pygresql

to add into an existing workspace instead, run::

    pixi add pygresql

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pygresql

Alternatively, to install into a new environment, run::

    conda create -n envname pygresql

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pygresql:<tag>

(see `pygresql/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pygresql| image:: https://img.shields.io/conda/dn/bioconda/pygresql.svg?style=flat
   :target: https://anaconda.org/bioconda/pygresql
   :alt:   (downloads)
.. |docker_pygresql| image:: https://quay.io/repository/biocontainers/pygresql/status
   :target: https://quay.io/repository/biocontainers/pygresql
.. _`pygresql/tags`: https://quay.io/repository/biocontainers/pygresql?tab=tags


.. raw:: html

    <script>
        var package = "pygresql";
        var versions = ["5.0.1","5.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygresql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygresql/README.html