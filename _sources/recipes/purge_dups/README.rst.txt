:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge_dups'
.. highlight: bash

purge_dups
==========

.. conda:recipe:: purge_dups
   :replaces_section_title:
   :noindex:

   purge\_dups is a package used to purge haplotigs and overlaps in an assembly based on read depth.

   :homepage: https://github.com/dfguan/purge_dups
   :documentation: https://github.com/dfguan/purge_dups/blob/v{[ version }}/README.md
   
   :license: MIT / MIT
   :recipe: /`purge_dups <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_dups>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_dups/meta.yaml>`_
   :links: biotools: :biotools:`purge_dups`, usegalaxy-eu: :usegalaxy-eu:`purge_dups`, doi: :doi:`10.1093/bioinformatics/btaa025`

   


.. conda:package:: purge_dups

   |downloads_purge_dups| |docker_purge_dups|

   :versions:
      
      

      ``1.2.6-3``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-2``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.0.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: 
   :depends on minimap2: 
   :depends on purge-dups-runner: 
   :depends on python: ``>=3``

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

    pixi global install purge_dups

to add into an existing workspace instead, run::

    pixi add purge_dups

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install purge_dups

Alternatively, to install into a new environment, run::

    conda create -n envname purge_dups

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/purge_dups:<tag>

(see `purge_dups/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_purge_dups| image:: https://img.shields.io/conda/dn/bioconda/purge_dups.svg?style=flat
   :target: https://anaconda.org/bioconda/purge_dups
   :alt:   (downloads)
.. |docker_purge_dups| image:: https://quay.io/repository/biocontainers/purge_dups/status
   :target: https://quay.io/repository/biocontainers/purge_dups
.. _`purge_dups/tags`: https://quay.io/repository/biocontainers/purge_dups?tab=tags


.. raw:: html

    <script>
        var package = "purge_dups";
        var versions = ["1.2.6","1.2.6","1.2.6","1.2.6","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge_dups/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge_dups/README.html