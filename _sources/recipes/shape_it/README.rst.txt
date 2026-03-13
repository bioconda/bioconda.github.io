:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shape_it'
.. highlight: bash

shape_it
========

.. conda:recipe:: shape_it/1.0.1
   :replaces_section_title:
   :noindex:

   Shape alignment against a database of molecules

   :homepage: http://silicos-it.be.s3-website-eu-west-1.amazonaws.com/software/shape-it/1.0.1/shape-it.html
   :license: LGPL
   :recipe: /`shape_it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape_it>`_/`1.0.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape_it/1.0.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shape_it/1.0.1/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`ctb_shapeit`

   


.. conda:package:: shape_it

   |downloads_shape_it| |docker_shape_it|

   :versions:
      
      

      ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``

      

   
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on libstdcxx-ng: ``>=9.3.0``
   :depends on openbabel: ``2.4.1``

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

    pixi global install shape_it

to add into an existing workspace instead, run::

    pixi add shape_it

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shape_it

Alternatively, to install into a new environment, run::

    conda create -n envname shape_it

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shape_it:<tag>

(see `shape_it/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shape_it| image:: https://img.shields.io/conda/dn/bioconda/shape_it.svg?style=flat
   :target: https://anaconda.org/bioconda/shape_it
   :alt:   (downloads)
.. |docker_shape_it| image:: https://quay.io/repository/biocontainers/shape_it/status
   :target: https://quay.io/repository/biocontainers/shape_it
.. _`shape_it/tags`: https://quay.io/repository/biocontainers/shape_it?tab=tags


.. raw:: html

    <script>
        var package = "shape_it";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shape_it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shape_it/README.html