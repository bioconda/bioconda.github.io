:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabinkit'
.. highlight: bash

metabinkit
==========

.. conda:recipe:: metabinkit
   :replaces_section_title:
   :noindex:

   Set of programs to perform taxonomic binning.

   :homepage: https://github.com/envmetagen/metabinkit
   :license: GPL / GPL-3
   :recipe: /`metabinkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabinkit/meta.yaml>`_
   :links: biotools: :biotools:`metabinkit`, doi: :doi:`10.5281/zenodo.3855032`

   


.. conda:package:: metabinkit

   |downloads_metabinkit| |docker_metabinkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3-3</code>,  <code>0.2.3-2</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-5</code>,  <code>0.2.2-4</code>,  <code>0.2.2-3</code>,  <code>0.2.2-2</code>,  <code>0.2.2-1</code>,  </span></summary>
      

      ``0.2.3-3``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-5``,  ``0.2.2-4``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.9.0``
   :depends on bzip2: 
   :depends on curl: 
   :depends on entrez-direct: 
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pcre: ``>=8.45,<9.0a0``
   :depends on perl: 
   :depends on perl-archive-tar: 
   :depends on perl-json: 
   :depends on perl-list-moreutils: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-matrix: 
   :depends on r-optparse: 
   :depends on r-stringr: 
   :depends on taxonkit: ``0.6.0.*``
   :depends on zlib: 

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

    pixi global install metabinkit

to add into an existing workspace instead, run::

    pixi add metabinkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metabinkit

Alternatively, to install into a new environment, run::

    conda create -n envname metabinkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metabinkit:<tag>

(see `metabinkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metabinkit| image:: https://img.shields.io/conda/dn/bioconda/metabinkit.svg?style=flat
   :target: https://anaconda.org/bioconda/metabinkit
   :alt:   (downloads)
.. |docker_metabinkit| image:: https://quay.io/repository/biocontainers/metabinkit/status
   :target: https://quay.io/repository/biocontainers/metabinkit
.. _`metabinkit/tags`: https://quay.io/repository/biocontainers/metabinkit?tab=tags


.. raw:: html

    <script>
        var package = "metabinkit";
        var versions = ["0.2.3","0.2.3","0.2.3","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabinkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabinkit/README.html