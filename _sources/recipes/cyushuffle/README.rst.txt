:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cyushuffle'
.. highlight: bash

cyushuffle
==========

.. conda:recipe:: cyushuffle
   :replaces_section_title:
   :noindex:

   A Cython wrapper over uShuffle \- a useful tool for shuffling biological sequences while preserving the k\-let counts

   :homepage: https://github.com/guma44/ushuffle
   :documentation: https://cs.usu.edu/people/MinghuiJiang/ushuffle/
   
   :license: BSD / BSD
   :recipe: /`cyushuffle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyushuffle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyushuffle/meta.yaml>`_

   


.. conda:package:: cyushuffle

   |downloads_cyushuffle| |docker_cyushuffle|

   :versions:
      
      

      ``1.1.2-7``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install cyushuffle

to add into an existing workspace instead, run::

    pixi add cyushuffle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cyushuffle

Alternatively, to install into a new environment, run::

    conda create -n envname cyushuffle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cyushuffle:<tag>

(see `cyushuffle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cyushuffle| image:: https://img.shields.io/conda/dn/bioconda/cyushuffle.svg?style=flat
   :target: https://anaconda.org/bioconda/cyushuffle
   :alt:   (downloads)
.. |docker_cyushuffle| image:: https://quay.io/repository/biocontainers/cyushuffle/status
   :target: https://quay.io/repository/biocontainers/cyushuffle
.. _`cyushuffle/tags`: https://quay.io/repository/biocontainers/cyushuffle?tab=tags


.. raw:: html

    <script>
        var package = "cyushuffle";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cyushuffle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cyushuffle/README.html