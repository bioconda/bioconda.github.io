:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools-liftover-plugin'
.. highlight: bash

bcftools-liftover-plugin
========================

.. conda:recipe:: bcftools-liftover-plugin
   :replaces_section_title:
   :noindex:

   Tools to work with GWAS\-VCF summary statistics files \(liftover plugin only\)

   :homepage: https://github.com/freeseek/score
   :license: MIT
   :recipe: /`bcftools-liftover-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-liftover-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-liftover-plugin/meta.yaml>`_

   


.. conda:package:: bcftools-liftover-plugin

   |downloads_bcftools-liftover-plugin| |docker_bcftools-liftover-plugin|

   :versions:
      
      

      ``1.22-0``,  ``1.21-0``

      

   
   :depends on bcftools: ``>=1.22,<1.23.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bcftools-liftover-plugin

to add into an existing workspace instead, run::

    pixi add bcftools-liftover-plugin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcftools-liftover-plugin

Alternatively, to install into a new environment, run::

    conda create -n envname bcftools-liftover-plugin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcftools-liftover-plugin:<tag>

(see `bcftools-liftover-plugin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcftools-liftover-plugin| image:: https://img.shields.io/conda/dn/bioconda/bcftools-liftover-plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools-liftover-plugin
   :alt:   (downloads)
.. |docker_bcftools-liftover-plugin| image:: https://quay.io/repository/biocontainers/bcftools-liftover-plugin/status
   :target: https://quay.io/repository/biocontainers/bcftools-liftover-plugin
.. _`bcftools-liftover-plugin/tags`: https://quay.io/repository/biocontainers/bcftools-liftover-plugin?tab=tags


.. raw:: html

    <script>
        var package = "bcftools-liftover-plugin";
        var versions = ["1.22","1.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools-liftover-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools-liftover-plugin/README.html