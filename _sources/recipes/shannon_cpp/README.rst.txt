:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shannon_cpp'
.. highlight: bash

shannon_cpp
===========

.. conda:recipe:: shannon_cpp
   :replaces_section_title:
   :noindex:

   shannon\_cpp is command line tool for denovo rna assembly

   :homepage: https://github.com/bx3/shannon_cpp.git
   :license: GPL v3.0
   :recipe: /`shannon_cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon_cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shannon_cpp/meta.yaml>`_

   


.. conda:package:: shannon_cpp

   |downloads_shannon_cpp| |docker_shannon_cpp|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends on boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends on coreutils: 
   :depends on glpk: ``>=4.65,<4.66.0a0``
   :depends on kmer-jellyfish: ``2.*``
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libstdcxx-ng: ``>=7.3.0``
   :depends on metis: ``>=5.1.0,<5.2.0a0``
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on rcorrector: ``1.*``
   :depends on sparsehash: 
   :depends on wget: 
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install shannon_cpp

to add into an existing workspace instead, run::

    pixi add shannon_cpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shannon_cpp

Alternatively, to install into a new environment, run::

    conda create -n envname shannon_cpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shannon_cpp:<tag>

(see `shannon_cpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shannon_cpp| image:: https://img.shields.io/conda/dn/bioconda/shannon_cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/shannon_cpp
   :alt:   (downloads)
.. |docker_shannon_cpp| image:: https://quay.io/repository/biocontainers/shannon_cpp/status
   :target: https://quay.io/repository/biocontainers/shannon_cpp
.. _`shannon_cpp/tags`: https://quay.io/repository/biocontainers/shannon_cpp?tab=tags


.. raw:: html

    <script>
        var package = "shannon_cpp";
        var versions = ["0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shannon_cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shannon_cpp/README.html