:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stark'
.. highlight: bash

stark
=====

.. conda:recipe:: stark
   :replaces_section_title:
   :noindex:

   A tool for bluntifying a bidirected de bruijn graph by removing overlaps.

   :homepage: https://github.com/hnikaein/stark
   :license: MIT / MIT
   :recipe: /`stark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stark/meta.yaml>`_

   


.. conda:package:: stark

   |downloads_stark| |docker_stark|

   :versions:
      
      

      ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install stark

to add into an existing workspace instead, run::

    pixi add stark

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stark

Alternatively, to install into a new environment, run::

    conda create -n envname stark

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stark:<tag>

(see `stark/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stark| image:: https://img.shields.io/conda/dn/bioconda/stark.svg?style=flat
   :target: https://anaconda.org/bioconda/stark
   :alt:   (downloads)
.. |docker_stark| image:: https://quay.io/repository/biocontainers/stark/status
   :target: https://quay.io/repository/biocontainers/stark
.. _`stark/tags`: https://quay.io/repository/biocontainers/stark?tab=tags


.. raw:: html

    <script>
        var package = "stark";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stark/README.html