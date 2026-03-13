:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wakhan'
.. highlight: bash

wakhan
======

.. conda:recipe:: wakhan
   :replaces_section_title:
   :noindex:

   A tool to analyze haplotype\-specific chromosome\-scale somatic copy number aberrations and aneuploidy using long reads.

   :homepage: https://github.com/KolmogorovLab/Wakhan
   :license: MIT / MIT
   :recipe: /`wakhan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wakhan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wakhan/meta.yaml>`_

   


.. conda:package:: wakhan

   |downloads_wakhan| |docker_wakhan|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends on bcftools: ``>=1.14``
   :depends on intervaltree: 
   :depends on matplotlib-base: 
   :depends on numpy: ``1.24.4``
   :depends on pandas: 
   :depends on parse-vcf: 
   :depends on plotly: ``5.24.1``
   :depends on pyfaidx: 
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on python-kaleido: ``<1.0``
   :depends on ruptures: 
   :depends on samtools: ``>=1.14``
   :depends on scikit-learn: ``1.2.0``
   :depends on scipy: ``1.9.2``
   :depends on setuptools: ``<81``
   :depends on vcf_parser: 

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

    pixi global install wakhan

to add into an existing workspace instead, run::

    pixi add wakhan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wakhan

Alternatively, to install into a new environment, run::

    conda create -n envname wakhan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wakhan:<tag>

(see `wakhan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wakhan| image:: https://img.shields.io/conda/dn/bioconda/wakhan.svg?style=flat
   :target: https://anaconda.org/bioconda/wakhan
   :alt:   (downloads)
.. |docker_wakhan| image:: https://quay.io/repository/biocontainers/wakhan/status
   :target: https://quay.io/repository/biocontainers/wakhan
.. _`wakhan/tags`: https://quay.io/repository/biocontainers/wakhan?tab=tags


.. raw:: html

    <script>
        var package = "wakhan";
        var versions = ["0.4.2","0.4.1","0.2.0","0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wakhan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wakhan/README.html