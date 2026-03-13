:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psqtl'
.. highlight: bash

psqtl
=====

.. conda:recipe:: psqtl
   :replaces_section_title:
   :noindex:

   A collection of Python scripts to predict QTLs using per\-sample sequencing.

   :homepage: https://github.com/zkstewart/psQTL
   :documentation: https://github.com/zkstewart/psQTL/wiki
   
   :license: GPL / GPL-3
   :recipe: /`psqtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psqtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psqtl/meta.yaml>`_

   


.. conda:package:: psqtl

   |downloads_psqtl| |docker_psqtl|

   :versions:
      
      

      ``1.3.7-0``

      

   
   :depends on bcftools: 
   :depends on bioconductor-biocparallel: 
   :depends on bioconductor-mixomics: ``>=6.26.0``
   :depends on biopython: 
   :depends on matplotlib-base: 
   :depends on ncls: ``>=0.0.68``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pycirclize: 
   :depends on python: ``>=3.11,<=3.13``
   :depends on qt6-wayland: 
   :depends on r-argparser: 
   :depends on r-base: ``>=4.3.0``
   :depends on r-biocmanager: 
   :depends on r-dplyr: 
   :depends on r-stringr: 
   :depends on samtools: 
   :depends on vt: 

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

    pixi global install psqtl

to add into an existing workspace instead, run::

    pixi add psqtl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psqtl

Alternatively, to install into a new environment, run::

    conda create -n envname psqtl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psqtl:<tag>

(see `psqtl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psqtl| image:: https://img.shields.io/conda/dn/bioconda/psqtl.svg?style=flat
   :target: https://anaconda.org/bioconda/psqtl
   :alt:   (downloads)
.. |docker_psqtl| image:: https://quay.io/repository/biocontainers/psqtl/status
   :target: https://quay.io/repository/biocontainers/psqtl
.. _`psqtl/tags`: https://quay.io/repository/biocontainers/psqtl?tab=tags


.. raw:: html

    <script>
        var package = "psqtl";
        var versions = ["1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psqtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psqtl/README.html