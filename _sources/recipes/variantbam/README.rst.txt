:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variantbam'
.. highlight: bash

variantbam
==========

.. conda:recipe:: variantbam
   :replaces_section_title:
   :noindex:

   Filtering and profiling of next\-generational sequencing data using region\-specific rules

   :homepage: https://github.com/jwalabroad/VariantBam
   :license: GPLv3
   :recipe: /`variantbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbam/meta.yaml>`_

   


.. conda:package:: variantbam

   |downloads_variantbam| |docker_variantbam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.4a-8</code>,  <code>1.4.4a-7</code>,  <code>1.4.4a-6</code>,  <code>1.4.4a-5</code>,  <code>1.4.4a-4</code>,  <code>1.4.4a-3</code>,  <code>1.4.4a-2</code>,  <code>1.4.4a-1</code>,  <code>1.4.4a-0</code>,  </span></summary>
      

      ``1.4.4a-8``,  ``1.4.4a-7``,  ``1.4.4a-6``,  ``1.4.4a-5``,  ``1.4.4a-4``,  ``1.4.4a-3``,  ``1.4.4a-2``,  ``1.4.4a-1``,  ``1.4.4a-0``,  ``1.4.3-0``,  ``1.3.0-0``,  ``1.2.1_2015.01.08-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on xz: ``>=5.2.6,<6.0a0``
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

    pixi global install variantbam

to add into an existing workspace instead, run::

    pixi add variantbam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install variantbam

Alternatively, to install into a new environment, run::

    conda create -n envname variantbam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/variantbam:<tag>

(see `variantbam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_variantbam| image:: https://img.shields.io/conda/dn/bioconda/variantbam.svg?style=flat
   :target: https://anaconda.org/bioconda/variantbam
   :alt:   (downloads)
.. |docker_variantbam| image:: https://quay.io/repository/biocontainers/variantbam/status
   :target: https://quay.io/repository/biocontainers/variantbam
.. _`variantbam/tags`: https://quay.io/repository/biocontainers/variantbam?tab=tags


.. raw:: html

    <script>
        var package = "variantbam";
        var versions = ["1.4.4a","1.4.4a","1.4.4a","1.4.4a","1.4.4a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variantbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variantbam/README.html