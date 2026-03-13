:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'themis'
.. highlight: bash

themis
======

.. conda:recipe:: themis
   :replaces_section_title:
   :noindex:

   Themis\: metagenomic profiler

   :homepage: https://github.com/xujialupaoli/Themis
   :license: GPL-3.0-or-later
   :recipe: /`themis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/themis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/themis/meta.yaml>`_

   


.. conda:package:: themis

   |downloads_themis| |docker_themis|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on coreutils: 
   :depends on curl: 
   :depends on diffutils: 
   :depends on fastp: 
   :depends on genome_updater: ``>=0.6.4``
   :depends on genome_updater: ``>=0.7.0,<0.8.0a0``
   :depends on grep: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on multitax: ``>=1.3.1``
   :depends on multitax: ``>=1.3.2,<2.0a0``
   :depends on pandas: ``>=1.2.0``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python_abi: ``3.14.* *_cp314``
   :depends on raptor: ``3.*``
   :depends on raptor: ``>=3.0.1,<4.0a0``
   :depends on seqan3: ``>=3.3.0,<4.0a0``
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

    pixi global install themis

to add into an existing workspace instead, run::

    pixi add themis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install themis

Alternatively, to install into a new environment, run::

    conda create -n envname themis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/themis:<tag>

(see `themis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_themis| image:: https://img.shields.io/conda/dn/bioconda/themis.svg?style=flat
   :target: https://anaconda.org/bioconda/themis
   :alt:   (downloads)
.. |docker_themis| image:: https://quay.io/repository/biocontainers/themis/status
   :target: https://quay.io/repository/biocontainers/themis
.. _`themis/tags`: https://quay.io/repository/biocontainers/themis?tab=tags


.. raw:: html

    <script>
        var package = "themis";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/themis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/themis/README.html