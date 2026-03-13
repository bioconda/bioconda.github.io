:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'negative_training_sampler'
.. highlight: bash

negative_training_sampler
=========================

.. conda:recipe:: negative_training_sampler
   :replaces_section_title:
   :noindex:

   Generates negative samples with the same GC distribution as the positive samples per chromosome.

   :homepage: https://github.com/kircherlab/negative_training_sampler
   :license: MIT
   :recipe: /`negative_training_sampler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/negative_training_sampler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/negative_training_sampler/meta.yaml>`_

   


.. conda:package:: negative_training_sampler

   |downloads_negative_training_sampler| |docker_negative_training_sampler|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on bedtools: 
   :depends on click: 
   :depends on dask: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pysam: ``>=0.15``
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

    pixi global install negative_training_sampler

to add into an existing workspace instead, run::

    pixi add negative_training_sampler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install negative_training_sampler

Alternatively, to install into a new environment, run::

    conda create -n envname negative_training_sampler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/negative_training_sampler:<tag>

(see `negative_training_sampler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_negative_training_sampler| image:: https://img.shields.io/conda/dn/bioconda/negative_training_sampler.svg?style=flat
   :target: https://anaconda.org/bioconda/negative_training_sampler
   :alt:   (downloads)
.. |docker_negative_training_sampler| image:: https://quay.io/repository/biocontainers/negative_training_sampler/status
   :target: https://quay.io/repository/biocontainers/negative_training_sampler
.. _`negative_training_sampler/tags`: https://quay.io/repository/biocontainers/negative_training_sampler?tab=tags


.. raw:: html

    <script>
        var package = "negative_training_sampler";
        var versions = ["0.3.1","0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/negative_training_sampler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/negative_training_sampler/README.html