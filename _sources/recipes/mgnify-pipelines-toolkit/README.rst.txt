:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgnify-pipelines-toolkit'
.. highlight: bash

mgnify-pipelines-toolkit
========================

.. conda:recipe:: mgnify-pipelines-toolkit
   :replaces_section_title:
   :noindex:

   Collection of scripts and tools for MGnify pipelines.

   :homepage: https://github.com/EBI-Metagenomics/mgnify-pipelines-toolkit
   :license: APACHE / Apache-2.0
   :recipe: /`mgnify-pipelines-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgnify-pipelines-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgnify-pipelines-toolkit/meta.yaml>`_

   This package contains a collection of scripts used by MGnify
   pipelines



.. conda:package:: mgnify-pipelines-toolkit

   |downloads_mgnify-pipelines-toolkit| |docker_mgnify-pipelines-toolkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.19-0</code>,  <code>1.4.18-0</code>,  <code>1.4.17-0</code>,  <code>1.4.16-0</code>,  <code>1.4.15-0</code>,  <code>1.4.14-0</code>,  <code>1.4.13-0</code>,  <code>1.4.12-0</code>,  <code>1.4.11-0</code>,  </span></summary>
      

      ``1.4.19-0``,  ``1.4.18-0``,  ``1.4.17-0``,  ``1.4.16-0``,  ``1.4.15-0``,  ``1.4.14-0``,  ``1.4.13-0``,  ``1.4.12-0``,  ``1.4.11-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.1-0``,  ``1.3.0-0``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``1.82``
   :depends on click: 
   :depends on intervaltree: ``3.1.0``
   :depends on numpy: ``1.26.0``
   :depends on pandas: ``2.0.2``
   :depends on pandera: 
   :depends on pyfastx: ``>=2.2.0``
   :depends on python: ``>=3.9``
   :depends on regex: ``2023.12.25``
   :depends on requests: 

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

    pixi global install mgnify-pipelines-toolkit

to add into an existing workspace instead, run::

    pixi add mgnify-pipelines-toolkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mgnify-pipelines-toolkit

Alternatively, to install into a new environment, run::

    conda create -n envname mgnify-pipelines-toolkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mgnify-pipelines-toolkit:<tag>

(see `mgnify-pipelines-toolkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mgnify-pipelines-toolkit| image:: https://img.shields.io/conda/dn/bioconda/mgnify-pipelines-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/mgnify-pipelines-toolkit
   :alt:   (downloads)
.. |docker_mgnify-pipelines-toolkit| image:: https://quay.io/repository/biocontainers/mgnify-pipelines-toolkit/status
   :target: https://quay.io/repository/biocontainers/mgnify-pipelines-toolkit
.. _`mgnify-pipelines-toolkit/tags`: https://quay.io/repository/biocontainers/mgnify-pipelines-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "mgnify-pipelines-toolkit";
        var versions = ["1.4.19","1.4.18","1.4.17","1.4.16","1.4.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgnify-pipelines-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgnify-pipelines-toolkit/README.html