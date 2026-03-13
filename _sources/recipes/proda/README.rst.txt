:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proda'
.. highlight: bash

proda
=====

.. conda:recipe:: proda
   :replaces_section_title:
   :noindex:

   ProDA \- Multiple alignment of protein sequences with repeated and shuffled elements.

   :homepage: http://proda.stanford.edu
   :documentation: http://proda.stanford.edu/manual.htm
   
   :license: Public Domain Software
   :recipe: /`proda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proda/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkl511`

   


.. conda:package:: proda

   |downloads_proda| |docker_proda|

   :versions:
      
      

      ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
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

    pixi global install proda

to add into an existing workspace instead, run::

    pixi add proda

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proda

Alternatively, to install into a new environment, run::

    conda create -n envname proda

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proda:<tag>

(see `proda/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proda| image:: https://img.shields.io/conda/dn/bioconda/proda.svg?style=flat
   :target: https://anaconda.org/bioconda/proda
   :alt:   (downloads)
.. |docker_proda| image:: https://quay.io/repository/biocontainers/proda/status
   :target: https://quay.io/repository/biocontainers/proda
.. _`proda/tags`: https://quay.io/repository/biocontainers/proda?tab=tags


.. raw:: html

    <script>
        var package = "proda";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proda/README.html