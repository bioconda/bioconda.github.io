:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcf-regions'
.. highlight: bash

gvcf-regions
============

.. conda:recipe:: gvcf-regions
   :replaces_section_title:
   :noindex:

   Convert a gVCF file in multiple formats into a BED file of callable regions

   :homepage: https://github.com/lijiayong/gvcf_regions
   :license: GPLv3
   :recipe: /`gvcf-regions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf-regions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf-regions/meta.yaml>`_

   


.. conda:package:: gvcf-regions

   |downloads_gvcf-regions| |docker_gvcf-regions|

   :versions:
      
      

      ``2016.06.23-1``,  ``2016.06.23-0``,  ``2016.06.21-0``,  ``2016.05.24-0``,  ``2016.05.20-0``

      

   
   :depends on python: 

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

    pixi global install gvcf-regions

to add into an existing workspace instead, run::

    pixi add gvcf-regions

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gvcf-regions

Alternatively, to install into a new environment, run::

    conda create -n envname gvcf-regions

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gvcf-regions:<tag>

(see `gvcf-regions/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gvcf-regions| image:: https://img.shields.io/conda/dn/bioconda/gvcf-regions.svg?style=flat
   :target: https://anaconda.org/bioconda/gvcf-regions
   :alt:   (downloads)
.. |docker_gvcf-regions| image:: https://quay.io/repository/biocontainers/gvcf-regions/status
   :target: https://quay.io/repository/biocontainers/gvcf-regions
.. _`gvcf-regions/tags`: https://quay.io/repository/biocontainers/gvcf-regions?tab=tags


.. raw:: html

    <script>
        var package = "gvcf-regions";
        var versions = ["2016.06.23","2016.06.23","2016.06.21","2016.05.24","2016.05.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcf-regions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcf-regions/README.html