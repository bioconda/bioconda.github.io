:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnillumina'
.. highlight: bash

hmnillumina
===========

.. conda:recipe:: hmnillumina
   :replaces_section_title:
   :noindex:

   A parser for Illumina run

   :homepage: https://github.com/guillaume-gricourt/HmnIllumina
   :license: MIT / MIT
   :recipe: /`hmnillumina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnillumina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnillumina/meta.yaml>`_

   HmnIllumina\: parsing Illumina InterOp folder to keep useful information


.. conda:package:: hmnillumina

   |downloads_hmnillumina| |docker_hmnillumina|

   :versions:
      
      

      ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.3-0``

      

   
   :depends on illumina-interop: ``>=1.5.0,<1.6.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pytest: 
   :depends on python: 
   :depends on rapidjson: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install hmnillumina

to add into an existing workspace instead, run::

    pixi add hmnillumina

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmnillumina

Alternatively, to install into a new environment, run::

    conda create -n envname hmnillumina

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmnillumina:<tag>

(see `hmnillumina/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmnillumina| image:: https://img.shields.io/conda/dn/bioconda/hmnillumina.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnillumina
   :alt:   (downloads)
.. |docker_hmnillumina| image:: https://quay.io/repository/biocontainers/hmnillumina/status
   :target: https://quay.io/repository/biocontainers/hmnillumina
.. _`hmnillumina/tags`: https://quay.io/repository/biocontainers/hmnillumina?tab=tags


.. raw:: html

    <script>
        var package = "hmnillumina";
        var versions = ["1.5.1","1.5.1","1.5.1","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnillumina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnillumina/README.html