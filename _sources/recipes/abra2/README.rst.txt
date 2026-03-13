:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abra2'
.. highlight: bash

abra2
=====

.. conda:recipe:: abra2
   :replaces_section_title:
   :noindex:

   ABRA2 is an updated implementation of ABRA

   :homepage: https://github.com/mozack/abra2
   :license: MIT
   :recipe: /`abra2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abra2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abra2/meta.yaml>`_

   


.. conda:package:: abra2

   |downloads_abra2| |docker_abra2|

   :versions:
      
      

      ``2.24-3``,  ``2.24-1``,  ``2.24-0``,  ``2.23-1``,  ``2.23-0``,  ``2.22-0``,  ``2.20-0``

      

   
   :depends on coreutils: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on openjdk: ``>=8,<10``
   :depends on zlib: 

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

    pixi global install abra2

to add into an existing workspace instead, run::

    pixi add abra2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install abra2

Alternatively, to install into a new environment, run::

    conda create -n envname abra2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/abra2:<tag>

(see `abra2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_abra2| image:: https://img.shields.io/conda/dn/bioconda/abra2.svg?style=flat
   :target: https://anaconda.org/bioconda/abra2
   :alt:   (downloads)
.. |docker_abra2| image:: https://quay.io/repository/biocontainers/abra2/status
   :target: https://quay.io/repository/biocontainers/abra2
.. _`abra2/tags`: https://quay.io/repository/biocontainers/abra2?tab=tags


.. raw:: html

    <script>
        var package = "abra2";
        var versions = ["2.24","2.24","2.24","2.23","2.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abra2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abra2/README.html