:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomic_regions'
.. highlight: bash

genomic_regions
===============

.. conda:recipe:: genomic_regions
   :replaces_section_title:
   :noindex:

   Consistently handle genomic regions

   :homepage: https://github.com/vaquerizaslab/genomic_regions
   :documentation: https://vaquerizaslab.github.io/genomic_regions
   
   :license: MIT
   :recipe: /`genomic_regions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomic_regions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomic_regions/meta.yaml>`_

   


.. conda:package:: genomic_regions

   |downloads_genomic_regions| |docker_genomic_regions|

   :versions:
      
      

      ``0.0.10-0``,  ``0.0.9-0``

      

   
   :depends on future: 
   :depends on intervaltree: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybedtools: ``>=0.8.0``
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: ``>=3.6``

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

    pixi global install genomic_regions

to add into an existing workspace instead, run::

    pixi add genomic_regions

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomic_regions

Alternatively, to install into a new environment, run::

    conda create -n envname genomic_regions

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomic_regions:<tag>

(see `genomic_regions/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomic_regions| image:: https://img.shields.io/conda/dn/bioconda/genomic_regions.svg?style=flat
   :target: https://anaconda.org/bioconda/genomic_regions
   :alt:   (downloads)
.. |docker_genomic_regions| image:: https://quay.io/repository/biocontainers/genomic_regions/status
   :target: https://quay.io/repository/biocontainers/genomic_regions
.. _`genomic_regions/tags`: https://quay.io/repository/biocontainers/genomic_regions?tab=tags


.. raw:: html

    <script>
        var package = "genomic_regions";
        var versions = ["0.0.10","0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomic_regions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomic_regions/README.html