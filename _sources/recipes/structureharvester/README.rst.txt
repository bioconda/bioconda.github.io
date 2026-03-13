:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'structureharvester'
.. highlight: bash

structureharvester
==================

.. conda:recipe:: structureharvester
   :replaces_section_title:
   :noindex:

   structureHarvester.py is a Python script capable of extracting all the relevant data from STRUCTURE results files

   :homepage: http://alumni.soe.ucsc.edu/~dearl/software/structureHarvester/
   :license: MIT
   :recipe: /`structureharvester <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structureharvester>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structureharvester/meta.yaml>`_

   


.. conda:package:: structureharvester

   |downloads_structureharvester| |docker_structureharvester|

   :versions:
      
      

      ``0.6.94-3``,  ``0.6.94-2``,  ``0.6.94-1``,  ``0.6.94-0``

      

   
   :depends on python: ``<3``

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

    pixi global install structureharvester

to add into an existing workspace instead, run::

    pixi add structureharvester

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install structureharvester

Alternatively, to install into a new environment, run::

    conda create -n envname structureharvester

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/structureharvester:<tag>

(see `structureharvester/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_structureharvester| image:: https://img.shields.io/conda/dn/bioconda/structureharvester.svg?style=flat
   :target: https://anaconda.org/bioconda/structureharvester
   :alt:   (downloads)
.. |docker_structureharvester| image:: https://quay.io/repository/biocontainers/structureharvester/status
   :target: https://quay.io/repository/biocontainers/structureharvester
.. _`structureharvester/tags`: https://quay.io/repository/biocontainers/structureharvester?tab=tags


.. raw:: html

    <script>
        var package = "structureharvester";
        var versions = ["0.6.94","0.6.94","0.6.94","0.6.94"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/structureharvester/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/structureharvester/README.html