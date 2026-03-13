:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-seattleseqkit'
.. highlight: bash

biopet-seattleseqkit
====================

.. conda:recipe:: biopet-seattleseqkit
   :replaces_section_title:
   :noindex:

   \#\#\#\# Tool \- Filter  This tool can filter a seattle seq file.

   :homepage: https://github.com/biopet/seattleseqkit
   :license: MIT
   :recipe: /`biopet-seattleseqkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-seattleseqkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-seattleseqkit/meta.yaml>`_

   \#\#\#\# Tool \- Filter

   This tool can filter a seattle seq file.
   A given bed file will only select variants inside this regions.
   Filtering on specific fields is also possible.
       
           

   \#\#\#\# Tool \- MergeGenes

   This tool can merge gene counts from the filter step into 1 combined matrix. Genes that are not there will be filled with 0.
       
           

   \#\#\#\# Tool \- MultiFilter

   This tool can filter a seattle seq file.
   A given bed file will only select variants inside this regions.
   Filtering on specific fields is also possible.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/seattleseqkit


.. conda:package:: biopet-seattleseqkit

   |downloads_biopet-seattleseqkit| |docker_biopet-seattleseqkit|

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

    pixi global install biopet-seattleseqkit

to add into an existing workspace instead, run::

    pixi add biopet-seattleseqkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet-seattleseqkit

Alternatively, to install into a new environment, run::

    conda create -n envname biopet-seattleseqkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet-seattleseqkit:<tag>

(see `biopet-seattleseqkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet-seattleseqkit| image:: https://img.shields.io/conda/dn/bioconda/biopet-seattleseqkit.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-seattleseqkit
   :alt:   (downloads)
.. |docker_biopet-seattleseqkit| image:: https://quay.io/repository/biocontainers/biopet-seattleseqkit/status
   :target: https://quay.io/repository/biocontainers/biopet-seattleseqkit
.. _`biopet-seattleseqkit/tags`: https://quay.io/repository/biocontainers/biopet-seattleseqkit?tab=tags


.. raw:: html

    <script>
        var package = "biopet-seattleseqkit";
        var versions = ["0.2","0.2","0.1","0.1"];
    </script>





Notes
-----
biopet\-seattleseqkit is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-seattleseqkit\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-seattleseqkit \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-seattleseqkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-seattleseqkit/README.html