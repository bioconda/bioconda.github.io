:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moni'
.. highlight: bash

moni
====

.. conda:recipe:: moni
   :replaces_section_title:
   :noindex:

   A Pangenomics Index for Finding MEMs

   :homepage: https://github.com/maxrossi91/moni
   :license: MIT / MIT
   :recipe: /`moni <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moni>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moni/meta.yaml>`_

   MONI \(Multi\) is a Pangenomics Index for Finding Maximal Exact Matches \(MEMs\).
   It uses the prefix\-free parsing of the text to build the Burrows\-Wheeler Transform \(BWT\) 
   of the reference genomes\, the suffix array \(SA\) samples at the beginning and at the end 
   of each run of the BWT\, and the threshold positions.



.. conda:package:: moni

   |downloads_moni| |docker_moni|

   :versions:
      
      

      ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends on libgcc: 
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on libstdcxx: 
   :depends on libstdcxx-ng: ``>=9.3.0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on zlib: 

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

    pixi global install moni

to add into an existing workspace instead, run::

    pixi add moni

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install moni

Alternatively, to install into a new environment, run::

    conda create -n envname moni

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/moni:<tag>

(see `moni/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_moni| image:: https://img.shields.io/conda/dn/bioconda/moni.svg?style=flat
   :target: https://anaconda.org/bioconda/moni
   :alt:   (downloads)
.. |docker_moni| image:: https://quay.io/repository/biocontainers/moni/status
   :target: https://quay.io/repository/biocontainers/moni
.. _`moni/tags`: https://quay.io/repository/biocontainers/moni?tab=tags


.. raw:: html

    <script>
        var package = "moni";
        var versions = ["0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moni/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moni/README.html