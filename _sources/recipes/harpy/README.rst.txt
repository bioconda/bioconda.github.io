:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harpy'
.. highlight: bash

harpy
=====

.. conda:recipe:: harpy
   :replaces_section_title:
   :noindex:

   Process raw haplotagging data\, from raw sequences to phased haplotypes.

   :homepage: https://github.com/pdimens/harpy
   :documentation: https://pdimens.github.io/harpy
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`harpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harpy/meta.yaml>`_

   Harpy is a command\-line tool to easily process platform\-agnostic linked\-read or WGS data. It uses
   Snakemake under the hood to execute different workflows \(quality control\, trimming\, 
   alignment\, variant calling\, phasing\, etc.\)\, but the user is rarely\, if ever\, exposed
   to Snakemake directly. With an emphasis on user\-friendliness\, parallelization\, transparency\,
   and reproducibility\, Harpy quickly handles data processing so that you can focus more
   on analyzing your data. 



.. conda:package:: harpy

   |downloads_harpy| |docker_harpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2-0</code>,  <code>3.1-2</code>,  <code>3.1-1</code>,  <code>3.1-0</code>,  <code>3.0.1-0</code>,  <code>3.0-0</code>,  <code>2.8.1-0</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  </span></summary>
      

      ``3.2-0``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0.1-0``,  ``3.0-0``,  ``2.8.1-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4-1``,  ``2.4-0``,  ``2.3-1``,  ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.16.3-1``,  ``1.16.3-0``,  ``1.16.2-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.3-0``,  ``1.14.2-0``,  ``1.14.1-1``,  ``1.14.1-0``,  ``1.14-0``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10.1-0``,  ``1.10-0``,  ``1.9-1``,  ``1.9-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.9.1-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.22``
   :depends on conda: ``>24.7``
   :depends on djinn: ``>=1.1``
   :depends on htslib: ``>=1.22``
   :depends on pysam: ``>=0.23``
   :depends on python: ``>=3.11``
   :depends on rich-click: ``>=1.9.3``
   :depends on samtools: ``>=1.22``
   :depends on seqtk: 
   :depends on snakemake-minimal: ``>9.10``

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

    pixi global install harpy

to add into an existing workspace instead, run::

    pixi add harpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install harpy

Alternatively, to install into a new environment, run::

    conda create -n envname harpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/harpy:<tag>

(see `harpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_harpy| image:: https://img.shields.io/conda/dn/bioconda/harpy.svg?style=flat
   :target: https://anaconda.org/bioconda/harpy
   :alt:   (downloads)
.. |docker_harpy| image:: https://quay.io/repository/biocontainers/harpy/status
   :target: https://quay.io/repository/biocontainers/harpy
.. _`harpy/tags`: https://quay.io/repository/biocontainers/harpy?tab=tags


.. raw:: html

    <script>
        var package = "harpy";
        var versions = ["3.2","3.1","3.1","3.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harpy/README.html