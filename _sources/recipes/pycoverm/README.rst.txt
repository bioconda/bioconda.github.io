:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycoverm'
.. highlight: bash

pycoverm
========

.. conda:recipe:: pycoverm
   :replaces_section_title:
   :noindex:

   Python bindings for CoverM

   :homepage: https://github.com/apcamargo/pycoverm
   :license: GPL-3.0
   :recipe: /`pycoverm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycoverm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycoverm/meta.yaml>`_

   


.. conda:package:: pycoverm

   |downloads_pycoverm| |docker_pycoverm|

   :versions:
      
      

      ``0.6.2-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: ``>=1.16,<3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install pycoverm

to add into an existing workspace instead, run::

    pixi add pycoverm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pycoverm

Alternatively, to install into a new environment, run::

    conda create -n envname pycoverm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pycoverm:<tag>

(see `pycoverm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pycoverm| image:: https://img.shields.io/conda/dn/bioconda/pycoverm.svg?style=flat
   :target: https://anaconda.org/bioconda/pycoverm
   :alt:   (downloads)
.. |docker_pycoverm| image:: https://quay.io/repository/biocontainers/pycoverm/status
   :target: https://quay.io/repository/biocontainers/pycoverm
.. _`pycoverm/tags`: https://quay.io/repository/biocontainers/pycoverm?tab=tags


.. raw:: html

    <script>
        var package = "pycoverm";
        var versions = ["0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycoverm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycoverm/README.html