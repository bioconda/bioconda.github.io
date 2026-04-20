:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ropebwt3'
.. highlight: bash

ropebwt3
========

.. conda:recipe:: ropebwt3
   :replaces_section_title:
   :noindex:

   Constructs the FM\-index of a large DNA sequence set and searches for matches against the FM\-index.

   :homepage: https://github.com/lh3/ropebwt3
   :documentation: https://github.com/lh3/ropebwt3/blob/v3.10/README.md
   
   :license: MIT / MIT
   :recipe: /`ropebwt3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt3/meta.yaml>`_

   


.. conda:package:: ropebwt3

   |downloads_ropebwt3| |docker_ropebwt3|

   :versions:
      
      

      ``3.10-0``,  ``3.9-0``,  ``3.8-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5-0``,  ``3.4-0``,  ``3.3-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install ropebwt3

to add into an existing workspace instead, run::

    pixi add ropebwt3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ropebwt3

Alternatively, to install into a new environment, run::

    conda create -n envname ropebwt3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ropebwt3:<tag>

(see `ropebwt3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ropebwt3| image:: https://img.shields.io/conda/dn/bioconda/ropebwt3.svg?style=flat
   :target: https://anaconda.org/bioconda/ropebwt3
   :alt:   (downloads)
.. |docker_ropebwt3| image:: https://quay.io/repository/biocontainers/ropebwt3/status
   :target: https://quay.io/repository/biocontainers/ropebwt3
.. _`ropebwt3/tags`: https://quay.io/repository/biocontainers/ropebwt3?tab=tags


.. raw:: html

    <script>
        var package = "ropebwt3";
        var versions = ["3.10","3.9","3.8","3.7","3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ropebwt3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ropebwt3/README.html