:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lumpy-sv-minimal'
.. highlight: bash

lumpy-sv-minimal
================

.. conda:recipe:: lumpy-sv-minimal
   :replaces_section_title:
   :noindex:

   A general probabilistic framework for structural variant discovery. This package contains only the lumpy executable.

   :homepage: https://github.com/arq5x/lumpy-sv
   :documentation: https://github.com/arq5x/lumpy-sv/blob/v0.3.1/README.md
   
   :license: MIT / MIT
   :recipe: /`lumpy-sv-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lumpy-sv-minimal/meta.yaml>`_
   :links: doi: :doi:`10.1186/gb-2014-15-6-r84`

   


.. conda:package:: lumpy-sv-minimal

   |downloads_lumpy-sv-minimal| |docker_lumpy-sv-minimal|

   :versions:
      
      

      ``0.3.1-7``,  ``0.3.1-6``,  ``0.3.1-5``,  ``0.3.1-4``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
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

    pixi global install lumpy-sv-minimal

to add into an existing workspace instead, run::

    pixi add lumpy-sv-minimal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lumpy-sv-minimal

Alternatively, to install into a new environment, run::

    conda create -n envname lumpy-sv-minimal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lumpy-sv-minimal:<tag>

(see `lumpy-sv-minimal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lumpy-sv-minimal| image:: https://img.shields.io/conda/dn/bioconda/lumpy-sv-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/lumpy-sv-minimal
   :alt:   (downloads)
.. |docker_lumpy-sv-minimal| image:: https://quay.io/repository/biocontainers/lumpy-sv-minimal/status
   :target: https://quay.io/repository/biocontainers/lumpy-sv-minimal
.. _`lumpy-sv-minimal/tags`: https://quay.io/repository/biocontainers/lumpy-sv-minimal?tab=tags


.. raw:: html

    <script>
        var package = "lumpy-sv-minimal";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lumpy-sv-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lumpy-sv-minimal/README.html