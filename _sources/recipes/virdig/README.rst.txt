:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virdig'
.. highlight: bash

virdig
======

.. conda:recipe:: virdig
   :replaces_section_title:
   :noindex:

   A de novo transcriptome assembler for coronavirus.

   :homepage: https://github.com/Limh616/VirDiG
   :license: MIT / MIT
   :recipe: /`virdig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virdig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virdig/meta.yaml>`_

   


.. conda:package:: virdig

   |downloads_virdig| |docker_virdig|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on boost-cpp: 
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

    pixi global install virdig

to add into an existing workspace instead, run::

    pixi add virdig

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install virdig

Alternatively, to install into a new environment, run::

    conda create -n envname virdig

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/virdig:<tag>

(see `virdig/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_virdig| image:: https://img.shields.io/conda/dn/bioconda/virdig.svg?style=flat
   :target: https://anaconda.org/bioconda/virdig
   :alt:   (downloads)
.. |docker_virdig| image:: https://quay.io/repository/biocontainers/virdig/status
   :target: https://quay.io/repository/biocontainers/virdig
.. _`virdig/tags`: https://quay.io/repository/biocontainers/virdig?tab=tags


.. raw:: html

    <script>
        var package = "virdig";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virdig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virdig/README.html