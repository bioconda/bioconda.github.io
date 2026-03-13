:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrnasim-toolz'
.. highlight: bash

scrnasim-toolz
==============

.. conda:recipe:: scrnasim-toolz
   :replaces_section_title:
   :noindex:

   Tools used by scRNAsim workflow.

   :homepage: https://github.com/zavolanlab/scRNAsim-toolz
   :license: MIT / MIT
   :recipe: /`scrnasim-toolz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrnasim-toolz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrnasim-toolz/meta.yaml>`_

   


.. conda:package:: scrnasim-toolz

   |downloads_scrnasim-toolz| |docker_scrnasim-toolz|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on gtfparse: 
   :depends on importlib-metadata: 
   :depends on numpy: ``>=1.23.3``
   :depends on packaging: 
   :depends on pandas: ``>=1.4.4``
   :depends on polars: ``0.16.17``
   :depends on pyarrow: 
   :depends on python: ``<=3.10``

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

    pixi global install scrnasim-toolz

to add into an existing workspace instead, run::

    pixi add scrnasim-toolz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scrnasim-toolz

Alternatively, to install into a new environment, run::

    conda create -n envname scrnasim-toolz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scrnasim-toolz:<tag>

(see `scrnasim-toolz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scrnasim-toolz| image:: https://img.shields.io/conda/dn/bioconda/scrnasim-toolz.svg?style=flat
   :target: https://anaconda.org/bioconda/scrnasim-toolz
   :alt:   (downloads)
.. |docker_scrnasim-toolz| image:: https://quay.io/repository/biocontainers/scrnasim-toolz/status
   :target: https://quay.io/repository/biocontainers/scrnasim-toolz
.. _`scrnasim-toolz/tags`: https://quay.io/repository/biocontainers/scrnasim-toolz?tab=tags


.. raw:: html

    <script>
        var package = "scrnasim-toolz";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrnasim-toolz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrnasim-toolz/README.html