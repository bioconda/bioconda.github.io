:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ivar'
.. highlight: bash

ivar
====

.. conda:recipe:: ivar
   :replaces_section_title:
   :noindex:

   iVar is a computational package that contains functions broadly useful for viral amplicon\-based sequencing.

   :homepage: https://github.com/andersen-lab/ivar
   :documentation: https://andersen-lab.github.io/ivar/html
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ivar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ivar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ivar/meta.yaml>`_
   :links: biotools: :biotools:`ivar`, usegalaxy-eu: :usegalaxy-eu:`ivar_variants`, usegalaxy-eu: :usegalaxy-eu:`ivar_filtervariants`, usegalaxy-eu: :usegalaxy-eu:`ivar_consensus`, usegalaxy-eu: :usegalaxy-eu:`ivar_removereads`, usegalaxy-eu: :usegalaxy-eu:`ivar_trim`, usegalaxy-eu: :usegalaxy-eu:`ivar_getmasked`, doi: :doi:`10.1186/s13059-018-1618-7`

   


.. conda:package:: ivar

   |downloads_ivar| |docker_ivar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.4-0</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.4.2-3</code>,  <code>1.4.2-2</code>,  <code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4-1</code>,  </span></summary>
      

      ``1.4.4-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1_beta-0``,  ``1.0.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on samtools: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install ivar

to add into an existing workspace instead, run::

    pixi add ivar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ivar

Alternatively, to install into a new environment, run::

    conda create -n envname ivar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ivar:<tag>

(see `ivar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ivar| image:: https://img.shields.io/conda/dn/bioconda/ivar.svg?style=flat
   :target: https://anaconda.org/bioconda/ivar
   :alt:   (downloads)
.. |docker_ivar| image:: https://quay.io/repository/biocontainers/ivar/status
   :target: https://quay.io/repository/biocontainers/ivar
.. _`ivar/tags`: https://quay.io/repository/biocontainers/ivar?tab=tags


.. raw:: html

    <script>
        var package = "ivar";
        var versions = ["1.4.4","1.4.3","1.4.3","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ivar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ivar/README.html