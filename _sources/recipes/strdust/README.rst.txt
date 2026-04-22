:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strdust'
.. highlight: bash

strdust
=======

.. conda:recipe:: strdust
   :replaces_section_title:
   :noindex:

   Tandem repeat genotyper for long reads.

   :homepage: https://github.com/wdecoster/STRdust
   :documentation: https://github.com/wdecoster/STRdust/blob/v0.16.0/README.md
   
   :license: MIT / MIT
   :recipe: /`strdust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strdust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strdust/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.279265.124`

   


.. conda:package:: strdust

   |downloads_strdust| |docker_strdust|

   :versions:
      
      

      ``0.16.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.11.4-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.8.2-0``,  ``0.8.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install strdust

to add into an existing workspace instead, run::

    pixi add strdust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strdust

Alternatively, to install into a new environment, run::

    conda create -n envname strdust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strdust:<tag>

(see `strdust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strdust| image:: https://img.shields.io/conda/dn/bioconda/strdust.svg?style=flat
   :target: https://anaconda.org/bioconda/strdust
   :alt:   (downloads)
.. |docker_strdust| image:: https://quay.io/repository/biocontainers/strdust/status
   :target: https://quay.io/repository/biocontainers/strdust
.. _`strdust/tags`: https://quay.io/repository/biocontainers/strdust?tab=tags


.. raw:: html

    <script>
        var package = "strdust";
        var versions = ["0.16.0","0.14.0","0.13.0","0.11.4","0.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strdust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strdust/README.html