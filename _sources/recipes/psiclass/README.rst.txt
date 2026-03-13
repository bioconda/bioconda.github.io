:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psiclass'
.. highlight: bash

psiclass
========

.. conda:recipe:: psiclass
   :replaces_section_title:
   :noindex:

   Simultaneous multi\-sample transcript assembler for RNA\-seq data.

   :homepage: https://github.com/splicebox/PsiCLASS
   :documentation: https://github.com/splicebox/PsiCLASS/blob/v1.0.3/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`psiclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psiclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psiclass/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-019-12990-0`, biotools: :biotools:`psiclass`, usegalaxy-eu: :usegalaxy-eu:`psiclass`

   


.. conda:package:: psiclass

   |downloads_psiclass| |docker_psiclass|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-6</code>,  <code>1.0.3-5</code>,  <code>1.0.3-4</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-2</code>,  <code>1.0.2-1</code>,  </span></summary>
      

      ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: 
   :depends on samtools: ``0.1.19.*``
   :depends on samtools: ``>=0.1.19,<0.2.0a0``

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

    pixi global install psiclass

to add into an existing workspace instead, run::

    pixi add psiclass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psiclass

Alternatively, to install into a new environment, run::

    conda create -n envname psiclass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psiclass:<tag>

(see `psiclass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psiclass| image:: https://img.shields.io/conda/dn/bioconda/psiclass.svg?style=flat
   :target: https://anaconda.org/bioconda/psiclass
   :alt:   (downloads)
.. |docker_psiclass| image:: https://quay.io/repository/biocontainers/psiclass/status
   :target: https://quay.io/repository/biocontainers/psiclass
.. _`psiclass/tags`: https://quay.io/repository/biocontainers/psiclass?tab=tags


.. raw:: html

    <script>
        var package = "psiclass";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psiclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psiclass/README.html