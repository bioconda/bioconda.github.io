:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clipper'
.. highlight: bash

clipper
=======

.. conda:recipe:: clipper
   :replaces_section_title:
   :noindex:

   Crystallographic automation and complex data manipulation libraries.

   :homepage: https://www.ccp4.ac.uk
   :license: GPL2 / GPL-2.0-only AND GPL-2.1-only
   :recipe: /`clipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipper/meta.yaml>`_
   :links: doi: :doi:`10.1080/0889311031000069326`

   Clipper is an object oriented library for the storage and manipulation of X\-ray data
   and electron density maps\, and for the performance of all forms of crystallographic
   computations.



.. conda:package:: clipper

   |downloads_clipper| |docker_clipper|

   :versions:
      
      

      ``2.1.20180802-1``,  ``2.1.20180802-0``

      

   
   :depends on libccp4: ``>=8.0.0,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``
   :depends on libstdcxx: ``>=13``
   :depends on mmdb2: ``>=2.0.22,<3.0a0``

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

    pixi global install clipper

to add into an existing workspace instead, run::

    pixi add clipper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clipper

Alternatively, to install into a new environment, run::

    conda create -n envname clipper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clipper:<tag>

(see `clipper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clipper| image:: https://img.shields.io/conda/dn/bioconda/clipper.svg?style=flat
   :target: https://anaconda.org/bioconda/clipper
   :alt:   (downloads)
.. |docker_clipper| image:: https://quay.io/repository/biocontainers/clipper/status
   :target: https://quay.io/repository/biocontainers/clipper
.. _`clipper/tags`: https://quay.io/repository/biocontainers/clipper?tab=tags


.. raw:: html

    <script>
        var package = "clipper";
        var versions = ["2.1.20180802","2.1.20180802"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clipper/README.html