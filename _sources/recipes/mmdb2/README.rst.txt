:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmdb2'
.. highlight: bash

mmdb2
=====

.. conda:recipe:: mmdb2
   :replaces_section_title:
   :noindex:

   C\+\+ toolkit for working with macromolecular coordinate files.

   :homepage: https://www.ccp4.ac.uk
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`mmdb2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmdb2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmdb2/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444904027167`

   MMDB2 is a C\+\+ toolkit for working with macromolecular coordinate files.
   It provides functionality for reading\, writing\, and manipulating PDB and mmCIF files\,
   including support for crystallographic symmetry operations and molecular geometry calculations.



.. conda:package:: mmdb2

   |downloads_mmdb2| |docker_mmdb2|

   :versions:
      
      

      ``2.0.22-2``,  ``2.0.22-1``,  ``2.0.22-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pkg-config: 

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

    pixi global install mmdb2

to add into an existing workspace instead, run::

    pixi add mmdb2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mmdb2

Alternatively, to install into a new environment, run::

    conda create -n envname mmdb2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mmdb2:<tag>

(see `mmdb2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mmdb2| image:: https://img.shields.io/conda/dn/bioconda/mmdb2.svg?style=flat
   :target: https://anaconda.org/bioconda/mmdb2
   :alt:   (downloads)
.. |docker_mmdb2| image:: https://quay.io/repository/biocontainers/mmdb2/status
   :target: https://quay.io/repository/biocontainers/mmdb2
.. _`mmdb2/tags`: https://quay.io/repository/biocontainers/mmdb2?tab=tags


.. raw:: html

    <script>
        var package = "mmdb2";
        var versions = ["2.0.22","2.0.22","2.0.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmdb2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmdb2/README.html