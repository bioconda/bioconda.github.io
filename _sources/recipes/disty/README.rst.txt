:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'disty'
.. highlight: bash

disty
=====

.. conda:recipe:: disty
   :replaces_section_title:
   :noindex:

   Disty McMatrixface \- compute a distance matrix from a core genome alignment file.

   :homepage: https://github.com/c2-d2/disty
   :license: MIT
   :recipe: /`disty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disty/meta.yaml>`_

   


.. conda:package:: disty

   |downloads_disty| |docker_disty|

   :versions:
      
      

      ``0.1.0-8``,  ``0.1.0-7``,  ``0.1.0-6``,  ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on libcxx: ``>=18``
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

    pixi global install disty

to add into an existing workspace instead, run::

    pixi add disty

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install disty

Alternatively, to install into a new environment, run::

    conda create -n envname disty

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/disty:<tag>

(see `disty/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_disty| image:: https://img.shields.io/conda/dn/bioconda/disty.svg?style=flat
   :target: https://anaconda.org/bioconda/disty
   :alt:   (downloads)
.. |docker_disty| image:: https://quay.io/repository/biocontainers/disty/status
   :target: https://quay.io/repository/biocontainers/disty
.. _`disty/tags`: https://quay.io/repository/biocontainers/disty?tab=tags


.. raw:: html

    <script>
        var package = "disty";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/disty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/disty/README.html