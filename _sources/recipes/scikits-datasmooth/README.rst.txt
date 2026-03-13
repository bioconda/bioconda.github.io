:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scikits-datasmooth'
.. highlight: bash

scikits-datasmooth
==================

.. conda:recipe:: scikits-datasmooth
   :replaces_section_title:
   :noindex:

   Scikits data smoothing package

   :homepage: https://github.com/jjstickel/scikit-datasmooth/
   :license: BSD / BSD
   :recipe: /`scikits-datasmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scikits-datasmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scikits-datasmooth/meta.yaml>`_

   


.. conda:package:: scikits-datasmooth

   |downloads_scikits-datasmooth| |docker_scikits-datasmooth|

   :versions:
      
      

      ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``

      

   
   :depends on cvxopt: 
   :depends on numpy: 
   :depends on python: 
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

    pixi global install scikits-datasmooth

to add into an existing workspace instead, run::

    pixi add scikits-datasmooth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scikits-datasmooth

Alternatively, to install into a new environment, run::

    conda create -n envname scikits-datasmooth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scikits-datasmooth:<tag>

(see `scikits-datasmooth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scikits-datasmooth| image:: https://img.shields.io/conda/dn/bioconda/scikits-datasmooth.svg?style=flat
   :target: https://anaconda.org/bioconda/scikits-datasmooth
   :alt:   (downloads)
.. |docker_scikits-datasmooth| image:: https://quay.io/repository/biocontainers/scikits-datasmooth/status
   :target: https://quay.io/repository/biocontainers/scikits-datasmooth
.. _`scikits-datasmooth/tags`: https://quay.io/repository/biocontainers/scikits-datasmooth?tab=tags


.. raw:: html

    <script>
        var package = "scikits-datasmooth";
        var versions = ["0.7.1","0.7.1","0.7.1","0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scikits-datasmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scikits-datasmooth/README.html