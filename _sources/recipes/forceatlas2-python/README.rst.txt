:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forceatlas2-python'
.. highlight: bash

forceatlas2-python
==================

.. conda:recipe:: forceatlas2-python
   :replaces_section_title:
   :noindex:

   Multithreaded Gephi Force Atlas2 Layout algorithm in 2D and 3D.

   :homepage: https://github.com/klarman-cell-observatory/forceatlas2-python
   :developer docs: https://github.com/klarman-cell-observatory/forceatlas2
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`forceatlas2-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forceatlas2-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forceatlas2-python/meta.yaml>`_

   This tool is used to calculate the pseudo\-temporal development trajectory of single\-cell data.



.. conda:package:: forceatlas2-python

   |downloads_forceatlas2-python| |docker_forceatlas2-python|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends on importlib_metadata: ``>=0.7``
   :depends on openjdk: ``>=8``
   :depends on pandas: ``>=0.21``
   :depends on python: ``>=3.6``
   :depends on setuptools: 

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

    pixi global install forceatlas2-python

to add into an existing workspace instead, run::

    pixi add forceatlas2-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install forceatlas2-python

Alternatively, to install into a new environment, run::

    conda create -n envname forceatlas2-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/forceatlas2-python:<tag>

(see `forceatlas2-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_forceatlas2-python| image:: https://img.shields.io/conda/dn/bioconda/forceatlas2-python.svg?style=flat
   :target: https://anaconda.org/bioconda/forceatlas2-python
   :alt:   (downloads)
.. |docker_forceatlas2-python| image:: https://quay.io/repository/biocontainers/forceatlas2-python/status
   :target: https://quay.io/repository/biocontainers/forceatlas2-python
.. _`forceatlas2-python/tags`: https://quay.io/repository/biocontainers/forceatlas2-python?tab=tags


.. raw:: html

    <script>
        var package = "forceatlas2-python";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forceatlas2-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forceatlas2-python/README.html