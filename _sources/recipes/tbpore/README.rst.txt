:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbpore'
.. highlight: bash

tbpore
======

.. conda:recipe:: tbpore
   :replaces_section_title:
   :noindex:

   Mycobacterium tuberculosis genomic analysis from Nanopore sequencing data

   :homepage: https://github.com/mbhall88/tbpore
   :license: MIT / MIT
   :recipe: /`tbpore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbpore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbpore/meta.yaml>`_
   :links: doi: :doi:`10.1016/S2666-5247(22)00301-9`

   


.. conda:package:: tbpore

   |downloads_tbpore| |docker_tbpore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``1.13.*``
   :depends on click: ``>=8.0.3,<9.0``
   :depends on cyvcf2: ``>=0.30,<1.0``
   :depends on loguru: ``>=0.5.3,<1.0``
   :depends on minimap2: ``2.22.*``
   :depends on mykrobe: ``0.12.*``
   :depends on nanoq: ``0.9.*``
   :depends on networkx: ``>=2.8,<3.0``
   :depends on pandas: ``>=1.4.2,<2.0``
   :depends on psdm: ``0.1.*``
   :depends on pysam: ``<1.0``
   :depends on python: ``>=3.8``
   :depends on pyyaml: ``>=6.0``
   :depends on rasusa: ``2.*``
   :depends on samtools: ``1.13.*``
   :depends on seqkit: ``2.*``

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

    pixi global install tbpore

to add into an existing workspace instead, run::

    pixi add tbpore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tbpore

Alternatively, to install into a new environment, run::

    conda create -n envname tbpore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tbpore:<tag>

(see `tbpore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tbpore| image:: https://img.shields.io/conda/dn/bioconda/tbpore.svg?style=flat
   :target: https://anaconda.org/bioconda/tbpore
   :alt:   (downloads)
.. |docker_tbpore| image:: https://quay.io/repository/biocontainers/tbpore/status
   :target: https://quay.io/repository/biocontainers/tbpore
.. _`tbpore/tags`: https://quay.io/repository/biocontainers/tbpore?tab=tags


.. raw:: html

    <script>
        var package = "tbpore";
        var versions = ["0.7.1","0.7.0","0.6.0","0.5.0","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbpore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbpore/README.html