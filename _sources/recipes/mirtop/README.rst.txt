:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirtop'
.. highlight: bash

mirtop
======

.. conda:recipe:: mirtop
   :replaces_section_title:
   :noindex:

   Small RNA\-seq annotation.

   :homepage: https://github.com/mirtop/mirtop
   :documentation: https://mirtop.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`mirtop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtop/meta.yaml>`_
   :links: biotools: :biotools:`mirtop`

   


.. conda:package:: mirtop

   |downloads_mirtop| |docker_mirtop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.30-0</code>,  <code>0.4.28-0</code>,  <code>0.4.27-0</code>,  <code>0.4.25-0</code>,  <code>0.4.24-0</code>,  <code>0.4.23-1</code>,  <code>0.4.23-0</code>,  <code>0.4.22-0</code>,  <code>0.4.21-0</code>,  </span></summary>
      

      ``0.4.30-0``,  ``0.4.28-0``,  ``0.4.27-0``,  ``0.4.25-0``,  ``0.4.24-0``,  ``0.4.23-1``,  ``0.4.23-0``,  ``0.4.22-0``,  ``0.4.21-0``,  ``0.4.20-0``,  ``0.4.19-0``,  ``0.4.18a-2``,  ``0.4.18a-1``,  ``0.4.18a-0``,  ``0.4.17a-0``,  ``0.4.15a-0``,  ``0.3.17-1``,  ``0.3.17-0``,  ``0.3.11a0-2``,  ``0.3.11a0-0``,  ``0.3.6a0-0``,  ``0.3.2a0-0``,  ``0.1.8a0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pysam: 
   :depends on python: 

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

    pixi global install mirtop

to add into an existing workspace instead, run::

    pixi add mirtop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirtop

Alternatively, to install into a new environment, run::

    conda create -n envname mirtop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirtop:<tag>

(see `mirtop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirtop| image:: https://img.shields.io/conda/dn/bioconda/mirtop.svg?style=flat
   :target: https://anaconda.org/bioconda/mirtop
   :alt:   (downloads)
.. |docker_mirtop| image:: https://quay.io/repository/biocontainers/mirtop/status
   :target: https://quay.io/repository/biocontainers/mirtop
.. _`mirtop/tags`: https://quay.io/repository/biocontainers/mirtop?tab=tags


.. raw:: html

    <script>
        var package = "mirtop";
        var versions = ["0.4.30","0.4.28","0.4.27","0.4.25","0.4.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirtop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirtop/README.html