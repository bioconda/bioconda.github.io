:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tcdemux'
.. highlight: bash

tcdemux
=======

.. conda:recipe:: tcdemux
   :replaces_section_title:
   :noindex:

   Demultiplex files and prepare reads for the target capture analysis pipeline.

   :homepage: https://github.com/TomHarrop/tcdemux
   :license: GPL-3
   :recipe: /`tcdemux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tcdemux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tcdemux/meta.yaml>`_

   


.. conda:package:: tcdemux

   |downloads_tcdemux| |docker_tcdemux|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.1-0</code>,  <code>0.0.26-1</code>,  <code>0.0.26-0</code>,  <code>0.0.25-1</code>,  <code>0.0.25-0</code>,  <code>0.0.24-0</code>,  <code>0.0.22-0</code>,  <code>0.0.21-0</code>,  <code>0.0.20-0</code>,  </span></summary>
      

      ``0.1.1-0``,  ``0.0.26-1``,  ``0.0.26-0``,  ``0.0.25-1``,  ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: ``<=38.95``
   :depends on biopython: ``>=1.81``
   :depends on cutadapt: ``>=4.5``
   :depends on pandas: ``>=2.1.1``
   :depends on pigz: 
   :depends on python: ``>=3.10,<3.12``
   :depends on r-bit64: ``>=4.0.5``
   :depends on r-data.table: ``>=1.14.8``
   :depends on r-ggplot2: ``>=3.4.3``
   :depends on r-viridis: ``>=0.6.4``
   :depends on snakemake: ``>=7.32.4,<8.0.0``

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

    pixi global install tcdemux

to add into an existing workspace instead, run::

    pixi add tcdemux

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tcdemux

Alternatively, to install into a new environment, run::

    conda create -n envname tcdemux

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tcdemux:<tag>

(see `tcdemux/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tcdemux| image:: https://img.shields.io/conda/dn/bioconda/tcdemux.svg?style=flat
   :target: https://anaconda.org/bioconda/tcdemux
   :alt:   (downloads)
.. |docker_tcdemux| image:: https://quay.io/repository/biocontainers/tcdemux/status
   :target: https://quay.io/repository/biocontainers/tcdemux
.. _`tcdemux/tags`: https://quay.io/repository/biocontainers/tcdemux?tab=tags


.. raw:: html

    <script>
        var package = "tcdemux";
        var versions = ["0.1.1","0.0.26","0.0.26","0.0.25","0.0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tcdemux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tcdemux/README.html