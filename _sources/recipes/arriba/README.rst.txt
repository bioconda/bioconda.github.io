:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arriba'
.. highlight: bash

arriba
======

.. conda:recipe:: arriba
   :replaces_section_title:
   :noindex:

   Fast and accurate gene fusion detection from RNA\-Seq data.

   :homepage: https://github.com/suhrig/arriba
   :documentation: https://github.com/suhrig/arriba/wiki/01-Home
   
   :license: MIT / MIT
   :recipe: /`arriba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arriba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arriba/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.257246.119`, biotools: :biotools:`Arriba`, usegalaxy-eu: :usegalaxy-eu:`arriba`, usegalaxy-eu: :usegalaxy-eu:`arriba_draw_fusions`, usegalaxy-eu: :usegalaxy-eu:`arriba_get_filters`

   


.. conda:package:: arriba

   |downloads_arriba| |docker_arriba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.1-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.0-4</code>,  <code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.3.0-1</code>,  </span></summary>
      

      ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicalignments: 
   :depends on bioconductor-genomicranges: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``<1.22``
   :depends on htslib: ``>=1.21,<1.22.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: 
   :depends on r-circlize: 
   :depends on samtools: 
   :depends on star: ``>=2.7.10a``

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

    pixi global install arriba

to add into an existing workspace instead, run::

    pixi add arriba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arriba

Alternatively, to install into a new environment, run::

    conda create -n envname arriba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arriba:<tag>

(see `arriba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arriba| image:: https://img.shields.io/conda/dn/bioconda/arriba.svg?style=flat
   :target: https://anaconda.org/bioconda/arriba
   :alt:   (downloads)
.. |docker_arriba| image:: https://quay.io/repository/biocontainers/arriba/status
   :target: https://quay.io/repository/biocontainers/arriba
.. _`arriba/tags`: https://quay.io/repository/biocontainers/arriba?tab=tags


.. raw:: html

    <script>
        var package = "arriba";
        var versions = ["2.5.1","2.5.0","2.5.0","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arriba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arriba/README.html