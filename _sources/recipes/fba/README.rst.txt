:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fba'
.. highlight: bash

fba
===

.. conda:recipe:: fba
   :replaces_section_title:
   :noindex:

   Tools for single\-cell feature barcoding analysis. Citation\: Duan\, et al \(2021\) \<doi\:10.1093\/bioinformatics\/btab375\>.

   :homepage: https://github.com/jlduan/fba
   :documentation: https://jlduan.github.io/fba
   
   :license: MIT
   :recipe: /`fba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fba/meta.yaml>`_

   \'fba is a flexible and streamlined toolbox for quality control\, quantification\, demultiplexing of various single\-cell feature barcoding assays. It can be applied to customized feature barcoding specifications\, including different CRISPR constructs or targeted enriched transcripts. fba allows users to customize a wide range of parameters for the quantification and demultiplexing process. fba also has a user\-friendly quality control module\, which is helpful in troubleshooting feature barcoding experiments.\'



.. conda:package:: fba

   |downloads_fba| |docker_fba|

   :versions:
      
      

      ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10.post1-0``

      

   
   :depends on dnaio: ``>=0.10.0``
   :depends on hdbscan: ``>=0.8.21``
   :depends on matplotlib-base: ``>=3.3``
   :depends on numpy: ``>=1.19.0``
   :depends on pandas: ``>=1.0.0``
   :depends on polyleven: ``>=0.5``
   :depends on pyclustering: ``>=0.10.1``
   :depends on pysam: ``>=0.14.0``
   :depends on python: ``>=3.6``
   :depends on regex: 
   :depends on scikit-learn: ``>=0.23.0``
   :depends on scipy: ``>=1.5.0``
   :depends on seaborn: ``>=0.10.0``
   :depends on statsmodels: ``>=0.11.1``
   :depends on umap-learn: 
   :depends on umi_tools: ``>=1.0.0``

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

    pixi global install fba

to add into an existing workspace instead, run::

    pixi add fba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fba

Alternatively, to install into a new environment, run::

    conda create -n envname fba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fba:<tag>

(see `fba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fba| image:: https://img.shields.io/conda/dn/bioconda/fba.svg?style=flat
   :target: https://anaconda.org/bioconda/fba
   :alt:   (downloads)
.. |docker_fba| image:: https://quay.io/repository/biocontainers/fba/status
   :target: https://quay.io/repository/biocontainers/fba
.. _`fba/tags`: https://quay.io/repository/biocontainers/fba?tab=tags


.. raw:: html

    <script>
        var package = "fba";
        var versions = ["0.0.13","0.0.12","0.0.11","0.0.10.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fba/README.html