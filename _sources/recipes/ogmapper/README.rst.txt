:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ogmapper'
.. highlight: bash

ogmapper
========

.. conda:recipe:: ogmapper
   :replaces_section_title:
   :noindex:

   A fast and light genomic mapper for short reads

   :homepage: https://github.com/vtrevino/ogmapper
   :license: GPL3 / GPLv3
   :recipe: /`ogmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogmapper/meta.yaml>`_
   :links: biotools: :biotools:`ogmapper`

   


.. conda:package:: ogmapper

   |downloads_ogmapper| |docker_ogmapper|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on wfa2-lib: ``>=2.3.5,<3.0a0``

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

    pixi global install ogmapper

to add into an existing workspace instead, run::

    pixi add ogmapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ogmapper

Alternatively, to install into a new environment, run::

    conda create -n envname ogmapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ogmapper:<tag>

(see `ogmapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ogmapper| image:: https://img.shields.io/conda/dn/bioconda/ogmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/ogmapper
   :alt:   (downloads)
.. |docker_ogmapper| image:: https://quay.io/repository/biocontainers/ogmapper/status
   :target: https://quay.io/repository/biocontainers/ogmapper
.. _`ogmapper/tags`: https://quay.io/repository/biocontainers/ogmapper?tab=tags


.. raw:: html

    <script>
        var package = "ogmapper";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ogmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ogmapper/README.html