:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'suma_package'
.. highlight: bash

suma_package
============

.. conda:recipe:: suma_package
   :replaces_section_title:
   :noindex:

   Fast and exact comparison of sequences

   :homepage: http://metabarcoding.org/sumatra
   :license: CeCILL FSLA
   :recipe: /`suma_package <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suma_package>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suma_package/meta.yaml>`_

   


.. conda:package:: suma_package

   |downloads_suma_package| |docker_suma_package|

   :versions:
      
      

      ``1.0.00-8``,  ``1.0.00-7``,  ``1.0.00-6``,  ``1.0.00-5``,  ``1.0.00-4``,  ``1.0.00-3``,  ``1.0.00-2``,  ``1.0.00-1``,  ``1.0.00-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install suma_package

to add into an existing workspace instead, run::

    pixi add suma_package

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install suma_package

Alternatively, to install into a new environment, run::

    conda create -n envname suma_package

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/suma_package:<tag>

(see `suma_package/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_suma_package| image:: https://img.shields.io/conda/dn/bioconda/suma_package.svg?style=flat
   :target: https://anaconda.org/bioconda/suma_package
   :alt:   (downloads)
.. |docker_suma_package| image:: https://quay.io/repository/biocontainers/suma_package/status
   :target: https://quay.io/repository/biocontainers/suma_package
.. _`suma_package/tags`: https://quay.io/repository/biocontainers/suma_package?tab=tags


.. raw:: html

    <script>
        var package = "suma_package";
        var versions = ["1.0.00","1.0.00","1.0.00","1.0.00","1.0.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suma_package/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suma_package/README.html