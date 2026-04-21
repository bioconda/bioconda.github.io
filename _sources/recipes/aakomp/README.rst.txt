:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aakomp'
.. highlight: bash

aakomp
======

.. conda:recipe:: aakomp
   :replaces_section_title:
   :noindex:

   amino acid k\-mer\-based genome completeness assessment

   :homepage: https://github.com/bcgsc/aakomp
   :license: GPL-3.0
   :recipe: /`aakomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aakomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aakomp/meta.yaml>`_

   


.. conda:package:: aakomp

   |downloads_aakomp| |docker_aakomp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on boost-cpp: 
   :depends on btllib: ``>=1.7.3,<2.0a0``
   :depends on gperftools: 
   :depends on hmmer: ``3.1.*``
   :depends on libcxx: ``>=19``
   :depends on libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends on libsequence: ``>=1.9.8,<1.10.0a0``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on llvm-openmp: ``>=19.1.7``
   :depends on mamba: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cairo: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-pracma: 
   :depends on r-readr: 
   :depends on sdsl-lite: 
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

    pixi global install aakomp

to add into an existing workspace instead, run::

    pixi add aakomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aakomp

Alternatively, to install into a new environment, run::

    conda create -n envname aakomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aakomp:<tag>

(see `aakomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aakomp| image:: https://img.shields.io/conda/dn/bioconda/aakomp.svg?style=flat
   :target: https://anaconda.org/bioconda/aakomp
   :alt:   (downloads)
.. |docker_aakomp| image:: https://quay.io/repository/biocontainers/aakomp/status
   :target: https://quay.io/repository/biocontainers/aakomp
.. _`aakomp/tags`: https://quay.io/repository/biocontainers/aakomp?tab=tags


.. raw:: html

    <script>
        var package = "aakomp";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aakomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aakomp/README.html