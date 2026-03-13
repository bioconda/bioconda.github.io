:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphprot'
.. highlight: bash

graphprot
=========

.. conda:recipe:: graphprot
   :replaces_section_title:
   :noindex:

   GraphProt is a tool for modelling binding preferences of RNA\-binding proteins from high\-throughput experiments such as CLIP\-seq and RNAcompete.

   :homepage: https://github.com/dmaticzka/graphprot
   :license: MIT
   :recipe: /`graphprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphprot/meta.yaml>`_

   


.. conda:package:: graphprot

   |downloads_graphprot| |docker_graphprot|

   :versions:
      
      

      ``1.1.7-4``,  ``1.1.7-2``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``

      

   
   :depends on coreutils: 
   :depends on curl: ``>=7.61.0,<8.0a0``
   :depends on gawk: 
   :depends on libstdcxx-ng: ``>=4.9``
   :depends on libsvm: ``>=3.21,<3.22.0a0``
   :depends on make: 
   :depends on openmp: 
   :depends on perl-getopt-long: 
   :depends on r-plyr: 
   :depends on r-prroc: 
   :depends on rnashapes: ``<3``
   :depends on weblogo: ``>=3``
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

    pixi global install graphprot

to add into an existing workspace instead, run::

    pixi add graphprot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install graphprot

Alternatively, to install into a new environment, run::

    conda create -n envname graphprot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/graphprot:<tag>

(see `graphprot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_graphprot| image:: https://img.shields.io/conda/dn/bioconda/graphprot.svg?style=flat
   :target: https://anaconda.org/bioconda/graphprot
   :alt:   (downloads)
.. |docker_graphprot| image:: https://quay.io/repository/biocontainers/graphprot/status
   :target: https://quay.io/repository/biocontainers/graphprot
.. _`graphprot/tags`: https://quay.io/repository/biocontainers/graphprot?tab=tags


.. raw:: html

    <script>
        var package = "graphprot";
        var versions = ["1.1.7","1.1.7","1.1.7","1.1.7","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphprot/README.html