:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-scatterregions'
.. highlight: bash

biopet-scatterregions
=====================

.. conda:recipe:: biopet-scatterregions
   :replaces_section_title:
   :noindex:

   This tool breaks a reference or bed file into smaller scatter regions of equal size.

   :homepage: https://github.com/biopet/scatterregions
   :license: MIT
   :recipe: /`biopet-scatterregions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-scatterregions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-scatterregions/meta.yaml>`_

   This tool breaks a reference or bed file into smaller scatter regions of equal size. This can be used for processing inside a pipeline.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/scatterregions



.. conda:package:: biopet-scatterregions

   |downloads_biopet-scatterregions| |docker_biopet-scatterregions|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on openjdk: ``>=8,<9``
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

    pixi global install biopet-scatterregions

to add into an existing workspace instead, run::

    pixi add biopet-scatterregions

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet-scatterregions

Alternatively, to install into a new environment, run::

    conda create -n envname biopet-scatterregions

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet-scatterregions:<tag>

(see `biopet-scatterregions/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet-scatterregions| image:: https://img.shields.io/conda/dn/bioconda/biopet-scatterregions.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-scatterregions
   :alt:   (downloads)
.. |docker_biopet-scatterregions| image:: https://quay.io/repository/biocontainers/biopet-scatterregions/status
   :target: https://quay.io/repository/biocontainers/biopet-scatterregions
.. _`biopet-scatterregions/tags`: https://quay.io/repository/biocontainers/biopet-scatterregions?tab=tags


.. raw:: html

    <script>
        var package = "biopet-scatterregions";
        var versions = ["0.2","0.2","0.1","0.1"];
    </script>





Notes
-----
biopet\-scatterregions is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-scatterregions\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-scatterregions \-Xms512m \-Xmx1g\'.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-scatterregions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-scatterregions/README.html