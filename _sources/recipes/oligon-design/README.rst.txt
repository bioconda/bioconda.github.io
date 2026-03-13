:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oligon-design'
.. highlight: bash

oligon-design
=============

.. conda:recipe:: oligon-design
   :replaces_section_title:
   :noindex:

   Simple and versatile approach to design specific oligonucleotides from large environmental datasets

   :homepage: https://github.com/MiguelMSandin/oligoN-design
   :license: GPL3 / GPL-3.0
   :recipe: /`oligon-design <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligon-design>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligon-design/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.7473194.`

   


.. conda:package:: oligon-design

   |downloads_oligon-design| |docker_oligon-design|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``,  ``0.4.0-0``

      

   
   :depends on biopython: ``>=1.83``
   :depends on glimpse: ``>=4.18.7``
   :depends on hmmer: ``>=3.4``
   :depends on mafft: ``>=7.526``
   :depends on matplotlib-base: ``>=3.10.1``
   :depends on pandas: ``>=2.1.4``
   :depends on python: ``>=3.14,<3.15.0a0``

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

    pixi global install oligon-design

to add into an existing workspace instead, run::

    pixi add oligon-design

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oligon-design

Alternatively, to install into a new environment, run::

    conda create -n envname oligon-design

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oligon-design:<tag>

(see `oligon-design/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oligon-design| image:: https://img.shields.io/conda/dn/bioconda/oligon-design.svg?style=flat
   :target: https://anaconda.org/bioconda/oligon-design
   :alt:   (downloads)
.. |docker_oligon-design| image:: https://quay.io/repository/biocontainers/oligon-design/status
   :target: https://quay.io/repository/biocontainers/oligon-design
.. _`oligon-design/tags`: https://quay.io/repository/biocontainers/oligon-design?tab=tags


.. raw:: html

    <script>
        var package = "oligon-design";
        var versions = ["1.1.0","1.0.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligon-design/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligon-design/README.html