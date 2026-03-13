:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diphase'
.. highlight: bash

diphase
=======

.. conda:recipe:: diphase
   :replaces_section_title:
   :noindex:

   A diploid genome phasing tool

   :homepage: https://github.com/zhangjuncsu/Diphase
   :license: MIT
   :recipe: /`diphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diphase/meta.yaml>`_

   


.. conda:package:: diphase

   |downloads_diphase| |docker_diphase|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bwa: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=7.87.0,<8.0a0``
   :depends on libdeflate: ``>=1.20,<1.21.0a0``
   :depends on libgcc: ``>=12``
   :depends on libstdcxx: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on openssl: ``>=1.1.1w,<1.1.2a``
   :depends on python: ``3.9.0.*``
   :depends on samtools: 
   :depends on xz: ``>=5.2.6,<6.0a0``
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

    pixi global install diphase

to add into an existing workspace instead, run::

    pixi add diphase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install diphase

Alternatively, to install into a new environment, run::

    conda create -n envname diphase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/diphase:<tag>

(see `diphase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_diphase| image:: https://img.shields.io/conda/dn/bioconda/diphase.svg?style=flat
   :target: https://anaconda.org/bioconda/diphase
   :alt:   (downloads)
.. |docker_diphase| image:: https://quay.io/repository/biocontainers/diphase/status
   :target: https://quay.io/repository/biocontainers/diphase
.. _`diphase/tags`: https://quay.io/repository/biocontainers/diphase?tab=tags


.. raw:: html

    <script>
        var package = "diphase";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diphase/README.html