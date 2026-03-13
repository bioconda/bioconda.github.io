:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepgenome'
.. highlight: bash

pepgenome
=========

.. conda:recipe:: pepgenome
   :replaces_section_title:
   :noindex:

   A java tool to map peptide and peptidoform evideces to ENSEMBL Genome Coordinates

   :homepage: https://github.com/bigbio/pgatk/
   :license: Apache / Apache-2.0
   :recipe: /`pepgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepgenome/meta.yaml>`_

   


.. conda:package:: pepgenome

   |downloads_pepgenome| |docker_pepgenome|

   :versions:
      
      

      ``1.1.beta-1``,  ``1.1.beta-0``,  ``1.0.beta-0``

      

   
   :depends on openjdk: ``>=6``
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

    pixi global install pepgenome

to add into an existing workspace instead, run::

    pixi add pepgenome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pepgenome

Alternatively, to install into a new environment, run::

    conda create -n envname pepgenome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pepgenome:<tag>

(see `pepgenome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pepgenome| image:: https://img.shields.io/conda/dn/bioconda/pepgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/pepgenome
   :alt:   (downloads)
.. |docker_pepgenome| image:: https://quay.io/repository/biocontainers/pepgenome/status
   :target: https://quay.io/repository/biocontainers/pepgenome
.. _`pepgenome/tags`: https://quay.io/repository/biocontainers/pepgenome?tab=tags


.. raw:: html

    <script>
        var package = "pepgenome";
        var versions = ["1.1.beta","1.1.beta","1.0.beta"];
    </script>





Notes
-----
PepGenome is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"PepGenome \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepgenome/README.html