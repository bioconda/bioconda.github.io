:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-calder2'
.. highlight: bash

r-calder2
=========

.. conda:recipe:: r-calder2
   :replaces_section_title:
   :noindex:

   CALDER is a Hi\-C analysis tool for the analysis of hierarchical chromatin interactions

   :homepage: https://github.com/CSOgroup/CALDER2
   :license: MIT / MIT
   :recipe: /`r-calder2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-calder2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-calder2/meta.yaml>`_

   


.. conda:package:: r-calder2

   |downloads_r-calder2| |docker_r-calder2|

   :versions:
      
      

      ``0.7-1``,  ``0.7-0``,  ``0.6-0``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.36.0``
   :depends on bioconductor-rhdf5: ``>=2.28.0``
   :depends on cooler: 
   :depends on r-ape: ``>=5.3``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: ``>=1.12.2``
   :depends on r-dendextend: ``>=1.12.0``
   :depends on r-doparallel: ``>=1.0.15``
   :depends on r-factoextra: ``>=1.0.5``
   :depends on r-fields: ``>=9.8.3``
   :depends on r-fitdistrplus: ``>=1.0.14``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-igraph: ``>=1.2.4``
   :depends on r-maptools: ``>=0.9.5``
   :depends on r-matrix: ``>=1.2.17``
   :depends on r-optparse: 
   :depends on r-r.utils: ``>=2.9.0``
   :depends on r-rarpack: ``>=0.11.0``
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-strawr: ``>=0.0.9``

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

    pixi global install r-calder2

to add into an existing workspace instead, run::

    pixi add r-calder2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-calder2

Alternatively, to install into a new environment, run::

    conda create -n envname r-calder2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-calder2:<tag>

(see `r-calder2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-calder2| image:: https://img.shields.io/conda/dn/bioconda/r-calder2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-calder2
   :alt:   (downloads)
.. |docker_r-calder2| image:: https://quay.io/repository/biocontainers/r-calder2/status
   :target: https://quay.io/repository/biocontainers/r-calder2
.. _`r-calder2/tags`: https://quay.io/repository/biocontainers/r-calder2?tab=tags


.. raw:: html

    <script>
        var package = "r-calder2";
        var versions = ["0.7","0.7","0.6","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-calder2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-calder2/README.html