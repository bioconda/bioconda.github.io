:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'excludonfinder'
.. highlight: bash

excludonfinder
==============

.. conda:recipe:: excludonfinder
   :replaces_section_title:
   :noindex:

   A tool for identifying and analyzing excludons in genomic data using RNA\-seq data.

   :homepage: https://github.com/Alvarosmb/ExcludonFinder
   :license: MIT / MIT
   :recipe: /`excludonfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/excludonfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/excludonfinder/meta.yaml>`_

   


.. conda:package:: excludonfinder

   |downloads_excludonfinder| |docker_excludonfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.0-0</code>,  <code>0.1.7-0</code>,  <code>0.1.5-0</code>,  <code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-3</code>,  <code>0.1.1-2</code>,  </span></summary>
      

      ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rtracklayer: ``>=1.54.0``
   :depends on bwa-mem2: ``>=2.2.1``
   :depends on minimap2: ``>=2.24``
   :depends on r-base: ``>=4.1``
   :depends on r-biocmanager: ``>=1.30.19``
   :depends on r-data.table: ``>=1.14``
   :depends on r-doparallel: ``>=1.0.17``
   :depends on r-dplyr: ``>=1.0.7``
   :depends on r-foreach: ``>=1.5.2``
   :depends on samtools: ``>=1.15``
   :depends on subread: ``>=2.0.1``

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

    pixi global install excludonfinder

to add into an existing workspace instead, run::

    pixi add excludonfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install excludonfinder

Alternatively, to install into a new environment, run::

    conda create -n envname excludonfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/excludonfinder:<tag>

(see `excludonfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_excludonfinder| image:: https://img.shields.io/conda/dn/bioconda/excludonfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/excludonfinder
   :alt:   (downloads)
.. |docker_excludonfinder| image:: https://quay.io/repository/biocontainers/excludonfinder/status
   :target: https://quay.io/repository/biocontainers/excludonfinder
.. _`excludonfinder/tags`: https://quay.io/repository/biocontainers/excludonfinder?tab=tags


.. raw:: html

    <script>
        var package = "excludonfinder";
        var versions = ["0.2.0","0.1.7","0.1.5","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/excludonfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/excludonfinder/README.html