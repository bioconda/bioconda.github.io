:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viral_usher'
.. highlight: bash

viral_usher
===========

.. conda:recipe:: viral_usher
   :replaces_section_title:
   :noindex:

   Easily configure and run a pipeline to build a tree of virus genomes using UShER

   :homepage: https://github.com/AngieHinrichs/viral_usher
   :license: MIT / MIT
   :recipe: /`viral_usher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral_usher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral_usher/meta.yaml>`_

   


.. conda:package:: viral_usher

   |downloads_viral_usher| |docker_viral_usher|

   :versions:
      
      

      ``0.10.2-0``,  ``0.10.1-0``

      

   
   :depends on biopython: 
   :depends on docker-py: 
   :depends on python: ``>=3.11``
   :depends on requests: 

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

    pixi global install viral_usher

to add into an existing workspace instead, run::

    pixi add viral_usher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install viral_usher

Alternatively, to install into a new environment, run::

    conda create -n envname viral_usher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/viral_usher:<tag>

(see `viral_usher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_viral_usher| image:: https://img.shields.io/conda/dn/bioconda/viral_usher.svg?style=flat
   :target: https://anaconda.org/bioconda/viral_usher
   :alt:   (downloads)
.. |docker_viral_usher| image:: https://quay.io/repository/biocontainers/viral_usher/status
   :target: https://quay.io/repository/biocontainers/viral_usher
.. _`viral_usher/tags`: https://quay.io/repository/biocontainers/viral_usher?tab=tags


.. raw:: html

    <script>
        var package = "viral_usher";
        var versions = ["0.10.2","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viral_usher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viral_usher/README.html