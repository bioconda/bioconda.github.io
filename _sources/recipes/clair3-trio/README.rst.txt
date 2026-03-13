:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair3-trio'
.. highlight: bash

clair3-trio
===========

.. conda:recipe:: clair3-trio
   :replaces_section_title:
   :noindex:

   Clair3\-Trio is a variants caller tailored for family trios from nanopore long\-reads. Clair3\-Trio employs a Trio\-to\-Trio deep neural network model that allows it to input all trio’s sequencing information and output all trio’s predicted variants within a single model\, to perform far better variant calling. We also present MCVLoss\, the first loss function that can improve variants calling in trios by leveraging the explicitly encoding of the priors of the Mendelian inheritance in trios. Clair3\-Trio showed comprehensive improvement in experiments. It predicted much fewer Mendelian inheritance violation variations than current state\-of\-the\-art methods.

   :homepage: https://github.com/HKU-BAL/Clair3-Trio
   :license: BSD-3-Clause
   :recipe: /`clair3-trio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-trio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-trio/meta.yaml>`_

   


.. conda:package:: clair3-trio

   |downloads_clair3-trio| |docker_clair3-trio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7-2</code>,  <code>0.7-1</code>,  <code>0.7-0</code>,  <code>0.6-1</code>,  <code>0.6-0</code>,  <code>0.5-0</code>,  <code>0.3-2</code>,  <code>0.3-1</code>,  <code>0.3-0</code>,  </span></summary>
      

      ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.6-1``,  ``0.6-0``,  ``0.5-0``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on cffi: 
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on numpy: 
   :depends on parallel: ``20191122.*``
   :depends on pigz: 
   :depends on pypy3.6: 
   :depends on pytables: 
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on samtools: ``1.15.1.*``
   :depends on tensorflow: ``2.8.0.*``
   :depends on whatshap: ``1.7.*``
   :depends on zstd: 

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

    pixi global install clair3-trio

to add into an existing workspace instead, run::

    pixi add clair3-trio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clair3-trio

Alternatively, to install into a new environment, run::

    conda create -n envname clair3-trio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clair3-trio:<tag>

(see `clair3-trio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clair3-trio| image:: https://img.shields.io/conda/dn/bioconda/clair3-trio.svg?style=flat
   :target: https://anaconda.org/bioconda/clair3-trio
   :alt:   (downloads)
.. |docker_clair3-trio| image:: https://quay.io/repository/biocontainers/clair3-trio/status
   :target: https://quay.io/repository/biocontainers/clair3-trio
.. _`clair3-trio/tags`: https://quay.io/repository/biocontainers/clair3-trio?tab=tags


.. raw:: html

    <script>
        var package = "clair3-trio";
        var versions = ["0.7","0.7","0.7","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair3-trio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair3-trio/README.html