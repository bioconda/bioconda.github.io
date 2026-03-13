:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anadama2'
.. highlight: bash

anadama2
========

.. conda:recipe:: anadama2
   :replaces_section_title:
   :noindex:

   AnADAMA2\: Another Automated Data Analysis Management Application 2

   :homepage: http://huttenhower.sph.harvard.edu/anadama2
   :license: MIT / MIT
   :recipe: /`anadama2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anadama2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anadama2/meta.yaml>`_

   AnADAMA2 is the next generation of AnADAMA. AnADAMA is a tool to create reproducible workflows and execute them efficiently. Tasks can be run locally or in a grid computing environment to increase efficiency. Essential information from all tasks is recorded\, using the default logger and command line reporters\, to ensure reproducibility. A auto\-doc feature allows for workflows to generate documentation automatically to further ensure reproducibility by capturing the latest essential workflow information. AnADAMA2 was architected to be modular allowing users to customize the application by subclassing the base grid meta\-schedulers\, reporters\, and tracked objects \(ie files\, executables\, etc\).


.. conda:package:: anadama2

   |downloads_anadama2| |docker_anadama2|

   :versions:
      
      

      ``0.10.0-0``,  ``0.8.0-0``,  ``0.7.5-0``

      

   
   :depends on cloudpickle: 
   :depends on markdown: 
   :depends on networkx: 
   :depends on pweave: 
   :depends on python: ``>=3``
   :depends on python-leveldb: 
   :depends on six: 

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

    pixi global install anadama2

to add into an existing workspace instead, run::

    pixi add anadama2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install anadama2

Alternatively, to install into a new environment, run::

    conda create -n envname anadama2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/anadama2:<tag>

(see `anadama2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_anadama2| image:: https://img.shields.io/conda/dn/bioconda/anadama2.svg?style=flat
   :target: https://anaconda.org/bioconda/anadama2
   :alt:   (downloads)
.. |docker_anadama2| image:: https://quay.io/repository/biocontainers/anadama2/status
   :target: https://quay.io/repository/biocontainers/anadama2
.. _`anadama2/tags`: https://quay.io/repository/biocontainers/anadama2?tab=tags


.. raw:: html

    <script>
        var package = "anadama2";
        var versions = ["0.10.0","0.8.0","0.7.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anadama2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anadama2/README.html