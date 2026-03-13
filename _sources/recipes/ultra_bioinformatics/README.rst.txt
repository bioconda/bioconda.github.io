:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultra_bioinformatics'
.. highlight: bash

ultra_bioinformatics
====================

.. conda:recipe:: ultra_bioinformatics
   :replaces_section_title:
   :noindex:

   Splice aligner of long transcriptomic reads to genome.

   :homepage: https://github.com/ksahlin/uLTRA
   :license: GPL3 / GNU GPLV3
   :recipe: /`ultra_bioinformatics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultra_bioinformatics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultra_bioinformatics/meta.yaml>`_

   


.. conda:package:: ultra_bioinformatics

   |downloads_ultra_bioinformatics| |docker_ultra_bioinformatics|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``,  ``0.0.4.2-0``,  ``0.0.4.1-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3.3-1``,  ``0.0.3.3-0``

      

   
   :depends on dill: 
   :depends on gffutils: 
   :depends on intervaltree: 
   :depends on minimap2: 
   :depends on mummer: 
   :depends on namfinder: 
   :depends on parasail-python: 
   :depends on pysam: 
   :depends on python: 
   :depends on python-edlib: 

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

    pixi global install ultra_bioinformatics

to add into an existing workspace instead, run::

    pixi add ultra_bioinformatics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ultra_bioinformatics

Alternatively, to install into a new environment, run::

    conda create -n envname ultra_bioinformatics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ultra_bioinformatics:<tag>

(see `ultra_bioinformatics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ultra_bioinformatics| image:: https://img.shields.io/conda/dn/bioconda/ultra_bioinformatics.svg?style=flat
   :target: https://anaconda.org/bioconda/ultra_bioinformatics
   :alt:   (downloads)
.. |docker_ultra_bioinformatics| image:: https://quay.io/repository/biocontainers/ultra_bioinformatics/status
   :target: https://quay.io/repository/biocontainers/ultra_bioinformatics
.. _`ultra_bioinformatics/tags`: https://quay.io/repository/biocontainers/ultra_bioinformatics?tab=tags


.. raw:: html

    <script>
        var package = "ultra_bioinformatics";
        var versions = ["0.1","0.1","0.0.4.2","0.0.4.1","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultra_bioinformatics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultra_bioinformatics/README.html