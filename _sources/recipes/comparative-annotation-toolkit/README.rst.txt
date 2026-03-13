:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comparative-annotation-toolkit'
.. highlight: bash

comparative-annotation-toolkit
==============================

.. conda:recipe:: comparative-annotation-toolkit
   :replaces_section_title:
   :noindex:

   A straightforward end\-to\-end pipeline that takes as input a HAL\-format multiple whole genome alignment as well as a GFF3 file representing annotations on one high quality assembly in the HAL alignment\, and produces a output GFF3 annotation on all target genomes chosen

   :homepage: https://github.com/ComparativeGenomicsToolkit/Comparative-Annotation-Toolkit
   :license: APACHE / Apache 2.0
   :recipe: /`comparative-annotation-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparative-annotation-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparative-annotation-toolkit/meta.yaml>`_
   :links: doi: :doi:`10.1101/231118`

   


.. conda:package:: comparative-annotation-toolkit

   |downloads_comparative-annotation-toolkit| |docker_comparative-annotation-toolkit|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on augustus: ``>=3.3``
   :depends on bamtools: 
   :depends on bx-python: ``>=0.7.1``
   :depends on configobj: ``>=5.0``
   :depends on ete3: 
   :depends on frozendict: 
   :depends on luigi: ``>=2.5``
   :depends on numpy: ``>=1.10``
   :depends on pandas: ``>=0.18``
   :depends on pyfasta: ``>=0.5.2``
   :depends on pysam: ``>=0.10``
   :depends on python: ``2.7.*``
   :depends on samtools: ``>=1.3``
   :depends on scipy: ``>=0.18.1``
   :depends on seaborn: ``>=0.7``
   :depends on sqlalchemy: ``>=1.0``
   :depends on toil: ``>=3.5``
   :depends on ucsc-axtchain: 
   :depends on ucsc-bamtopsl: 
   :depends on ucsc-bedsort: 
   :depends on ucsc-bedtobigbed: 
   :depends on ucsc-blat: 
   :depends on ucsc-chainmergesort: 
   :depends on ucsc-clustergenes: 
   :depends on ucsc-fatotwobit: 
   :depends on ucsc-genepredtobed: 
   :depends on ucsc-genepredtofakepsl: 
   :depends on ucsc-genepredtogtf: 
   :depends on ucsc-gff3togenepred: 
   :depends on ucsc-gtftogenepred: 
   :depends on ucsc-pslcdnafilter: 
   :depends on ucsc-pslcheck: 
   :depends on ucsc-pslmap: 
   :depends on ucsc-pslmappostchain: 
   :depends on ucsc-pslpostarget: 
   :depends on ucsc-pslrecalcmatch: 
   :depends on ucsc-psltobigpsl: 
   :depends on ucsc-transmappsltogenepred: 

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

    pixi global install comparative-annotation-toolkit

to add into an existing workspace instead, run::

    pixi add comparative-annotation-toolkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install comparative-annotation-toolkit

Alternatively, to install into a new environment, run::

    conda create -n envname comparative-annotation-toolkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/comparative-annotation-toolkit:<tag>

(see `comparative-annotation-toolkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_comparative-annotation-toolkit| image:: https://img.shields.io/conda/dn/bioconda/comparative-annotation-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/comparative-annotation-toolkit
   :alt:   (downloads)
.. |docker_comparative-annotation-toolkit| image:: https://quay.io/repository/biocontainers/comparative-annotation-toolkit/status
   :target: https://quay.io/repository/biocontainers/comparative-annotation-toolkit
.. _`comparative-annotation-toolkit/tags`: https://quay.io/repository/biocontainers/comparative-annotation-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "comparative-annotation-toolkit";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comparative-annotation-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comparative-annotation-toolkit/README.html