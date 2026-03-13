:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_genome_region'
.. highlight: bash

extract_genome_region
=====================

.. conda:recipe:: extract_genome_region
   :replaces_section_title:
   :noindex:

   Given a CSV file of variable information defining the regions of interest\, return a file that contains a fasta\-formatted representation of these regions.

   :homepage: https://github.com/xguse/extract-genome-region
   :license: BSD License
   :recipe: /`extract_genome_region <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_genome_region>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_genome_region/meta.yaml>`_

   


.. conda:package:: extract_genome_region

   |downloads_extract_genome_region| |docker_extract_genome_region|

   :versions:
      
      

      ``0.0.3-3``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends on click: 
   :depends on pyfaidx: 
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

    pixi global install extract_genome_region

to add into an existing workspace instead, run::

    pixi add extract_genome_region

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install extract_genome_region

Alternatively, to install into a new environment, run::

    conda create -n envname extract_genome_region

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/extract_genome_region:<tag>

(see `extract_genome_region/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_extract_genome_region| image:: https://img.shields.io/conda/dn/bioconda/extract_genome_region.svg?style=flat
   :target: https://anaconda.org/bioconda/extract_genome_region
   :alt:   (downloads)
.. |docker_extract_genome_region| image:: https://quay.io/repository/biocontainers/extract_genome_region/status
   :target: https://quay.io/repository/biocontainers/extract_genome_region
.. _`extract_genome_region/tags`: https://quay.io/repository/biocontainers/extract_genome_region?tab=tags


.. raw:: html

    <script>
        var package = "extract_genome_region";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_genome_region/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_genome_region/README.html