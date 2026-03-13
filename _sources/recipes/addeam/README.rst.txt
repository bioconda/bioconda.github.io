:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'addeam'
.. highlight: bash

addeam
======

.. conda:recipe:: addeam
   :replaces_section_title:
   :noindex:

   A Fast and Scalable Tool for Estimating and Clustering Reference\-Level Damage Profiles.

   :homepage: https://github.com/LouisPwr/AdDeam
   :license: GPL-3.0-or-later
   :recipe: /`addeam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/addeam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/addeam/meta.yaml>`_
   :links: biotools: :biotools:`addeam`

   


.. conda:package:: addeam

   |downloads_addeam| |docker_addeam|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bottleneck: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on curl: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.22,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=2``
   :depends on opencv: 
   :depends on pandas: 
   :depends on pypdf2: 
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on samtools: ``>=1.22,<2.0a0``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on xz: 
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

    pixi global install addeam

to add into an existing workspace instead, run::

    pixi add addeam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install addeam

Alternatively, to install into a new environment, run::

    conda create -n envname addeam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/addeam:<tag>

(see `addeam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_addeam| image:: https://img.shields.io/conda/dn/bioconda/addeam.svg?style=flat
   :target: https://anaconda.org/bioconda/addeam
   :alt:   (downloads)
.. |docker_addeam| image:: https://quay.io/repository/biocontainers/addeam/status
   :target: https://quay.io/repository/biocontainers/addeam
.. _`addeam/tags`: https://quay.io/repository/biocontainers/addeam?tab=tags


.. raw:: html

    <script>
        var package = "addeam";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/addeam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/addeam/README.html