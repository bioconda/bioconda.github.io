:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fusioncatcher'
.. highlight: bash

fusioncatcher
=============

.. conda:recipe:: fusioncatcher
   :replaces_section_title:
   :noindex:

   Finder of Somatic Fusion Genes in RNA\-seq data.

   :homepage: https://github.com/bioinformaticsorphanage/fusioncatcher
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`fusioncatcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusioncatcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fusioncatcher/meta.yaml>`_
   :links: biotools: :biotools:`fusioncatcher`, doi: :doi:`10.1101/011650`

   


.. conda:package:: fusioncatcher

   |downloads_fusioncatcher| |docker_fusioncatcher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.33-6</code>,  <code>1.33-5</code>,  <code>1.33-4</code>,  <code>1.33-3</code>,  <code>1.33-2</code>,  <code>1.33-1</code>,  <code>1.33-0</code>,  <code>1.33b-0</code>,  <code>1.30-1</code>,  </span></summary>
      

      ``1.33-6``,  ``1.33-5``,  ``1.33-4``,  ``1.33-3``,  ``1.33-2``,  ``1.33-1``,  ``1.33-0``,  ``1.33b-0``,  ``1.30-1``,  ``1.30-0``,  ``1.20-2``,  ``1.20-1``,  ``1.20-0``,  ``1.10-3``,  ``1.10-2``,  ``1.10-0``,  ``1.00-1``,  ``1.00-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: ``38.44.*``
   :depends on biopython: ``>=1.50``
   :depends on blat: ``35.*``
   :depends on bowtie: ``1.2.3.*``
   :depends on bowtie2: ``2.3.5.*``
   :depends on bwa: ``0.7.12.*``
   :depends on coreutils: 
   :depends on fastqtk: 
   :depends on fusioncatcher-seqtk: ``1.2.*``
   :depends on grep: 
   :depends on gzip: 
   :depends on lzo: 
   :depends on lzop: 
   :depends on numpy: ``1.13.1.*``
   :depends on oases: 
   :depends on openjdk: 
   :depends on openpyxl: ``2.5.0a2.*``
   :depends on parallel: ``20171222.*``
   :depends on picard: ``2.10.6.*``
   :depends on pigz: 
   :depends on python: ``<3``
   :depends on samtools: ``0.1.19.*``
   :depends on sra-tools: ``2.9.6.*``
   :depends on star: ``2.7.2b.*``
   :depends on tbb: ``2020.2.*``
   :depends on ucsc-fatotwobit: 
   :depends on ucsc-liftover: 
   :depends on velvet: ``1.2.10.*``
   :depends on wget: 
   :depends on xlrd: ``1.0.0.*``
   :depends on zip: 

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

    pixi global install fusioncatcher

to add into an existing workspace instead, run::

    pixi add fusioncatcher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fusioncatcher

Alternatively, to install into a new environment, run::

    conda create -n envname fusioncatcher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fusioncatcher:<tag>

(see `fusioncatcher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fusioncatcher| image:: https://img.shields.io/conda/dn/bioconda/fusioncatcher.svg?style=flat
   :target: https://anaconda.org/bioconda/fusioncatcher
   :alt:   (downloads)
.. |docker_fusioncatcher| image:: https://quay.io/repository/biocontainers/fusioncatcher/status
   :target: https://quay.io/repository/biocontainers/fusioncatcher
.. _`fusioncatcher/tags`: https://quay.io/repository/biocontainers/fusioncatcher?tab=tags


.. raw:: html

    <script>
        var package = "fusioncatcher";
        var versions = ["1.33","1.33","1.33","1.33","1.33"];
    </script>





Notes
-----
download\-human\-db.sh should be updated when new version of FusionCatcher is released.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fusioncatcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fusioncatcher/README.html