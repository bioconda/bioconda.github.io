:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair'
.. highlight: bash

clair
=====

.. conda:recipe:: clair
   :replaces_section_title:
   :noindex:

   Single\-molecule sequencing technologies have emerged in recent years and revolutionized structural variant calling\, complex genome assembly\, and epigenetic mark detection. However\, the lack of a highly accurate small variant caller has limited the new technologies from being more widely used. In this study\, we present Clair\, the successor to Clairvoyante\, a program for fast and accurate germline small variant calling\, using single molecule sequencing data. For ONT data\, Clair achieves the best precision\, recall and speed as compared to several competing programs\, including Clairvoyante\, Longshot and Medaka. Through studying the missed variants and benchmarking intentionally overfitted models\, we found that Clair may be approaching the limit of possible accuracy for germline small variant calling using pileup data and deep neural networks.

   :homepage: https://github.com/HKU-BAL/Clair
   :license: AGPLv3
   :recipe: /`clair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair/meta.yaml>`_

   


.. conda:package:: clair

   |downloads_clair| |docker_clair|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.7-0</code>,  <code>2.0.6-1</code>,  <code>2.0.6-0</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  </span></summary>
      

      ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.7-0``,  ``2.0.6-1``,  ``2.0.6-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on intervaltree: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.17,<1.18``
   :depends on parallel: 
   :depends on pigz: 
   :depends on pip: 
   :depends on pypy3.6: 
   :depends on pysam: 
   :depends on python: ``>=3,<3.8``
   :depends on python-blosc: 
   :depends on samtools: 
   :depends on tensorflow: ``>=1.13,<1.14``
   :depends on vcflib: 
   :depends on zstd: 

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

    pixi global install clair

to add into an existing workspace instead, run::

    pixi add clair

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clair

Alternatively, to install into a new environment, run::

    conda create -n envname clair

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clair:<tag>

(see `clair/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clair| image:: https://img.shields.io/conda/dn/bioconda/clair.svg?style=flat
   :target: https://anaconda.org/bioconda/clair
   :alt:   (downloads)
.. |docker_clair| image:: https://quay.io/repository/biocontainers/clair/status
   :target: https://quay.io/repository/biocontainers/clair
.. _`clair/tags`: https://quay.io/repository/biocontainers/clair?tab=tags


.. raw:: html

    <script>
        var package = "clair";
        var versions = ["2.1.1","2.1.1","2.1.0","2.1.0","2.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair/README.html