:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gci'
.. highlight: bash

gci
===

.. conda:recipe:: gci
   :replaces_section_title:
   :noindex:

   A program for assessing genome contiguity.

   :homepage: https://github.com/yeeus/GCI
   :documentation: https://github.com/yeeus/GCI/blob/v1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`gci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gci/meta.yaml>`_

   


.. conda:package:: gci

   |downloads_gci| |docker_gci|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on biopython: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.10``

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

    pixi global install gci

to add into an existing workspace instead, run::

    pixi add gci

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gci

Alternatively, to install into a new environment, run::

    conda create -n envname gci

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gci:<tag>

(see `gci/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gci| image:: https://img.shields.io/conda/dn/bioconda/gci.svg?style=flat
   :target: https://anaconda.org/bioconda/gci
   :alt:   (downloads)
.. |docker_gci| image:: https://quay.io/repository/biocontainers/gci/status
   :target: https://quay.io/repository/biocontainers/gci
.. _`gci/tags`: https://quay.io/repository/biocontainers/gci?tab=tags


.. raw:: html

    <script>
        var package = "gci";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gci/README.html