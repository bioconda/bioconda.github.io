:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploconduct'
.. highlight: bash

haploconduct
============

.. conda:recipe:: haploconduct
   :replaces_section_title:
   :noindex:

   HaploConduct is a package designed for reconstruction of individual haplotypes from next generation sequencing data\, in particular Illumina. It provides two methods\, SAVAGE and POLYTE\, which can be run through the haploconduct wrapper.

   :homepage: https://github.com/HaploConduct/HaploConduct
   :license: GPL3
   :recipe: /`haploconduct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploconduct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploconduct/meta.yaml>`_

   


.. conda:package:: haploconduct

   |downloads_haploconduct| |docker_haploconduct|

   :versions:
      
      

      ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends on boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends on bwa: 
   :depends on kallisto: ``>=0.43.0``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on rust-overlaps: 
   :depends on samtools: ``>=1.4``
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

    pixi global install haploconduct

to add into an existing workspace instead, run::

    pixi add haploconduct

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haploconduct

Alternatively, to install into a new environment, run::

    conda create -n envname haploconduct

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haploconduct:<tag>

(see `haploconduct/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haploconduct| image:: https://img.shields.io/conda/dn/bioconda/haploconduct.svg?style=flat
   :target: https://anaconda.org/bioconda/haploconduct
   :alt:   (downloads)
.. |docker_haploconduct| image:: https://quay.io/repository/biocontainers/haploconduct/status
   :target: https://quay.io/repository/biocontainers/haploconduct
.. _`haploconduct/tags`: https://quay.io/repository/biocontainers/haploconduct?tab=tags


.. raw:: html

    <script>
        var package = "haploconduct";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploconduct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploconduct/README.html