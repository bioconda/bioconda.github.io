:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cactus'
.. highlight: bash

cactus
======

.. conda:recipe:: cactus
   :replaces_section_title:
   :noindex:

   Cactus is a reference\-free whole\-genome multiple alignment program based upon notion of Cactus graphs.

   :homepage: https://github.com/ComparativeGenomicsToolkit/cactus
   :documentation: https://github.com/ComparativeGenomicsToolkit/cactus/blob/v3.1.4/README.md
   
   :license: MIT / MIT
   :recipe: /`cactus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus/meta.yaml>`_
   :links: biotools: :biotools:`cactus`, usegalaxy-eu: :usegalaxy-eu:`cactus_cactus`, usegalaxy-eu: :usegalaxy-eu:`cactus_export`, doi: :doi:`10.1038/s41586-020-2871-y`, doi: :doi:`10.1101/gr.123356.111`, doi: :doi:`10.1089/cmb.2010.0252`

   


.. conda:package:: cactus

   |downloads_cactus| |docker_cactus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2019.03.01-1</code>,  <code>2019.03.01-0</code>,  <code>3.1.4-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.9.9-2</code>,  <code>2.9.9-1</code>,  <code>2.9.9-0</code>,  </span></summary>
      

      ``2019.03.01-1``,  ``2019.03.01-0``,  ``3.1.4-0``,  ``3.0.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.9-2``,  ``2.9.9-1``,  ``2.9.9-0``,  ``0.0.2019.03.01-5``,  ``0.0.2019.03.01-4``,  ``0.0.2019.03.01-3``,  ``0.0.2019.03.01-2``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on cython: 
   :depends on decorator: 
   :depends on jobtree: 
   :depends on kyototycoon: 
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libstdcxx-ng: ``>=7.3.0``
   :depends on networkx: ``1.11.*``
   :depends on openssl: ``1.0.2.*``
   :depends on psutil: 
   :depends on python: ``2.7.*``
   :depends on sonlib: 
   :depends on subprocess32: 
   :depends on toil: ``3.14.0.*``
   :depends on ucsc-bedsort: 
   :depends on ucsc-bedtobigbed: 
   :depends on ucsc-bigbedtobed: 
   :depends on ucsc-fatotwobit: 
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install cactus

to add into an existing workspace instead, run::

    pixi add cactus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cactus

Alternatively, to install into a new environment, run::

    conda create -n envname cactus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cactus:<tag>

(see `cactus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cactus| image:: https://img.shields.io/conda/dn/bioconda/cactus.svg?style=flat
   :target: https://anaconda.org/bioconda/cactus
   :alt:   (downloads)
.. |docker_cactus| image:: https://quay.io/repository/biocontainers/cactus/status
   :target: https://quay.io/repository/biocontainers/cactus
.. _`cactus/tags`: https://quay.io/repository/biocontainers/cactus?tab=tags


.. raw:: html

    <script>
        var package = "cactus";
        var versions = ["2019.03.01","2019.03.01","3.1.4","3.0.1","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cactus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cactus/README.html