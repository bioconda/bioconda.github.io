:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tassel'
.. highlight: bash

tassel
======

.. conda:recipe:: tassel
   :replaces_section_title:
   :noindex:

   TASSEL is a software package to evaluate traits associations\, evolutionary patterns\, and linkage disequilibrium.

   :homepage: https://www.maizegenetics.net/tassel
   :license: LGPL V2.1
   :recipe: /`tassel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tassel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tassel/meta.yaml>`_

   


.. conda:package:: tassel

   |downloads_tassel| |docker_tassel|

   :versions:
      
      

      ``5.2.89-0``,  ``5.2.40-3``,  ``5.2.40-2``,  ``5.2.40-1``,  ``5.2.40-0``,  ``4.3.15-1``,  ``4.3.15-0``,  ``3.0.174-1``,  ``3.0.174-0``

      

   
   :depends on openjdk: ``>=8.0``
   :depends on perl: 

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

    pixi global install tassel

to add into an existing workspace instead, run::

    pixi add tassel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tassel

Alternatively, to install into a new environment, run::

    conda create -n envname tassel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tassel:<tag>

(see `tassel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tassel| image:: https://img.shields.io/conda/dn/bioconda/tassel.svg?style=flat
   :target: https://anaconda.org/bioconda/tassel
   :alt:   (downloads)
.. |docker_tassel| image:: https://quay.io/repository/biocontainers/tassel/status
   :target: https://quay.io/repository/biocontainers/tassel
.. _`tassel/tags`: https://quay.io/repository/biocontainers/tassel?tab=tags


.. raw:: html

    <script>
        var package = "tassel";
        var versions = ["5.2.89","5.2.40","5.2.40","5.2.40","5.2.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tassel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tassel/README.html