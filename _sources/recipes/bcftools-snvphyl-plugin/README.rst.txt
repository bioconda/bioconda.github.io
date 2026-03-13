:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools-snvphyl-plugin'
.. highlight: bash

bcftools-snvphyl-plugin
=======================

.. conda:recipe:: bcftools-snvphyl-plugin
   :replaces_section_title:
   :noindex:

   The SNVPhyl \(Single Nucleotide Variant PHYLogenomics\) pipeline is a pipeline for identifying Single Nucleotide Variants \(SNV\) within a collection\\ of microbial genomes and constructing a phylogenetic tree. This package is the bcftools C plugin

   :homepage: https://github.com/phac-nml/snvphyl-tools
   :license: Apache / Apache-2.0
   :recipe: /`bcftools-snvphyl-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-snvphyl-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-snvphyl-plugin/meta.yaml>`_

   


.. conda:package:: bcftools-snvphyl-plugin

   |downloads_bcftools-snvphyl-plugin| |docker_bcftools-snvphyl-plugin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9-7</code>,  <code>1.9-6</code>,  <code>1.9-5</code>,  <code>1.9-4</code>,  <code>1.9-3</code>,  <code>1.9-2</code>,  <code>1.9-1</code>,  <code>1.9-0</code>,  <code>1.8-2</code>,  </span></summary>
      

      ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-2``,  ``1.8-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``1.9.*``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on curl: ``>=7.83.1,<8.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libzlib: ``>=1.2.12,<1.3.0a0``
   :depends on openssl: ``>=1.1.1q,<1.1.2a``
   :depends on xz: ``>=5.2.6,<5.3.0a0``
   :depends on zlib: ``>=1.2.12,<1.3.0a0``

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

    pixi global install bcftools-snvphyl-plugin

to add into an existing workspace instead, run::

    pixi add bcftools-snvphyl-plugin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcftools-snvphyl-plugin

Alternatively, to install into a new environment, run::

    conda create -n envname bcftools-snvphyl-plugin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcftools-snvphyl-plugin:<tag>

(see `bcftools-snvphyl-plugin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcftools-snvphyl-plugin| image:: https://img.shields.io/conda/dn/bioconda/bcftools-snvphyl-plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools-snvphyl-plugin
   :alt:   (downloads)
.. |docker_bcftools-snvphyl-plugin| image:: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin/status
   :target: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin
.. _`bcftools-snvphyl-plugin/tags`: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin?tab=tags


.. raw:: html

    <script>
        var package = "bcftools-snvphyl-plugin";
        var versions = ["1.9","1.9","1.9","1.9","1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools-snvphyl-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools-snvphyl-plugin/README.html