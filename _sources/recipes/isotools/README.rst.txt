:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isotools'
.. highlight: bash

isotools
========

.. conda:recipe:: isotools
   :replaces_section_title:
   :noindex:

   Framework for the analysis of long read transcriptome sequencing data.

   :homepage: https://github.com/HerwigLab/IsoTools2
   :documentation: https://isotools.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`isotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isotools/meta.yaml>`_

   


.. conda:package:: isotools

   |downloads_isotools| |docker_isotools|

   :versions:
      
      

      ``2.0.0-0``,  ``0.3.4-0``

      

   
   :depends on biopython: 
   :depends on cpat: ``>=3.0``
   :depends on intervaltree: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyhmmer: 
   :depends on pysam: 
   :depends on python: ``>=3.10``
   :depends on python-ternary: 
   :depends on requests: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on statsmodels: 
   :depends on tqdm: 
   :depends on umap-learn: 

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

    pixi global install isotools

to add into an existing workspace instead, run::

    pixi add isotools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isotools

Alternatively, to install into a new environment, run::

    conda create -n envname isotools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isotools:<tag>

(see `isotools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isotools| image:: https://img.shields.io/conda/dn/bioconda/isotools.svg?style=flat
   :target: https://anaconda.org/bioconda/isotools
   :alt:   (downloads)
.. |docker_isotools| image:: https://quay.io/repository/biocontainers/isotools/status
   :target: https://quay.io/repository/biocontainers/isotools
.. _`isotools/tags`: https://quay.io/repository/biocontainers/isotools?tab=tags


.. raw:: html

    <script>
        var package = "isotools";
        var versions = ["2.0.0","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isotools/README.html