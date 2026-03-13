:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harvest-variants'
.. highlight: bash

harvest-variants
================

.. conda:recipe:: harvest-variants
   :replaces_section_title:
   :noindex:

   Harvest Variants is a pipeline for variant calling on SARS\-CoV\-2 samples

   :homepage: https://gitlab.com/treangenlab/sars-cov-2-harvest-variants
   :license: MIT
   :recipe: /`harvest-variants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harvest-variants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harvest-variants/meta.yaml>`_

   


.. conda:package:: harvest-variants

   |downloads_harvest-variants| |docker_harvest-variants|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.1-2``,  ``0.3.1-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends on bcftools: ``>=1.15``
   :depends on bedtools: ``>=2.30.0``
   :depends on biopython: ``>=1.79``
   :depends on bwa: ``>=0.7.17``
   :depends on fastp: ``>=0.22``
   :depends on fastqc: ``>=0.11.9``
   :depends on lofreq: ``>=2.1.3``
   :depends on parsnp: ``>=1.7.4``
   :depends on python: ``>=3.6``
   :depends on pyvcf: ``>=0.6.8``
   :depends on samtools: ``>=1.15``
   :depends on snpeff: ``>=5.1``
   :depends on sra-tools: ``2.10.9.*``

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

    pixi global install harvest-variants

to add into an existing workspace instead, run::

    pixi add harvest-variants

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install harvest-variants

Alternatively, to install into a new environment, run::

    conda create -n envname harvest-variants

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/harvest-variants:<tag>

(see `harvest-variants/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_harvest-variants| image:: https://img.shields.io/conda/dn/bioconda/harvest-variants.svg?style=flat
   :target: https://anaconda.org/bioconda/harvest-variants
   :alt:   (downloads)
.. |docker_harvest-variants| image:: https://quay.io/repository/biocontainers/harvest-variants/status
   :target: https://quay.io/repository/biocontainers/harvest-variants
.. _`harvest-variants/tags`: https://quay.io/repository/biocontainers/harvest-variants?tab=tags


.. raw:: html

    <script>
        var package = "harvest-variants";
        var versions = ["1.1.0","1.0.1","1.0.0","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harvest-variants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harvest-variants/README.html