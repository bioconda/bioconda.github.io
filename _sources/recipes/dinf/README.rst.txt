:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinf'
.. highlight: bash

dinf
====

.. conda:recipe:: dinf
   :replaces_section_title:
   :noindex:

   discriminator\-based inference for population genetics

   :homepage: https://github.com/RacimoLab/dinf
   :license: MIT
   :recipe: /`dinf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinf/meta.yaml>`_

   


.. conda:package:: dinf

   |downloads_dinf| |docker_dinf|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends on adjusttext: 
   :depends on cyvcf2: ``>=0.30.14``
   :depends on demes: ``>=0.2.1``
   :depends on demesdraw: 
   :depends on emcee: 
   :depends on flax: ``>=0.5.2``
   :depends on jax: 
   :depends on matplotlib-base: 
   :depends on msprime: ``>=1.0.4``
   :depends on multiprocess: 
   :depends on numpy: 
   :depends on optax: 
   :depends on python: ``>=3.8``
   :depends on rich: 
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

    pixi global install dinf

to add into an existing workspace instead, run::

    pixi add dinf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dinf

Alternatively, to install into a new environment, run::

    conda create -n envname dinf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dinf:<tag>

(see `dinf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dinf| image:: https://img.shields.io/conda/dn/bioconda/dinf.svg?style=flat
   :target: https://anaconda.org/bioconda/dinf
   :alt:   (downloads)
.. |docker_dinf| image:: https://quay.io/repository/biocontainers/dinf/status
   :target: https://quay.io/repository/biocontainers/dinf
.. _`dinf/tags`: https://quay.io/repository/biocontainers/dinf?tab=tags


.. raw:: html

    <script>
        var package = "dinf";
        var versions = ["0.5.0","0.4.0","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinf/README.html