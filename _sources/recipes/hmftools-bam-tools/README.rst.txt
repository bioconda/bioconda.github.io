:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-bam-tools'
.. highlight: bash

hmftools-bam-tools
==================

.. conda:recipe:: hmftools-bam-tools
   :replaces_section_title:
   :noindex:

   Rapidly process BAMs for various tasks.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/bam-tools/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-bam-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-bam-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-bam-tools/meta.yaml>`_

   


.. conda:package:: hmftools-bam-tools

   |downloads_hmftools-bam-tools| |docker_hmftools-bam-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4-0</code>,  <code>1.3-0</code>,  <code>1.3_beta-1</code>,  <code>1.3_beta-0</code>,  <code>1.2.1-0</code>,  <code>1.2-1</code>,  </span></summary>
      

      ``1.5-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3-0``,  ``1.3_beta-1``,  ``1.3_beta-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8,<=21``

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

    pixi global install hmftools-bam-tools

to add into an existing workspace instead, run::

    pixi add hmftools-bam-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-bam-tools

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-bam-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-bam-tools:<tag>

(see `hmftools-bam-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-bam-tools| image:: https://img.shields.io/conda/dn/bioconda/hmftools-bam-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-bam-tools
   :alt:   (downloads)
.. |docker_hmftools-bam-tools| image:: https://quay.io/repository/biocontainers/hmftools-bam-tools/status
   :target: https://quay.io/repository/biocontainers/hmftools-bam-tools
.. _`hmftools-bam-tools/tags`: https://quay.io/repository/biocontainers/hmftools-bam-tools?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-bam-tools";
        var versions = ["1.5","1.4.2","1.4.1","1.4","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-bam-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-bam-tools/README.html