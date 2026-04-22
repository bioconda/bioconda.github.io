:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'divvier'
.. highlight: bash

divvier
=======

.. conda:recipe:: divvier
   :replaces_section_title:
   :noindex:

   A program for removing MSA uncertainty.

   :homepage: https://github.com/simonwhelan/Divvier
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`divvier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/divvier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/divvier/meta.yaml>`_

   


.. conda:package:: divvier

   |downloads_divvier| |docker_divvier|

   :versions:
      
      

      ``1.01-5``,  ``1.01-4``,  ``1.01-3``,  ``1.01-2``,  ``1.01-1``,  ``1.01-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install divvier

to add into an existing workspace instead, run::

    pixi add divvier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install divvier

Alternatively, to install into a new environment, run::

    conda create -n envname divvier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/divvier:<tag>

(see `divvier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_divvier| image:: https://img.shields.io/conda/dn/bioconda/divvier.svg?style=flat
   :target: https://anaconda.org/bioconda/divvier
   :alt:   (downloads)
.. |docker_divvier| image:: https://quay.io/repository/biocontainers/divvier/status
   :target: https://quay.io/repository/biocontainers/divvier
.. _`divvier/tags`: https://quay.io/repository/biocontainers/divvier?tab=tags


.. raw:: html

    <script>
        var package = "divvier";
        var versions = ["1.01","1.01","1.01","1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/divvier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/divvier/README.html