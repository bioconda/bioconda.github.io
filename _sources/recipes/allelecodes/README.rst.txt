:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'allelecodes'
.. highlight: bash

allelecodes
===========

.. conda:recipe:: allelecodes
   :replaces_section_title:
   :noindex:

   Allele Code Assignment Algorithm for cgMLST schemes

   :homepage: https://github.com/ncezid-biome/AlleleCodes
   :license: GPL / GPL-3.0
   :recipe: /`allelecodes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allelecodes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allelecodes/meta.yaml>`_

   This tool assigns nearest\-neighbor hierarchical codes to allele profiles using cgMLST schemes\, as used in public health genomics.



.. conda:package:: allelecodes

   |downloads_allelecodes| |docker_allelecodes|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends on python: ``>=3.13,<3.14.0a0``

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

    pixi global install allelecodes

to add into an existing workspace instead, run::

    pixi add allelecodes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install allelecodes

Alternatively, to install into a new environment, run::

    conda create -n envname allelecodes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/allelecodes:<tag>

(see `allelecodes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_allelecodes| image:: https://img.shields.io/conda/dn/bioconda/allelecodes.svg?style=flat
   :target: https://anaconda.org/bioconda/allelecodes
   :alt:   (downloads)
.. |docker_allelecodes| image:: https://quay.io/repository/biocontainers/allelecodes/status
   :target: https://quay.io/repository/biocontainers/allelecodes
.. _`allelecodes/tags`: https://quay.io/repository/biocontainers/allelecodes?tab=tags


.. raw:: html

    <script>
        var package = "allelecodes";
        var versions = ["2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/allelecodes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/allelecodes/README.html