:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'das_tool'
.. highlight: bash

das_tool
========

.. conda:recipe:: das_tool
   :replaces_section_title:
   :noindex:

   Recovery of genomes from metagenomes via a dereplication\,
   aggregation and scoring strategy.


   :homepage: https://github.com/cmks/DAS_Tool
   :license: BSD
   :recipe: /`das_tool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/das_tool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/das_tool/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41564-018-0171-1`

   DAS Tool is an automated method that integrates the results of a
   flexible number of binning algorithms to calculate an optimized\,
   non\-redundant set of bins from a single assembly.



.. conda:package:: das_tool

   |downloads_das_tool| |docker_das_tool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.7-1</code>,  <code>1.1.7-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  </span></summary>
      

      ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: ``>=2.7.1``
   :depends on diamond: ``>=0.9.14``
   :depends on gawk: 
   :depends on prodigal: ``>=2.6.3``
   :depends on pullseq: ``>=1.0.2``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: ``>=1.9.6``
   :depends on r-docopt: ``>=0.7.1``
   :depends on r-magrittr: ``>=2.0.1``
   :depends on ruby: ``>=2.4.4``
   :depends on unzip: 

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

    pixi global install das_tool

to add into an existing workspace instead, run::

    pixi add das_tool

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install das_tool

Alternatively, to install into a new environment, run::

    conda create -n envname das_tool

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/das_tool:<tag>

(see `das_tool/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_das_tool| image:: https://img.shields.io/conda/dn/bioconda/das_tool.svg?style=flat
   :target: https://anaconda.org/bioconda/das_tool
   :alt:   (downloads)
.. |docker_das_tool| image:: https://quay.io/repository/biocontainers/das_tool/status
   :target: https://quay.io/repository/biocontainers/das_tool
.. _`das_tool/tags`: https://quay.io/repository/biocontainers/das_tool?tab=tags


.. raw:: html

    <script>
        var package = "das_tool";
        var versions = ["1.1.7","1.1.7","1.1.6","1.1.5","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/das_tool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/das_tool/README.html