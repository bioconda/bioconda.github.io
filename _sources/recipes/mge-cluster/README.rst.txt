:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mge-cluster'
.. highlight: bash

mge-cluster
===========

.. conda:recipe:: mge-cluster
   :replaces_section_title:
   :noindex:

   A classification framework for mobile genetic elements \(MGEs\)

   :homepage: https://gitlab.com/sirarredondo/mge_cluster
   :license: MIT / MIT
   :recipe: /`mge-cluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mge-cluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mge-cluster/meta.yaml>`_

   


.. conda:package:: mge-cluster

   |downloads_mge-cluster| |docker_mge-cluster|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``

      

   
   :depends on bifrost: ``>=1.0.6``
   :depends on hdbscan: 
   :depends on joblib: ``1.1.0``
   :depends on numpy: ``>=1.16.6``
   :depends on opentsne: 
   :depends on pandas: 
   :depends on python: 
   :depends on scikit-learn: ``>=0.20``
   :depends on unitig-caller: ``1.3.0``

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

    pixi global install mge-cluster

to add into an existing workspace instead, run::

    pixi add mge-cluster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mge-cluster

Alternatively, to install into a new environment, run::

    conda create -n envname mge-cluster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mge-cluster:<tag>

(see `mge-cluster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mge-cluster| image:: https://img.shields.io/conda/dn/bioconda/mge-cluster.svg?style=flat
   :target: https://anaconda.org/bioconda/mge-cluster
   :alt:   (downloads)
.. |docker_mge-cluster| image:: https://quay.io/repository/biocontainers/mge-cluster/status
   :target: https://quay.io/repository/biocontainers/mge-cluster
.. _`mge-cluster/tags`: https://quay.io/repository/biocontainers/mge-cluster?tab=tags


.. raw:: html

    <script>
        var package = "mge-cluster";
        var versions = ["1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mge-cluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mge-cluster/README.html