:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peregrine-2021'
.. highlight: bash

peregrine-2021
==============

.. conda:recipe:: peregrine-2021
   :replaces_section_title:
   :noindex:

   A genome assembler designed for long\-reads that have good enough accuracy.

   :homepage: https://github.com/cschin/peregrine-2021
   :documentation: https://github.com/cschin/peregrine-2021/blob/v0.4.13/README.md
   
   :license: CC / CC BY-NC-SA 4.0
   :recipe: /`peregrine-2021 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peregrine-2021>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peregrine-2021/meta.yaml>`_

   


.. conda:package:: peregrine-2021

   |downloads_peregrine-2021| |docker_peregrine-2021|

   :versions:
      
      

      ``0.4.13-6``,  ``0.4.13-4``,  ``0.4.13-3``,  ``0.4.13-2``,  ``0.4.13-1``,  ``0.4.13-0``,  ``0.4.12-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on parallel: 

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

    pixi global install peregrine-2021

to add into an existing workspace instead, run::

    pixi add peregrine-2021

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install peregrine-2021

Alternatively, to install into a new environment, run::

    conda create -n envname peregrine-2021

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/peregrine-2021:<tag>

(see `peregrine-2021/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_peregrine-2021| image:: https://img.shields.io/conda/dn/bioconda/peregrine-2021.svg?style=flat
   :target: https://anaconda.org/bioconda/peregrine-2021
   :alt:   (downloads)
.. |docker_peregrine-2021| image:: https://quay.io/repository/biocontainers/peregrine-2021/status
   :target: https://quay.io/repository/biocontainers/peregrine-2021
.. _`peregrine-2021/tags`: https://quay.io/repository/biocontainers/peregrine-2021?tab=tags


.. raw:: html

    <script>
        var package = "peregrine-2021";
        var versions = ["0.4.13","0.4.13","0.4.13","0.4.13","0.4.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peregrine-2021/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peregrine-2021/README.html