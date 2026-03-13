:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnasim'
.. highlight: bash

cnasim
======

.. conda:recipe:: cnasim
   :replaces_section_title:
   :noindex:

   Improved simulation of single\-cell copy number profiles and DNA\-seq data from tumors

   :homepage: https://github.com/samsonweiner/CNAsim
   :license: GPL-3.0-only
   :recipe: /`cnasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnasim/meta.yaml>`_

   CNAsim is a software package for improved simulation of single\-cell copy number alteration \(CNA\) data from tumors. See our paper with the same name published in Bioinformatics.


.. conda:package:: cnasim

   |downloads_cnasim| |docker_cnasim|

   :versions:
      
      

      ``1.3.5-0``,  ``1.3.4-0``

      

   
   :depends on biopython: ``>=1.8.1``
   :depends on dwgsim: 
   :depends on msprime: ``>=1.2.0``
   :depends on numpy: ``>=1.24.3``
   :depends on pyfaidx: ``>=0.7.2.1``
   :depends on python: ``>=3.7``
   :depends on samtools: 
   :depends on scipy: ``>=1.10.1``

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

    pixi global install cnasim

to add into an existing workspace instead, run::

    pixi add cnasim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cnasim

Alternatively, to install into a new environment, run::

    conda create -n envname cnasim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cnasim:<tag>

(see `cnasim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cnasim| image:: https://img.shields.io/conda/dn/bioconda/cnasim.svg?style=flat
   :target: https://anaconda.org/bioconda/cnasim
   :alt:   (downloads)
.. |docker_cnasim| image:: https://quay.io/repository/biocontainers/cnasim/status
   :target: https://quay.io/repository/biocontainers/cnasim
.. _`cnasim/tags`: https://quay.io/repository/biocontainers/cnasim?tab=tags


.. raw:: html

    <script>
        var package = "cnasim";
        var versions = ["1.3.5","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnasim/README.html