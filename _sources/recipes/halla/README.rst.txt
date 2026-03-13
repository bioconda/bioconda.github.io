:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'halla'
.. highlight: bash

halla
=====

.. conda:recipe:: halla
   :replaces_section_title:
   :noindex:

   HAllA\: Hierarchically All\-against\-All Association Testing.

   :homepage: http://huttenhower.sph.harvard.edu/halla
   :license: MIT / MIT
   :recipe: /`halla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halla/meta.yaml>`_

   


.. conda:package:: halla

   |downloads_halla| |docker_halla|

   :versions:
      
      

      ``0.8.40-0``,  ``0.8.17-0``

      

   
   :depends on jenkspy: ``>=0.1.5``
   :depends on matplotlib-base: ``>=3.5.3``
   :depends on numpy: ``>=1.19.0``
   :depends on pandas: ``>=1.0.5``
   :depends on python: 
   :depends on pyyaml: ``>=5.4``
   :depends on r-eva: ``>=0.2.6``
   :depends on r-xicor: ``>=0.3.3``
   :depends on rpy2: ``>=3.3.5``
   :depends on scikit-learn: ``>=0.23.1``
   :depends on scipy: ``>=1.5.1``
   :depends on seaborn: ``>=0.10.1``
   :depends on statsmodels: ``>=0.11.1``
   :depends on tqdm: ``>=4.50.2``

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

    pixi global install halla

to add into an existing workspace instead, run::

    pixi add halla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install halla

Alternatively, to install into a new environment, run::

    conda create -n envname halla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/halla:<tag>

(see `halla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_halla| image:: https://img.shields.io/conda/dn/bioconda/halla.svg?style=flat
   :target: https://anaconda.org/bioconda/halla
   :alt:   (downloads)
.. |docker_halla| image:: https://quay.io/repository/biocontainers/halla/status
   :target: https://quay.io/repository/biocontainers/halla
.. _`halla/tags`: https://quay.io/repository/biocontainers/halla?tab=tags


.. raw:: html

    <script>
        var package = "halla";
        var versions = ["0.8.40","0.8.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/halla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/halla/README.html