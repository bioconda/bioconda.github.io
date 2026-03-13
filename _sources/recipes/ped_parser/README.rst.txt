:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ped_parser'
.. highlight: bash

ped_parser
==========

.. conda:recipe:: ped_parser
   :replaces_section_title:
   :noindex:

   A ped file parser.

   :homepage: https://github.com/moonso/ped_parser
   :license: BSD License
   :recipe: /`ped_parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ped_parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ped_parser/meta.yaml>`_

   


.. conda:package:: ped_parser

   |downloads_ped_parser| |docker_ped_parser|

   :versions:
      
      

      ``1.6.6-2``,  ``1.6.6-1``,  ``1.6.6-0``,  ``1.6.5-1``,  ``1.6.5-0``

      

   
   :depends on click: 
   :depends on pytest: 
   :depends on python: 

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

    pixi global install ped_parser

to add into an existing workspace instead, run::

    pixi add ped_parser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ped_parser

Alternatively, to install into a new environment, run::

    conda create -n envname ped_parser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ped_parser:<tag>

(see `ped_parser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ped_parser| image:: https://img.shields.io/conda/dn/bioconda/ped_parser.svg?style=flat
   :target: https://anaconda.org/bioconda/ped_parser
   :alt:   (downloads)
.. |docker_ped_parser| image:: https://quay.io/repository/biocontainers/ped_parser/status
   :target: https://quay.io/repository/biocontainers/ped_parser
.. _`ped_parser/tags`: https://quay.io/repository/biocontainers/ped_parser?tab=tags


.. raw:: html

    <script>
        var package = "ped_parser";
        var versions = ["1.6.6","1.6.6","1.6.6","1.6.5","1.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ped_parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ped_parser/README.html