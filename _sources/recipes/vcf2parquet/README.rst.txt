:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2parquet'
.. highlight: bash

vcf2parquet
===========

.. conda:recipe:: vcf2parquet
   :replaces_section_title:
   :noindex:

   Convert a vcf in parquet.

   :homepage: https://github.com/natir/vcf2parquet
   :license: MIT / MIT
   :recipe: /`vcf2parquet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2parquet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2parquet/meta.yaml>`_

   


.. conda:package:: vcf2parquet

   |downloads_vcf2parquet| |docker_vcf2parquet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2-0</code>,  </span></summary>
      

      ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install vcf2parquet

to add into an existing workspace instead, run::

    pixi add vcf2parquet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf2parquet

Alternatively, to install into a new environment, run::

    conda create -n envname vcf2parquet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf2parquet:<tag>

(see `vcf2parquet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf2parquet| image:: https://img.shields.io/conda/dn/bioconda/vcf2parquet.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2parquet
   :alt:   (downloads)
.. |docker_vcf2parquet| image:: https://quay.io/repository/biocontainers/vcf2parquet/status
   :target: https://quay.io/repository/biocontainers/vcf2parquet
.. _`vcf2parquet/tags`: https://quay.io/repository/biocontainers/vcf2parquet?tab=tags


.. raw:: html

    <script>
        var package = "vcf2parquet";
        var versions = ["0.5.0","0.5.0","0.4.1","0.4.0","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2parquet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2parquet/README.html