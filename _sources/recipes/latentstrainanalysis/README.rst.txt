:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'latentstrainanalysis'
.. highlight: bash

latentstrainanalysis
====================

.. conda:recipe:: latentstrainanalysis
   :replaces_section_title:
   :noindex:

   Partitioning and analysis methods for large\, complex sequence datasets

   :homepage: https://github.com/brian-cleary/LatentStrainAnalysis
   :license: MIT
   :recipe: /`latentstrainanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/latentstrainanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/latentstrainanalysis/meta.yaml>`_

   LSA was developed as a pre\-assembly tool for partitioning metagenomic reads.
   It uses a hyperplane hashing function and streaming SVD in order to find
   covariance relations between k\-mers. The code\, and the process outline in
   LSFScripts in particular\, have been optimized to scale to massive data
   sets in fixed memory with a highly distributed computing environment.



.. conda:package:: latentstrainanalysis

   |downloads_latentstrainanalysis| |docker_latentstrainanalysis|

   :versions:
      
      

      ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends on gensim: 
   :depends on numpy: 
   :depends on parallel: 
   :depends on pyro4: 
   :depends on python: ``<3``
   :depends on scipy: 

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

    pixi global install latentstrainanalysis

to add into an existing workspace instead, run::

    pixi add latentstrainanalysis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install latentstrainanalysis

Alternatively, to install into a new environment, run::

    conda create -n envname latentstrainanalysis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/latentstrainanalysis:<tag>

(see `latentstrainanalysis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_latentstrainanalysis| image:: https://img.shields.io/conda/dn/bioconda/latentstrainanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/latentstrainanalysis
   :alt:   (downloads)
.. |docker_latentstrainanalysis| image:: https://quay.io/repository/biocontainers/latentstrainanalysis/status
   :target: https://quay.io/repository/biocontainers/latentstrainanalysis
.. _`latentstrainanalysis/tags`: https://quay.io/repository/biocontainers/latentstrainanalysis?tab=tags


.. raw:: html

    <script>
        var package = "latentstrainanalysis";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/latentstrainanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/latentstrainanalysis/README.html