:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dudes'
.. highlight: bash

dudes
=====

.. conda:recipe:: dudes
   :replaces_section_title:
   :noindex:

   DUDes\: a top\-down taxonomic profiler for metagenomics and metaproteomics

   :homepage: https://github.com/pirovc/dudes
   :license: MIT / MIT License
   :recipe: /`dudes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dudes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dudes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw150`

   


.. conda:package:: dudes

   |downloads_dudes| |docker_dudes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.08-2</code>,  <code>0.08-1</code>,  <code>0.08-0</code>,  <code>0.07-1</code>,  <code>0.07-0</code>,  <code>0.06-3</code>,  <code>0.06-2</code>,  <code>0.06-1</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``,  ``0.07-1``,  ``0.07-0``,  ``0.06-3``,  ``0.06-2``,  ``0.06-1``,  ``0.06-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: ``>=3.5.1``
   :depends on numpy: ``>=1.21.0``
   :depends on pandas: ``>=1.4.1``
   :depends on python: ``>=3.10``

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

    pixi global install dudes

to add into an existing workspace instead, run::

    pixi add dudes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dudes

Alternatively, to install into a new environment, run::

    conda create -n envname dudes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dudes:<tag>

(see `dudes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dudes| image:: https://img.shields.io/conda/dn/bioconda/dudes.svg?style=flat
   :target: https://anaconda.org/bioconda/dudes
   :alt:   (downloads)
.. |docker_dudes| image:: https://quay.io/repository/biocontainers/dudes/status
   :target: https://quay.io/repository/biocontainers/dudes
.. _`dudes/tags`: https://quay.io/repository/biocontainers/dudes?tab=tags


.. raw:: html

    <script>
        var package = "dudes";
        var versions = ["0.10.0","0.08","0.08","0.08","0.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dudes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dudes/README.html