:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocomp'
.. highlight: bash

nanocomp
========

.. conda:recipe:: nanocomp
   :replaces_section_title:
   :noindex:

   Comparing runs of Oxford Nanopore sequencing data and alignments

   :homepage: https://github.com/wdecoster/NanoComp
   :license: MIT / MIT
   :recipe: /`nanocomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocomp/meta.yaml>`_

   


.. conda:package:: nanocomp

   |downloads_nanocomp| |docker_nanocomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.25.6-0</code>,  <code>1.25.4-0</code>,  <code>1.25.3-0</code>,  <code>1.25.2-0</code>,  <code>1.24.2-0</code>,  <code>1.23.1-0</code>,  <code>1.22.0-0</code>,  <code>1.21.2-0</code>,  <code>1.21.0-0</code>,  </span></summary>
      

      ``1.25.6-0``,  ``1.25.4-0``,  ``1.25.3-0``,  ``1.25.2-0``,  ``1.24.2-0``,  ``1.23.1-0``,  ``1.22.0-0``,  ``1.21.2-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.19.3-0``,  ``1.19.1-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.1-0``,  ``1.15.0-0``,  ``1.14.1-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.3-0``,  ``1.11.2-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.23.1-0``,  ``0.23.0-1``,  ``0.19.0-1``,  ``0.19.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.12.4-0``,  ``0.7.0-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on nanoget: ``>=1.19.0``
   :depends on nanomath: ``>=1.0.0``
   :depends on nanoplot: ``>=1.46.1``
   :depends on numpy: ``>=1.16.5``
   :depends on pandas: 
   :depends on plotly: ``>=3.4.2``
   :depends on psutil: 
   :depends on pyarrow: 
   :depends on python: ``>=3``

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

    pixi global install nanocomp

to add into an existing workspace instead, run::

    pixi add nanocomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanocomp

Alternatively, to install into a new environment, run::

    conda create -n envname nanocomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanocomp:<tag>

(see `nanocomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanocomp| image:: https://img.shields.io/conda/dn/bioconda/nanocomp.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocomp
   :alt:   (downloads)
.. |docker_nanocomp| image:: https://quay.io/repository/biocontainers/nanocomp/status
   :target: https://quay.io/repository/biocontainers/nanocomp
.. _`nanocomp/tags`: https://quay.io/repository/biocontainers/nanocomp?tab=tags


.. raw:: html

    <script>
        var package = "nanocomp";
        var versions = ["1.25.6","1.25.4","1.25.3","1.25.2","1.24.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocomp/README.html