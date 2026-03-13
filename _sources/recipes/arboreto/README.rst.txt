:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arboreto'
.. highlight: bash

arboreto
========

.. conda:recipe:: arboreto
   :replaces_section_title:
   :noindex:

   Scalable gene regulatory network inference using tree\-based ensemble regressors

   :homepage: https://github.com/tmoerman/arboreto
   :license: BSD / BSD 3-Clause License
   :recipe: /`arboreto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arboreto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arboreto/meta.yaml>`_

   


.. conda:package:: arboreto

   |downloads_arboreto| |docker_arboreto|

   :versions:
      
      

      ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends on dask: 
   :depends on dask-expr: ``<1.0.0``
   :depends on distributed: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on scikit-learn: 
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

    pixi global install arboreto

to add into an existing workspace instead, run::

    pixi add arboreto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arboreto

Alternatively, to install into a new environment, run::

    conda create -n envname arboreto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arboreto:<tag>

(see `arboreto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arboreto| image:: https://img.shields.io/conda/dn/bioconda/arboreto.svg?style=flat
   :target: https://anaconda.org/bioconda/arboreto
   :alt:   (downloads)
.. |docker_arboreto| image:: https://quay.io/repository/biocontainers/arboreto/status
   :target: https://quay.io/repository/biocontainers/arboreto
.. _`arboreto/tags`: https://quay.io/repository/biocontainers/arboreto?tab=tags


.. raw:: html

    <script>
        var package = "arboreto";
        var versions = ["0.1.6","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arboreto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arboreto/README.html