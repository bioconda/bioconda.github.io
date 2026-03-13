:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magus-msa'
.. highlight: bash

magus-msa
=========

.. conda:recipe:: magus-msa
   :replaces_section_title:
   :noindex:

   Multiple Sequence Alignment using Graph Clustering

   :homepage: https://github.com/vlasmirnov/MAGUS
   :documentation: https://github.com/vlasmirnov/MAGUS/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`magus-msa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magus-msa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magus-msa/meta.yaml>`_
   :links: biotools: :biotools:`magus`, doi: :doi:`10.1093/bioinformatics/btaa992`

   


.. conda:package:: magus-msa

   |downloads_magus-msa| |docker_magus-msa|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.2a-0``

      

   
   :depends on clustalo: 
   :depends on dendropy: ``>=4.5.2``
   :depends on fasttree: 
   :depends on hmmer: 
   :depends on mafft: 
   :depends on mcl: 
   :depends on python: ``>=3.6``

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

    pixi global install magus-msa

to add into an existing workspace instead, run::

    pixi add magus-msa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install magus-msa

Alternatively, to install into a new environment, run::

    conda create -n envname magus-msa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/magus-msa:<tag>

(see `magus-msa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_magus-msa| image:: https://img.shields.io/conda/dn/bioconda/magus-msa.svg?style=flat
   :target: https://anaconda.org/bioconda/magus-msa
   :alt:   (downloads)
.. |docker_magus-msa| image:: https://quay.io/repository/biocontainers/magus-msa/status
   :target: https://quay.io/repository/biocontainers/magus-msa
.. _`magus-msa/tags`: https://quay.io/repository/biocontainers/magus-msa?tab=tags


.. raw:: html

    <script>
        var package = "magus-msa";
        var versions = ["0.2.0","0.1.3","0.1.2","0.1.2a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magus-msa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magus-msa/README.html