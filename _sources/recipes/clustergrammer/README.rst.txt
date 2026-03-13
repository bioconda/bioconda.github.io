:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clustergrammer'
.. highlight: bash

clustergrammer
==============

.. conda:recipe:: clustergrammer
   :replaces_section_title:
   :noindex:

   A python module for the Clustergrammer visualization project

   :homepage: https://github.com/MaayanLab/clustergrammer-py
   :license: MIT / MIT license
   :recipe: /`clustergrammer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustergrammer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustergrammer/meta.yaml>`_

   


.. conda:package:: clustergrammer

   |downloads_clustergrammer| |docker_clustergrammer|

   :versions:
      
      

      ``1.13.6-3``,  ``1.13.6-2``,  ``1.13.6-1``,  ``1.13.6-0``,  ``1.13.5-2``,  ``1.13.5-1``,  ``1.13.5-0``

      

   
   :depends on numpy: 
   :depends on pandas: ``<1.0.0``
   :depends on python: 
   :depends on scikit-learn: 

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

    pixi global install clustergrammer

to add into an existing workspace instead, run::

    pixi add clustergrammer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clustergrammer

Alternatively, to install into a new environment, run::

    conda create -n envname clustergrammer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clustergrammer:<tag>

(see `clustergrammer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clustergrammer| image:: https://img.shields.io/conda/dn/bioconda/clustergrammer.svg?style=flat
   :target: https://anaconda.org/bioconda/clustergrammer
   :alt:   (downloads)
.. |docker_clustergrammer| image:: https://quay.io/repository/biocontainers/clustergrammer/status
   :target: https://quay.io/repository/biocontainers/clustergrammer
.. _`clustergrammer/tags`: https://quay.io/repository/biocontainers/clustergrammer?tab=tags


.. raw:: html

    <script>
        var package = "clustergrammer";
        var versions = ["1.13.6","1.13.6","1.13.6","1.13.6","1.13.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustergrammer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustergrammer/README.html