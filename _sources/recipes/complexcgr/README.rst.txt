:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'complexcgr'
.. highlight: bash

complexcgr
==========

.. conda:recipe:: complexcgr
   :replaces_section_title:
   :noindex:

   Encoders and Image representation of DNA\/RNA sequences based on the Chaos Game Representation of DNA

   :homepage: https://github.com/AlgoLab/complexCGR
   :license: MIT
   :recipe: /`complexcgr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/complexcgr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/complexcgr/meta.yaml>`_

   


.. conda:package:: complexcgr

   |downloads_complexcgr| |docker_complexcgr|

   :versions:
      
      

      ``0.8.0-0``

      

   
   :depends on biopython: ``>=1.79.0,<2.0.0``
   :depends on matplotlib-base: ``>=3.4.2,<4.0.0``
   :depends on numpy: ``>=1.22.3,<2.0.0``
   :depends on pillow: ``>=10.0.0,<11.0.0``
   :depends on python: ``>=3.9.0,<4.0.0``
   :depends on tqdm: ``>=4.61.2,<5.0.0``

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

    pixi global install complexcgr

to add into an existing workspace instead, run::

    pixi add complexcgr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install complexcgr

Alternatively, to install into a new environment, run::

    conda create -n envname complexcgr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/complexcgr:<tag>

(see `complexcgr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_complexcgr| image:: https://img.shields.io/conda/dn/bioconda/complexcgr.svg?style=flat
   :target: https://anaconda.org/bioconda/complexcgr
   :alt:   (downloads)
.. |docker_complexcgr| image:: https://quay.io/repository/biocontainers/complexcgr/status
   :target: https://quay.io/repository/biocontainers/complexcgr
.. _`complexcgr/tags`: https://quay.io/repository/biocontainers/complexcgr?tab=tags


.. raw:: html

    <script>
        var package = "complexcgr";
        var versions = ["0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/complexcgr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/complexcgr/README.html