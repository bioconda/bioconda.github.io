:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'machina'
.. highlight: bash

machina
=======

.. conda:recipe:: machina
   :replaces_section_title:
   :noindex:

   Metastatic And Clonal History INtegrative Analysis

   :homepage: https://github.com/raphael-group/machina
   :license: BSD-3
   :recipe: /`machina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/machina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/machina/meta.yaml>`_

   MACHINA is a computational framework for inferring migration patterns
   between a primary tumor and metastases using DNA sequencing data. 


.. conda:package:: machina

   |downloads_machina| |docker_machina|

   :versions:
      
      

      ``1.2-7``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends on boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends on glpk: 
   :depends on lemon: ``>=1.3.1,<1.3.2.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``

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

    pixi global install machina

to add into an existing workspace instead, run::

    pixi add machina

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install machina

Alternatively, to install into a new environment, run::

    conda create -n envname machina

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/machina:<tag>

(see `machina/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_machina| image:: https://img.shields.io/conda/dn/bioconda/machina.svg?style=flat
   :target: https://anaconda.org/bioconda/machina
   :alt:   (downloads)
.. |docker_machina| image:: https://quay.io/repository/biocontainers/machina/status
   :target: https://quay.io/repository/biocontainers/machina
.. _`machina/tags`: https://quay.io/repository/biocontainers/machina?tab=tags


.. raw:: html

    <script>
        var package = "machina";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/machina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/machina/README.html