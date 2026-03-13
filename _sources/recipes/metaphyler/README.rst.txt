:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaphyler'
.. highlight: bash

metaphyler
==========

.. conda:recipe:: metaphyler
   :replaces_section_title:
   :noindex:

   Estimating Bacterial Composition from Metagenomic Sequences

   :homepage: http://metaphyler.cbcb.umd.edu/
   :license: Artistic License 2.0
   :recipe: /`metaphyler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphyler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaphyler/meta.yaml>`_

   


.. conda:package:: metaphyler

   |downloads_metaphyler| |docker_metaphyler|

   :versions:
      
      

      ``1.25-8``,  ``1.25-7``,  ``1.25-6``,  ``1.25-5``,  ``1.25-4``,  ``1.25-3``,  ``1.25-2``,  ``1.25-1``,  ``1.25-0``

      

   
   :depends on blast-legacy: 
   :depends on libgcc: ``>=13``
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

    pixi global install metaphyler

to add into an existing workspace instead, run::

    pixi add metaphyler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metaphyler

Alternatively, to install into a new environment, run::

    conda create -n envname metaphyler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metaphyler:<tag>

(see `metaphyler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metaphyler| image:: https://img.shields.io/conda/dn/bioconda/metaphyler.svg?style=flat
   :target: https://anaconda.org/bioconda/metaphyler
   :alt:   (downloads)
.. |docker_metaphyler| image:: https://quay.io/repository/biocontainers/metaphyler/status
   :target: https://quay.io/repository/biocontainers/metaphyler
.. _`metaphyler/tags`: https://quay.io/repository/biocontainers/metaphyler?tab=tags


.. raw:: html

    <script>
        var package = "metaphyler";
        var versions = ["1.25","1.25","1.25","1.25","1.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaphyler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaphyler/README.html