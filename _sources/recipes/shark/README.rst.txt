:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shark'
.. highlight: bash

shark
=====

.. conda:recipe:: shark
   :replaces_section_title:
   :noindex:

   Mapping\-free filtering of useless RNA\-Seq reads

   :homepage: https://algolab.github.io/shark/
   :license: GPL-3.0-or-later
   :recipe: /`shark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shark/meta.yaml>`_
   :links: biotools: :biotools:`shark`

   


.. conda:package:: shark

   |downloads_shark| |docker_shark|

   :versions:
      
      

      ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      

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

    pixi global install shark

to add into an existing workspace instead, run::

    pixi add shark

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shark

Alternatively, to install into a new environment, run::

    conda create -n envname shark

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shark:<tag>

(see `shark/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shark| image:: https://img.shields.io/conda/dn/bioconda/shark.svg?style=flat
   :target: https://anaconda.org/bioconda/shark
   :alt:   (downloads)
.. |docker_shark| image:: https://quay.io/repository/biocontainers/shark/status
   :target: https://quay.io/repository/biocontainers/shark
.. _`shark/tags`: https://quay.io/repository/biocontainers/shark?tab=tags


.. raw:: html

    <script>
        var package = "shark";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shark/README.html