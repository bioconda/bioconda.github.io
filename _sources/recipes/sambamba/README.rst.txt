:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sambamba'
.. highlight: bash

sambamba
========

.. conda:recipe:: sambamba
   :replaces_section_title:
   :noindex:

   Tools for working with SAM\/BAM data.

   :homepage: https://github.com/biod/sambamba
   :documentation: https://lomereiter.github.io/sambamba/docs/sambamba-view.html
   
   :license: GPL2 / GPL-2.0-only
   :recipe: /`sambamba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sambamba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sambamba/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv098`, biotools: :biotools:`sambamba`, usegalaxy-eu: :usegalaxy-eu:`sambamba_flagstat`, usegalaxy-eu: :usegalaxy-eu:`sambamba_markdup`, usegalaxy-eu: :usegalaxy-eu:`sambamba_merge`, usegalaxy-eu: :usegalaxy-eu:`sambamba_sort`

   


.. conda:package:: sambamba

   |downloads_sambamba| |docker_sambamba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.8.2-2</code>,  <code>0.8.1-1</code>,  </span></summary>
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.8.2-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-3``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.9-0``,  ``0.6.8-2``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.6.6-2``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.9-1``,  ``0.5.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.4,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on lz4-c: ``>=1.9.3,<1.10.0a0``

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

    pixi global install sambamba

to add into an existing workspace instead, run::

    pixi add sambamba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sambamba

Alternatively, to install into a new environment, run::

    conda create -n envname sambamba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sambamba:<tag>

(see `sambamba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sambamba| image:: https://img.shields.io/conda/dn/bioconda/sambamba.svg?style=flat
   :target: https://anaconda.org/bioconda/sambamba
   :alt:   (downloads)
.. |docker_sambamba| image:: https://quay.io/repository/biocontainers/sambamba/status
   :target: https://quay.io/repository/biocontainers/sambamba
.. _`sambamba/tags`: https://quay.io/repository/biocontainers/sambamba?tab=tags


.. raw:: html

    <script>
        var package = "sambamba";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sambamba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sambamba/README.html