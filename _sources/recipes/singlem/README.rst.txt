:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'singlem'
.. highlight: bash

singlem
=======

.. conda:recipe:: singlem
   :replaces_section_title:
   :noindex:

   At heart\, SingleM is a tool for profiling shotgun metagenomes. It was originally designed to determine the relative abundance of bacterial and archaeal taxa in a sample. As of version 0.19.0\, it can also be used to profile dsDNA phages \(see Lyrebird\). It shows good accuracy in estimating the relative abundances of community members\, and has a particular strength in dealing with novel lineages. The method it uses also makes it suitable for some related tasks\, such as assessing eukaryotic contamination\, finding bias in genome recovery\, and lineage\-targeted MAG recovery. It can also be used as the basis for choosing metagenomes which\, when coassembled\, maximise the recovery of novel MAGs \(see Bin Chicken\).

   :homepage: https://github.com/wwood/singlem
   :documentation: https://wwood.github.io/singlem
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`singlem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlem/meta.yaml>`_

   


.. conda:package:: singlem

   |downloads_singlem| |docker_singlem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.20.3-2</code>,  <code>0.20.3-1</code>,  <code>0.20.3-0</code>,  <code>0.20.2-1</code>,  <code>0.20.2-0</code>,  <code>0.19.0-0</code>,  <code>0.18.3-0</code>,  <code>0.18.2-0</code>,  <code>0.18.1-1</code>,  </span></summary>
      

      ``0.20.3-2``,  ``0.20.3-1``,  ``0.20.3-0``,  ``0.20.2-1``,  ``0.20.2-0``,  ``0.19.0-0``,  ``0.18.3-0``,  ``0.18.2-0``,  ``0.18.1-1``,  ``0.18.1-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.2-2``,  ``0.13.2-1``,  ``0.13.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``1.86.*``
   :depends on bird_tool_utils_python: ``0.6.*``
   :depends on cd-hit: ``4.8.*``
   :depends on diamond: ``>=2.1.21``
   :depends on expressbetadiversity: ``1.0.*``
   :depends on extern: ``0.4.*``
   :depends on fastalite: ``0.4.*``
   :depends on fasttree: ``2.2.*``
   :depends on galah: ``0.4.*``
   :depends on graftm: ``0.15.*``
   :depends on hmmer: ``3.2.*``
   :depends on jinja2: ``3.1.*``
   :depends on krona: ``2.8.*``
   :depends on mafft: ``7.*``
   :depends on mfqe: ``0.5.*``
   :depends on ncbi-ngs-sdk: ``3.0.*``
   :depends on orfm: ``>=0.7.1``
   :depends on pandas: ``2.3.*``
   :depends on polars: ``1.35.*``
   :depends on pplacer: ``1.1.*``
   :depends on prodigal: ``2.6.*``
   :depends on pyarrow: ``22.0.*``
   :depends on pyranges: ``0.1.*``
   :depends on python: ``3.12.*``
   :depends on seqmagick: ``0.8.*``
   :depends on smafa: ``0.8.*``
   :depends on sqlalchemy: ``2.0.*``
   :depends on sqlite: ``3.51.*``
   :depends on sqlparse: ``0.5.*``
   :depends on squarify: ``0.4.*``
   :depends on sra-tools: ``3.2.*``
   :depends on tqdm: ``4.67.*``
   :depends on zenodo_backpack: ``0.4.*``

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

    pixi global install singlem

to add into an existing workspace instead, run::

    pixi add singlem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install singlem

Alternatively, to install into a new environment, run::

    conda create -n envname singlem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/singlem:<tag>

(see `singlem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_singlem| image:: https://img.shields.io/conda/dn/bioconda/singlem.svg?style=flat
   :target: https://anaconda.org/bioconda/singlem
   :alt:   (downloads)
.. |docker_singlem| image:: https://quay.io/repository/biocontainers/singlem/status
   :target: https://quay.io/repository/biocontainers/singlem
.. _`singlem/tags`: https://quay.io/repository/biocontainers/singlem?tab=tags


.. raw:: html

    <script>
        var package = "singlem";
        var versions = ["0.20.3","0.20.3","0.20.3","0.20.2","0.20.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/singlem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/singlem/README.html