:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'datma'
.. highlight: bash

datma
=====

.. conda:recipe:: datma
   :replaces_section_title:
   :noindex:

   DistributedAuTomaticMetagenomicAssembly andAnnotation framework

   :homepage: https://github.com/andvides/DATMA
   :license: GPL / GPL-3.0
   :recipe: /`datma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/datma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/datma/meta.yaml>`_

   


.. conda:package:: datma

   |downloads_datma| |docker_datma|

   :versions:
      
      

      ``2.0-0``,  ``1.0-0``

      

   
   :depends on blast: 
   :depends on bwa: 
   :depends on checkm-genome: 
   :depends on clame: ``1.*``
   :depends on flash2: 
   :depends on kaiju: 
   :depends on krona: 
   :depends on matplotlib-base: 
   :depends on megahit: 
   :depends on mergenotcombined: 
   :depends on numpy: 
   :depends on prodigal: 
   :depends on python: 
   :depends on quast: 
   :depends on rapifilt: 
   :depends on rdp_classifier: 
   :depends on samtools: 
   :depends on sdsl-lite: 
   :depends on selectfasta: 
   :depends on spades: 
   :depends on trimmomatic: 
   :depends on velvet: 

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

    pixi global install datma

to add into an existing workspace instead, run::

    pixi add datma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install datma

Alternatively, to install into a new environment, run::

    conda create -n envname datma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/datma:<tag>

(see `datma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_datma| image:: https://img.shields.io/conda/dn/bioconda/datma.svg?style=flat
   :target: https://anaconda.org/bioconda/datma
   :alt:   (downloads)
.. |docker_datma| image:: https://quay.io/repository/biocontainers/datma/status
   :target: https://quay.io/repository/biocontainers/datma
.. _`datma/tags`: https://quay.io/repository/biocontainers/datma?tab=tags


.. raw:: html

    <script>
        var package = "datma";
        var versions = ["2.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/datma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/datma/README.html