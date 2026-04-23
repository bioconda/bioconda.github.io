:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lanceotron'
.. highlight: bash

lanceotron
==========

.. conda:recipe:: lanceotron
   :replaces_section_title:
   :noindex:

   LanceOtron is a machine learning\, genomic data extraction and analysis tool trained for ATAC\-seq\, ChIP\-seq\, and DNase\-seq peak calling.

   :homepage: https://github.com/LHentges/LanceOtron
   :documentation: https://lanceotron.molbiol.ox.ac.uk
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`lanceotron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lanceotron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lanceotron/meta.yaml>`_

   


.. conda:package:: lanceotron

   |downloads_lanceotron| |docker_lanceotron|

   :versions:
      
      

      ``1.2.7-0``

      

   
   :depends on bedtools: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybigwig: 
   :depends on python: ``>=3.7``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on setuptools: ``<82``
   :depends on tensorflow: ``>2``
   :depends on tqdm: 

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

    pixi global install lanceotron

to add into an existing workspace instead, run::

    pixi add lanceotron

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lanceotron

Alternatively, to install into a new environment, run::

    conda create -n envname lanceotron

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lanceotron:<tag>

(see `lanceotron/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lanceotron| image:: https://img.shields.io/conda/dn/bioconda/lanceotron.svg?style=flat
   :target: https://anaconda.org/bioconda/lanceotron
   :alt:   (downloads)
.. |docker_lanceotron| image:: https://quay.io/repository/biocontainers/lanceotron/status
   :target: https://quay.io/repository/biocontainers/lanceotron
.. _`lanceotron/tags`: https://quay.io/repository/biocontainers/lanceotron?tab=tags


.. raw:: html

    <script>
        var package = "lanceotron";
        var versions = ["1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lanceotron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lanceotron/README.html