:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autocycler'
.. highlight: bash

autocycler
==========

.. conda:recipe:: autocycler
   :replaces_section_title:
   :noindex:

   A tool for generating consensus long\-read assemblies for bacterial genomes.

   :homepage: https://github.com/rrwick/Autocycler
   :documentation: https://github.com/rrwick/Autocycler/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`autocycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autocycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autocycler/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.14642607`

   


.. conda:package:: autocycler

   |downloads_autocycler| |docker_autocycler|

   :versions:
      
      

      ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
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

    pixi global install autocycler

to add into an existing workspace instead, run::

    pixi add autocycler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install autocycler

Alternatively, to install into a new environment, run::

    conda create -n envname autocycler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/autocycler:<tag>

(see `autocycler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_autocycler| image:: https://img.shields.io/conda/dn/bioconda/autocycler.svg?style=flat
   :target: https://anaconda.org/bioconda/autocycler
   :alt:   (downloads)
.. |docker_autocycler| image:: https://quay.io/repository/biocontainers/autocycler/status
   :target: https://quay.io/repository/biocontainers/autocycler
.. _`autocycler/tags`: https://quay.io/repository/biocontainers/autocycler?tab=tags


.. raw:: html

    <script>
        var package = "autocycler";
        var versions = ["0.5.2","0.5.1","0.5.0","0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autocycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autocycler/README.html