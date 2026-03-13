:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'setuptools_cython'
.. highlight: bash

setuptools_cython
=================

.. conda:recipe:: setuptools_cython
   :replaces_section_title:
   :noindex:

   Cython setuptools integration

   :homepage: http://pypi.python.org/pypi/setuptools_cython/
   :license: http://www.gnu.org/licenses/gpl-2.0.html
   :recipe: /`setuptools_cython <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/setuptools_cython>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/setuptools_cython/meta.yaml>`_

   


.. conda:package:: setuptools_cython

   |downloads_setuptools_cython| |docker_setuptools_cython|

   :versions:
      
      

      ``0.2.1-4``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends on cython: 
   :depends on python: 
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

    pixi global install setuptools_cython

to add into an existing workspace instead, run::

    pixi add setuptools_cython

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install setuptools_cython

Alternatively, to install into a new environment, run::

    conda create -n envname setuptools_cython

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/setuptools_cython:<tag>

(see `setuptools_cython/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_setuptools_cython| image:: https://img.shields.io/conda/dn/bioconda/setuptools_cython.svg?style=flat
   :target: https://anaconda.org/bioconda/setuptools_cython
   :alt:   (downloads)
.. |docker_setuptools_cython| image:: https://quay.io/repository/biocontainers/setuptools_cython/status
   :target: https://quay.io/repository/biocontainers/setuptools_cython
.. _`setuptools_cython/tags`: https://quay.io/repository/biocontainers/setuptools_cython?tab=tags


.. raw:: html

    <script>
        var package = "setuptools_cython";
        var versions = ["0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/setuptools_cython/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/setuptools_cython/README.html