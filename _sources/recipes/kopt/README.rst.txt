:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kopt'
.. highlight: bash

kopt
====

.. conda:recipe:: kopt
   :replaces_section_title:
   :noindex:

   Keras\-hyperopt \(kopt\)\; Hyper\-parameter tuning for Keras using hyperopt.

   :homepage: https://github.com/avsecz/keras-hyperopt
   :license: MIT / MIT
   :recipe: /`kopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kopt/meta.yaml>`_

   


.. conda:package:: kopt

   |downloads_kopt| |docker_kopt|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on future: 
   :depends on hyperopt: 
   :depends on keras: ``>=2.0.4``
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on scikit-learn: ``>=0.18``
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

    pixi global install kopt

to add into an existing workspace instead, run::

    pixi add kopt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kopt

Alternatively, to install into a new environment, run::

    conda create -n envname kopt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kopt:<tag>

(see `kopt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kopt| image:: https://img.shields.io/conda/dn/bioconda/kopt.svg?style=flat
   :target: https://anaconda.org/bioconda/kopt
   :alt:   (downloads)
.. |docker_kopt| image:: https://quay.io/repository/biocontainers/kopt/status
   :target: https://quay.io/repository/biocontainers/kopt
.. _`kopt/tags`: https://quay.io/repository/biocontainers/kopt?tab=tags


.. raw:: html

    <script>
        var package = "kopt";
        var versions = ["0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kopt/README.html