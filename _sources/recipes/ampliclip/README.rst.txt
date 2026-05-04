:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampliclip'
.. highlight: bash

ampliclip
=========

.. conda:recipe:: ampliclip
   :replaces_section_title:
   :noindex:

   Tool to softclip reads in bam files based on amplicon primers

   :homepage: https://github.com/dnieuw/ampliclip
   :license: BSD / BSD-3-Clause
   :recipe: /`ampliclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliclip/meta.yaml>`_

   Ampliclip is a tool to softclip reads in bam files based on amplicon primers.
   It identifies primer locations using sequence alignment and correctly adjusts
   the CIGAR strings of overlapping reads.



.. conda:package:: ampliclip

   |downloads_ampliclip| |docker_ampliclip|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends on biopython: ``>=1.80``
   :depends on pysam: ``>=0.20``
   :depends on python: ``>=3.7``

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

    pixi global install ampliclip

to add into an existing workspace instead, run::

    pixi add ampliclip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ampliclip

Alternatively, to install into a new environment, run::

    conda create -n envname ampliclip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ampliclip:<tag>

(see `ampliclip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ampliclip| image:: https://img.shields.io/conda/dn/bioconda/ampliclip.svg?style=flat
   :target: https://anaconda.org/bioconda/ampliclip
   :alt:   (downloads)
.. |docker_ampliclip| image:: https://quay.io/repository/biocontainers/ampliclip/status
   :target: https://quay.io/repository/biocontainers/ampliclip
.. _`ampliclip/tags`: https://quay.io/repository/biocontainers/ampliclip?tab=tags


.. raw:: html

    <script>
        var package = "ampliclip";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampliclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampliclip/README.html