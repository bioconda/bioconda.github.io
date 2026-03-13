:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igblast-parser'
.. highlight: bash

igblast-parser
==============

.. conda:recipe:: igblast-parser
   :replaces_section_title:
   :noindex:

   Parser of Igblast results into a csv file

   :homepage: https://github.com/aerijman/igblast-parser
   :license: MIT
   :recipe: /`igblast-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast-parser/meta.yaml>`_

   


.. conda:package:: igblast-parser

   |downloads_igblast-parser| |docker_igblast-parser|

   :versions:
      
      

      ``0.0.4-6``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install igblast-parser

to add into an existing workspace instead, run::

    pixi add igblast-parser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igblast-parser

Alternatively, to install into a new environment, run::

    conda create -n envname igblast-parser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igblast-parser:<tag>

(see `igblast-parser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igblast-parser| image:: https://img.shields.io/conda/dn/bioconda/igblast-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/igblast-parser
   :alt:   (downloads)
.. |docker_igblast-parser| image:: https://quay.io/repository/biocontainers/igblast-parser/status
   :target: https://quay.io/repository/biocontainers/igblast-parser
.. _`igblast-parser/tags`: https://quay.io/repository/biocontainers/igblast-parser?tab=tags


.. raw:: html

    <script>
        var package = "igblast-parser";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igblast-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igblast-parser/README.html