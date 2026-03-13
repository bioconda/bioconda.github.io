:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectrassembler'
.. highlight: bash

spectrassembler
===============

.. conda:recipe:: spectrassembler
   :replaces_section_title:
   :noindex:

   Tool \(experimental\) to compute layout from overlaps with spectral algorithm

   :homepage: https://github.com/antrec/spectrassembler
   :license: MIT
   :recipe: /`spectrassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrassembler/meta.yaml>`_

   


.. conda:package:: spectrassembler

   |downloads_spectrassembler| |docker_spectrassembler|

   :versions:
      
      

      ``0.0.1a1-4``,  ``0.0.1a1-3``,  ``0.0.1a1-2``,  ``0.0.1a1-1``,  ``0.0.1a1-0``

      

   
   :depends on biopython: 
   :depends on bwa: 
   :depends on minimap: 
   :depends on numpy: 
   :depends on poa: 
   :depends on python: ``<3``
   :depends on scipy: 

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

    pixi global install spectrassembler

to add into an existing workspace instead, run::

    pixi add spectrassembler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spectrassembler

Alternatively, to install into a new environment, run::

    conda create -n envname spectrassembler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spectrassembler:<tag>

(see `spectrassembler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spectrassembler| image:: https://img.shields.io/conda/dn/bioconda/spectrassembler.svg?style=flat
   :target: https://anaconda.org/bioconda/spectrassembler
   :alt:   (downloads)
.. |docker_spectrassembler| image:: https://quay.io/repository/biocontainers/spectrassembler/status
   :target: https://quay.io/repository/biocontainers/spectrassembler
.. _`spectrassembler/tags`: https://quay.io/repository/biocontainers/spectrassembler?tab=tags


.. raw:: html

    <script>
        var package = "spectrassembler";
        var versions = ["0.0.1a1","0.0.1a1","0.0.1a1","0.0.1a1","0.0.1a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectrassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectrassembler/README.html