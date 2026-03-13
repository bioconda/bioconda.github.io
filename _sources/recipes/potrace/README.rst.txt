:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'potrace'
.. highlight: bash

potrace
=======

.. conda:recipe:: potrace/1.11
   :replaces_section_title:
   :noindex:

   A tool for tracing a bitmap\, which means\, transforming a bitmap into a smooth\, scalable image

   :homepage: http://potrace.sourceforge.net
   :license: GPL
   :recipe: /`potrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace>`_/`1.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace/1.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace/1.11/meta.yaml>`_

   


.. conda:package:: potrace

   |downloads_potrace| |docker_potrace|

   :versions:
      
      

      ``1.11-7``,  ``1.11-6``,  ``1.11-5``,  ``1.11-4``,  ``1.11-3``,  ``1.11-2``,  ``1.11-1``,  ``1.11-0``

      

   
   :depends on libgcc: ``>=13``
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

    pixi global install potrace

to add into an existing workspace instead, run::

    pixi add potrace

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install potrace

Alternatively, to install into a new environment, run::

    conda create -n envname potrace

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/potrace:<tag>

(see `potrace/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_potrace| image:: https://img.shields.io/conda/dn/bioconda/potrace.svg?style=flat
   :target: https://anaconda.org/bioconda/potrace
   :alt:   (downloads)
.. |docker_potrace| image:: https://quay.io/repository/biocontainers/potrace/status
   :target: https://quay.io/repository/biocontainers/potrace
.. _`potrace/tags`: https://quay.io/repository/biocontainers/potrace?tab=tags


.. raw:: html

    <script>
        var package = "potrace";
        var versions = ["1.11","1.11","1.11","1.11","1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/potrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/potrace/README.html