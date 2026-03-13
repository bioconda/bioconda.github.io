:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimodd'
.. highlight: bash

mimodd
======

.. conda:recipe:: mimodd
   :replaces_section_title:
   :noindex:

   Tools for Mutation Identification in Model Organism Genomes

   :homepage: http://sourceforge.net/projects/mimodd
   :license: GPL3
   :recipe: /`mimodd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimodd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimodd/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`mimodd_align`

   


.. conda:package:: mimodd

   |downloads_mimodd| |docker_mimodd|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7.3-0``

      

   
   :depends on libgcc: 
   :depends on python: ``3.5*``
   :depends on rpy2: 
   :depends on zlib: ``1.2.11*``

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

    pixi global install mimodd

to add into an existing workspace instead, run::

    pixi add mimodd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mimodd

Alternatively, to install into a new environment, run::

    conda create -n envname mimodd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mimodd:<tag>

(see `mimodd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mimodd| image:: https://img.shields.io/conda/dn/bioconda/mimodd.svg?style=flat
   :target: https://anaconda.org/bioconda/mimodd
   :alt:   (downloads)
.. |docker_mimodd| image:: https://quay.io/repository/biocontainers/mimodd/status
   :target: https://quay.io/repository/biocontainers/mimodd
.. _`mimodd/tags`: https://quay.io/repository/biocontainers/mimodd?tab=tags


.. raw:: html

    <script>
        var package = "mimodd";
        var versions = ["0.1.9","0.1.8","0.1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimodd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimodd/README.html