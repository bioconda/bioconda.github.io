:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carveme'
.. highlight: bash

carveme
=======

.. conda:recipe:: carveme
   :replaces_section_title:
   :noindex:

   CarveMe\: automated genome\-scale metabolic model reconstruction

   :homepage: https://github.com/cdanielmachado/carveme
   :documentation: https://carveme.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`carveme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carveme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carveme/meta.yaml>`_

   


.. conda:package:: carveme

   |downloads_carveme| |docker_carveme|

   :versions:
      
      

      ``1.6.6-1``,  ``1.6.6-0``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``

      

   
   :depends on diamond: ``2.1.13``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyscipopt: 
   :depends on python: ``>=3.8``
   :depends on reframed: ``>=1.5.1``
   :depends on requests: 
   :depends on scip: 

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

    pixi global install carveme

to add into an existing workspace instead, run::

    pixi add carveme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install carveme

Alternatively, to install into a new environment, run::

    conda create -n envname carveme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/carveme:<tag>

(see `carveme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_carveme| image:: https://img.shields.io/conda/dn/bioconda/carveme.svg?style=flat
   :target: https://anaconda.org/bioconda/carveme
   :alt:   (downloads)
.. |docker_carveme| image:: https://quay.io/repository/biocontainers/carveme/status
   :target: https://quay.io/repository/biocontainers/carveme
.. _`carveme/tags`: https://quay.io/repository/biocontainers/carveme?tab=tags


.. raw:: html

    <script>
        var package = "carveme";
        var versions = ["1.6.6","1.6.6","1.6.5","1.6.4","1.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carveme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carveme/README.html