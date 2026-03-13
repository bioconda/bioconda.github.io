:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sradb'
.. highlight: bash

bioconductor-sradb
==================

.. conda:recipe:: bioconductor-sradb
   :replaces_section_title:
   :noindex:

   A compilation of metadata from NCBI SRA and tools

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SRAdb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sradb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sradb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sradb/meta.yaml>`_
   :links: biotools: :biotools:`sradb`

   The Sequence Read Archive \(SRA\) is the largest public repository of sequencing data from the next generation of sequencing platforms including Roche 454 GS System\, Illumina Genome Analyzer\, Applied Biosystems SOLiD System\, Helicos Heliscope\, and others. However\, finding data of interest can be challenging using current tools. SRAdb is an attempt to make access to the metadata associated with submission\, study\, sample\, experiment and run much more feasible. This is accomplished by parsing all the NCBI SRA metadata into a SQLite database that can be stored and queried locally. Fulltext search in the package make querying metadata very flexible and powerful.  fastq and sra files can be downloaded for doing alignment locally. Beside ftp protocol\, the SRAdb has funcitons supporting fastp protocol \(ascp from Aspera Connect\) for faster downloading large data files over long distance. The SQLite database is updated regularly as new data is added to SRA and can be downloaded at will for the most up\-to\-date metadata.


.. conda:package:: bioconductor-sradb

   |downloads_bioconductor-sradb| |docker_bioconductor-sradb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.2-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-r.utils: 
   :depends on r-rcurl: 
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-sradb

to add into an existing workspace instead, run::

    pixi add bioconductor-sradb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sradb

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sradb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sradb:<tag>

(see `bioconductor-sradb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sradb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sradb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sradb
   :alt:   (downloads)
.. |docker_bioconductor-sradb| image:: https://quay.io/repository/biocontainers/bioconductor-sradb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sradb
.. _`bioconductor-sradb/tags`: https://quay.io/repository/biocontainers/bioconductor-sradb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sradb";
        var versions = ["1.72.0","1.64.0","1.62.0","1.60.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sradb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sradb/README.html