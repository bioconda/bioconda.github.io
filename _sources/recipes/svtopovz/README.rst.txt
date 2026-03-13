:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtopovz'
.. highlight: bash

svtopovz
========

.. conda:recipe:: svtopovz
   :replaces_section_title:
   :noindex:

   Complex structural variant visualization for HiFi sequencing data\: plotting tool.

   :homepage: https://github.com/PacificBiosciences/HiFi-SVTopo
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`svtopovz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtopovz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtopovz/meta.yaml>`_

   


.. conda:package:: svtopovz

   |downloads_svtopovz| |docker_svtopovz|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.1-0``

      

   
   :depends on jinja2: ``3.1.5``
   :depends on matplotlib-base: ``>=3.8.4``
   :depends on numpy: ``1.26.4``
   :depends on pytest: ``8.3.5``
   :depends on python: ``>=3.10``
   :depends on scikit-image: ``>=0.24.0``
   :depends on tqdm: ``4.67.1``

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

    pixi global install svtopovz

to add into an existing workspace instead, run::

    pixi add svtopovz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svtopovz

Alternatively, to install into a new environment, run::

    conda create -n envname svtopovz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svtopovz:<tag>

(see `svtopovz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svtopovz| image:: https://img.shields.io/conda/dn/bioconda/svtopovz.svg?style=flat
   :target: https://anaconda.org/bioconda/svtopovz
   :alt:   (downloads)
.. |docker_svtopovz| image:: https://quay.io/repository/biocontainers/svtopovz/status
   :target: https://quay.io/repository/biocontainers/svtopovz
.. _`svtopovz/tags`: https://quay.io/repository/biocontainers/svtopovz?tab=tags


.. raw:: html

    <script>
        var package = "svtopovz";
        var versions = ["0.3.0","0.2.0","0.1.3","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtopovz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtopovz/README.html