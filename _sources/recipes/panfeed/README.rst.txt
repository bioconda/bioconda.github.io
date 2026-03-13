:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panfeed'
.. highlight: bash

panfeed
=======

.. conda:recipe:: panfeed
   :replaces_section_title:
   :noindex:

   Compute gene\-cluster specific k\-mers over a pangenome

   :homepage: https://github.com/microbial-pangenomes-lab/panfeed
   :license: APACHE / Apache-2.0
   :recipe: /`panfeed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panfeed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panfeed/meta.yaml>`_

   


.. conda:package:: panfeed

   |downloads_panfeed| |docker_panfeed|

   :versions:
      
      

      ``1.7.2-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyfaidx: 
   :depends on python: ``>=3.6``
   :depends on seaborn-base: 

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

    pixi global install panfeed

to add into an existing workspace instead, run::

    pixi add panfeed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panfeed

Alternatively, to install into a new environment, run::

    conda create -n envname panfeed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panfeed:<tag>

(see `panfeed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panfeed| image:: https://img.shields.io/conda/dn/bioconda/panfeed.svg?style=flat
   :target: https://anaconda.org/bioconda/panfeed
   :alt:   (downloads)
.. |docker_panfeed| image:: https://quay.io/repository/biocontainers/panfeed/status
   :target: https://quay.io/repository/biocontainers/panfeed
.. _`panfeed/tags`: https://quay.io/repository/biocontainers/panfeed?tab=tags


.. raw:: html

    <script>
        var package = "panfeed";
        var versions = ["1.7.2","1.7.0","1.6.2","1.6.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panfeed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panfeed/README.html