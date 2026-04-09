:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dfast'
.. highlight: bash

dfast
=====

.. conda:recipe:: dfast
   :replaces_section_title:
   :noindex:

   DDBJ Fast Annotation and Submission Tool \- Prokaryotic genome annotation pipeline

   :homepage: https://dfast.nig.ac.jp
   :developer docs: https://github.com/nigyta/dfast_core
   :license: GPL / GPL-3.0-only
   :recipe: /`dfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast/meta.yaml>`_
   :links: biotools: :biotools:`dfast`, doi: :doi:`10.1093/bioinformatics/btx713`

   


.. conda:package:: dfast

   |downloads_dfast| |docker_dfast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.8-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-1</code>,  <code>1.3.4-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.19-1``,  ``1.2.19-0``,  ``1.2.18-2``,  ``1.2.18-1``,  ``1.2.18-0``,  ``1.2.17-0``,  ``1.2.16-0``,  ``1.2.15-1``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.13-1``,  ``1.2.13-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.7-0``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aragorn: 
   :depends on barrnap: 
   :depends on biopython: 
   :depends on blast: ``>=2.6.0``
   :depends on ghostx: 
   :depends on hmmer: ``>=3.1b2``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openjdk: 
   :depends on plasmidfinder: ``>=2.1.6``
   :depends on python: ``>=3.7``

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

    pixi global install dfast

to add into an existing workspace instead, run::

    pixi add dfast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dfast

Alternatively, to install into a new environment, run::

    conda create -n envname dfast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dfast:<tag>

(see `dfast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dfast| image:: https://img.shields.io/conda/dn/bioconda/dfast.svg?style=flat
   :target: https://anaconda.org/bioconda/dfast
   :alt:   (downloads)
.. |docker_dfast| image:: https://quay.io/repository/biocontainers/dfast/status
   :target: https://quay.io/repository/biocontainers/dfast
.. _`dfast/tags`: https://quay.io/repository/biocontainers/dfast?tab=tags


.. raw:: html

    <script>
        var package = "dfast";
        var versions = ["1.3.8","1.3.7","1.3.6","1.3.5","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dfast/README.html