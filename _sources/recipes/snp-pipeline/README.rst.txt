:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-pipeline'
.. highlight: bash

snp-pipeline
============

.. conda:recipe:: snp-pipeline
   :replaces_section_title:
   :noindex:

   Script and functions for SNP matrix construction

   :homepage: https://github.com/CFSAN-Biostatistics/snp-pipeline
   :license: BSD License
   :recipe: /`snp-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pipeline/meta.yaml>`_

   


.. conda:package:: snp-pipeline

   |downloads_snp-pipeline| |docker_snp-pipeline|

   :versions:
      
      

      ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``1.0.1-2``,  ``1.0.1-0``,  ``0.7.0-0``,  ``0.5.0-0``

      

   
   :depends on biopython: 
   :depends on jobrunner: 
   :depends on packaging: 
   :depends on psutil: 
   :depends on python: 
   :depends on pyvcf: ``>=0.6.7``
   :depends on setuptools: 

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

    pixi global install snp-pipeline

to add into an existing workspace instead, run::

    pixi add snp-pipeline

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snp-pipeline

Alternatively, to install into a new environment, run::

    conda create -n envname snp-pipeline

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snp-pipeline:<tag>

(see `snp-pipeline/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snp-pipeline| image:: https://img.shields.io/conda/dn/bioconda/snp-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-pipeline
   :alt:   (downloads)
.. |docker_snp-pipeline| image:: https://quay.io/repository/biocontainers/snp-pipeline/status
   :target: https://quay.io/repository/biocontainers/snp-pipeline
.. _`snp-pipeline/tags`: https://quay.io/repository/biocontainers/snp-pipeline?tab=tags


.. raw:: html

    <script>
        var package = "snp-pipeline";
        var versions = ["2.2.1","2.2.0","2.1.1","2.1.0","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-pipeline/README.html