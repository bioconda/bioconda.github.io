:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basicstarrseq'
.. highlight: bash

bioconductor-basicstarrseq
==========================

.. conda:recipe:: bioconductor-basicstarrseq
   :replaces_section_title:
   :noindex:

   Basic peak calling on STARR\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BasicSTARRseq.html
   :license: LGPL-3
   :recipe: /`bioconductor-basicstarrseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstarrseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstarrseq/meta.yaml>`_

   Basic peak calling on STARR\-seq data based on a method introduced in \"Genome\-Wide Quantitative Enhancer Activity Maps Identified by STARR\-seq\" Arnold et al. Science. 2013 Mar 1\;339\(6123\)\:1074\-7. doi\: 10.1126\/science. 1232542. Epub 2013 Jan 17.


.. conda:package:: bioconductor-basicstarrseq

   |downloads_bioconductor-basicstarrseq| |docker_bioconductor-basicstarrseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-basicstarrseq

to add into an existing workspace instead, run::

    pixi add bioconductor-basicstarrseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-basicstarrseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-basicstarrseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-basicstarrseq:<tag>

(see `bioconductor-basicstarrseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-basicstarrseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basicstarrseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basicstarrseq
   :alt:   (downloads)
.. |docker_bioconductor-basicstarrseq| image:: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq
.. _`bioconductor-basicstarrseq/tags`: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basicstarrseq";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basicstarrseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basicstarrseq/README.html