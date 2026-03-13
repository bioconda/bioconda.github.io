:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtgrasp'
.. highlight: bash

mtgrasp
=======

.. conda:recipe:: mtgrasp
   :replaces_section_title:
   :noindex:

   reference\-grade de novo animal mitochondrial genome assembly and standardization

   :homepage: https://github.com/bcgsc/mtGrasp
   :license: GPL-3.0
   :recipe: /`mtgrasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtgrasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtgrasp/meta.yaml>`_

   


.. conda:package:: mtgrasp

   |downloads_mtgrasp| |docker_mtgrasp|

   :versions:
      
      

      ``1.1.8-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``

      

   
   :depends on abyss: 
   :depends on biopython: 
   :depends on blast: ``>=2.9.0``
   :depends on bwa: 
   :depends on mitos: ``>=2.1.7``
   :depends on ntcard: 
   :depends on ntjoin: 
   :depends on pilon: 
   :depends on python: 
   :depends on samtools: 
   :depends on seqtk: 
   :depends on snakemake: 

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

    pixi global install mtgrasp

to add into an existing workspace instead, run::

    pixi add mtgrasp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mtgrasp

Alternatively, to install into a new environment, run::

    conda create -n envname mtgrasp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mtgrasp:<tag>

(see `mtgrasp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mtgrasp| image:: https://img.shields.io/conda/dn/bioconda/mtgrasp.svg?style=flat
   :target: https://anaconda.org/bioconda/mtgrasp
   :alt:   (downloads)
.. |docker_mtgrasp| image:: https://quay.io/repository/biocontainers/mtgrasp/status
   :target: https://quay.io/repository/biocontainers/mtgrasp
.. _`mtgrasp/tags`: https://quay.io/repository/biocontainers/mtgrasp?tab=tags


.. raw:: html

    <script>
        var package = "mtgrasp";
        var versions = ["1.1.8","1.1.6","1.1.5","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtgrasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtgrasp/README.html