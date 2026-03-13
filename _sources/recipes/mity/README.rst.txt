:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mity'
.. highlight: bash

mity
====

.. conda:recipe:: mity
   :replaces_section_title:
   :noindex:

   Mity is a bioinformatic analysis pipeline designed to call mitochondrial SNV and INDEL variants from Whole Genome Sequencing \(WGS\) data.

   :homepage: https://github.com/KCCG/mity
   :documentation: https://github.com/KCCG/mity/blob/2.0.1/README.md
   
   :license: MIT / MIT
   :recipe: /`mity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mity/meta.yaml>`_
   :links: biotools: :biotools:`mity`, doi: :doi:`10.26502/jbsb.5107074`

   \*Mity\* can\:
   \- identify very low\-heteroplasmy variants\, even \<1\% heteroplasmy when there is sufficient read\-depth \(eg \>1000x\)
   \- filter out common artefacts that arise from high\-depth sequencing
   \- easily integrate with existing nuclear DNA analysis pipelines \(mity merge\)
   \- provide an annotated report\, designed for clinicians and researchers to interrogate



.. conda:package:: mity

   |downloads_mity| |docker_mity|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on freebayes: ``>=1.2``
   :depends on gsort: ``>=0.1.4``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: 
   :depends on python: ``>=3.10``
   :depends on pyyaml: 
   :depends on scipy: 
   :depends on vcf2pandas: 
   :depends on vcfanno: 
   :depends on xlsxwriter: 

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

    pixi global install mity

to add into an existing workspace instead, run::

    pixi add mity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mity

Alternatively, to install into a new environment, run::

    conda create -n envname mity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mity:<tag>

(see `mity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mity| image:: https://img.shields.io/conda/dn/bioconda/mity.svg?style=flat
   :target: https://anaconda.org/bioconda/mity
   :alt:   (downloads)
.. |docker_mity| image:: https://quay.io/repository/biocontainers/mity/status
   :target: https://quay.io/repository/biocontainers/mity
.. _`mity/tags`: https://quay.io/repository/biocontainers/mity?tab=tags


.. raw:: html

    <script>
        var package = "mity";
        var versions = ["2.0.1","2.0.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mity/README.html