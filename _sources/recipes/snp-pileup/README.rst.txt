:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-pileup'
.. highlight: bash

snp-pileup
==========

.. conda:recipe:: snp-pileup
   :replaces_section_title:
   :noindex:

   Compute SNP pileup at reference positions in one or more input bam files. Output is ready for the R package facets

   :homepage: https://github.com/mskcc/facets
   :license: MIT / MIT
   :recipe: /`snp-pileup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pileup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pileup/meta.yaml>`_

   


.. conda:package:: snp-pileup

   |downloads_snp-pileup| |docker_snp-pileup|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.2-8</code>,  <code>0.6.2-7</code>,  <code>0.6.2-6</code>,  <code>0.6.2-5</code>,  <code>0.6.2-4</code>,  <code>0.6.2-3</code>,  <code>0.6.2-2</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.6.2-8``,  ``0.6.2-7``,  ``0.6.2-6``,  ``0.6.2-5``,  ``0.6.2-4``,  ``0.6.2-3``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.14-3``,  ``0.5.14-2``,  ``0.5.14-1``,  ``0.5.14-0``,  ``v0.5.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install snp-pileup

to add into an existing workspace instead, run::

    pixi add snp-pileup

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snp-pileup

Alternatively, to install into a new environment, run::

    conda create -n envname snp-pileup

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snp-pileup:<tag>

(see `snp-pileup/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snp-pileup| image:: https://img.shields.io/conda/dn/bioconda/snp-pileup.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-pileup
   :alt:   (downloads)
.. |docker_snp-pileup| image:: https://quay.io/repository/biocontainers/snp-pileup/status
   :target: https://quay.io/repository/biocontainers/snp-pileup
.. _`snp-pileup/tags`: https://quay.io/repository/biocontainers/snp-pileup?tab=tags


.. raw:: html

    <script>
        var package = "snp-pileup";
        var versions = ["0.6.2","0.6.2","0.6.2","0.6.2","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-pileup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-pileup/README.html