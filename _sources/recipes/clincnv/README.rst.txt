:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clincnv'
.. highlight: bash

clincnv
=======

.. conda:recipe:: clincnv
   :replaces_section_title:
   :noindex:

   Copy number variation detection for clinical sequencing.

   :homepage: https://github.com/imgag/ClinCNV
   :license: MIT
   :recipe: /`clincnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clincnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clincnv/meta.yaml>`_

   


.. conda:package:: clincnv

   |downloads_clincnv| |docker_clincnv|

   :versions:
      
      

      ``1.19.1-0``,  ``1.18.3-0``

      

   
   :depends on r-base: 
   :depends on r-data.table: 
   :depends on r-dbscan: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-mass: 
   :depends on r-mclust: 
   :depends on r-optparse: 
   :depends on r-party: 
   :depends on r-r.utils: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-robustbase: 
   :depends on r-umap: 

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

    pixi global install clincnv

to add into an existing workspace instead, run::

    pixi add clincnv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clincnv

Alternatively, to install into a new environment, run::

    conda create -n envname clincnv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clincnv:<tag>

(see `clincnv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clincnv| image:: https://img.shields.io/conda/dn/bioconda/clincnv.svg?style=flat
   :target: https://anaconda.org/bioconda/clincnv
   :alt:   (downloads)
.. |docker_clincnv| image:: https://quay.io/repository/biocontainers/clincnv/status
   :target: https://quay.io/repository/biocontainers/clincnv
.. _`clincnv/tags`: https://quay.io/repository/biocontainers/clincnv?tab=tags


.. raw:: html

    <script>
        var package = "clincnv";
        var versions = ["1.19.1","1.18.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clincnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clincnv/README.html