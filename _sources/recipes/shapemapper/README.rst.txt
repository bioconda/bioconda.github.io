:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapemapper'
.. highlight: bash

shapemapper
===========

.. conda:recipe:: shapemapper
   :replaces_section_title:
   :noindex:

   ShapeMapper converts raw sequencing files into mutational profiles\, creates SHAPE reactivity plots\, and provides extensive diagnostic information useful for experiment analysis and troubleshooting.

   :homepage: http://www.chem.unc.edu/rna/software.html
   :license: GPL
   :recipe: /`shapemapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapemapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapemapper/meta.yaml>`_

   


.. conda:package:: shapemapper

   |downloads_shapemapper| |docker_shapemapper|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends on bowtie2: 
   :depends on httplib2: 
   :depends on libgcc-ng: ``>=4.9``
   :depends on matplotlib: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on rnastructure: 

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

    pixi global install shapemapper

to add into an existing workspace instead, run::

    pixi add shapemapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shapemapper

Alternatively, to install into a new environment, run::

    conda create -n envname shapemapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shapemapper:<tag>

(see `shapemapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shapemapper| image:: https://img.shields.io/conda/dn/bioconda/shapemapper.svg?style=flat
   :target: https://anaconda.org/bioconda/shapemapper
   :alt:   (downloads)
.. |docker_shapemapper| image:: https://quay.io/repository/biocontainers/shapemapper/status
   :target: https://quay.io/repository/biocontainers/shapemapper
.. _`shapemapper/tags`: https://quay.io/repository/biocontainers/shapemapper?tab=tags


.. raw:: html

    <script>
        var package = "shapemapper";
        var versions = ["1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapemapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapemapper/README.html