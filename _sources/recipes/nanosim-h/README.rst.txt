:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosim-h'
.. highlight: bash

nanosim-h
=========

.. conda:recipe:: nanosim-h
   :replaces_section_title:
   :noindex:

   NanoSim\-H is a simulator of Oxford Nanopore reads that captures the technology\-specific features of ONT data\, and allows for adjustments upon improvement of Nanopore sequencing technology.

   :homepage: https://github.com/karel-brinda/NanoSim-H
   :license: GPLv3
   :recipe: /`nanosim-h <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim-h>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim-h/meta.yaml>`_

   


.. conda:package:: nanosim-h

   |downloads_nanosim-h| |docker_nanosim-h|

   :versions:
      
      

      ``1.1.0.4-2``,  ``1.1.0.4-1``,  ``1.1.0.4-0``,  ``1.1.0.3-3``,  ``1.1.0.3-0``,  ``1.1.0.2-1``

      

   
   :depends on last: 
   :depends on numpy: 
   :depends on progressbar2: 
   :depends on python: 
   :depends on r-base: ``>=4.0,<4.1.0a0``

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

    pixi global install nanosim-h

to add into an existing workspace instead, run::

    pixi add nanosim-h

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanosim-h

Alternatively, to install into a new environment, run::

    conda create -n envname nanosim-h

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanosim-h:<tag>

(see `nanosim-h/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanosim-h| image:: https://img.shields.io/conda/dn/bioconda/nanosim-h.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosim-h
   :alt:   (downloads)
.. |docker_nanosim-h| image:: https://quay.io/repository/biocontainers/nanosim-h/status
   :target: https://quay.io/repository/biocontainers/nanosim-h
.. _`nanosim-h/tags`: https://quay.io/repository/biocontainers/nanosim-h?tab=tags


.. raw:: html

    <script>
        var package = "nanosim-h";
        var versions = ["1.1.0.4","1.1.0.4","1.1.0.4","1.1.0.3","1.1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosim-h/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosim-h/README.html