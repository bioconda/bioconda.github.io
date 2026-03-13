:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-tools'
.. highlight: bash

ngs-tools
=========

.. conda:recipe:: ngs-tools
   :replaces_section_title:
   :noindex:

   Reusable tools for working with next\-generation sequencing \(NGS\) data

   :homepage: https://github.com/Lioscro/ngs-tools
   :documentation: https://ngs-tools.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`ngs-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-tools/meta.yaml>`_

   


.. conda:package:: ngs-tools

   |downloads_ngs-tools| |docker_ngs-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.6-0</code>,  <code>1.8.5-0</code>,  <code>1.8.4-0</code>,  <code>1.8.3-0</code>,  <code>1.8.2-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.3-0</code>,  <code>1.7.2-0</code>,  </span></summary>
      

      ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.14-0``,  ``1.5.13-0``,  ``1.5.12-1``,  ``1.5.12-0``,  ``1.5.11-0``,  ``1.5.10-0``,  ``1.5.9-1``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on joblib: ``>=1.0.1``
   :depends on numba: ``>=0.53.1``
   :depends on numpy: ``>=1.19.0``
   :depends on pysam: ``>=0.16.0.1``
   :depends on pyseq-align: ``>=1.0.0``
   :depends on python: ``>=3.6``
   :depends on shortuuid: ``>=1.0.1``
   :depends on tqdm: ``>=4.50.0``
   :depends on typing-extensions: ``>=3.7.4``

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

    pixi global install ngs-tools

to add into an existing workspace instead, run::

    pixi add ngs-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngs-tools

Alternatively, to install into a new environment, run::

    conda create -n envname ngs-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngs-tools:<tag>

(see `ngs-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngs-tools| image:: https://img.shields.io/conda/dn/bioconda/ngs-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-tools
   :alt:   (downloads)
.. |docker_ngs-tools| image:: https://quay.io/repository/biocontainers/ngs-tools/status
   :target: https://quay.io/repository/biocontainers/ngs-tools
.. _`ngs-tools/tags`: https://quay.io/repository/biocontainers/ngs-tools?tab=tags


.. raw:: html

    <script>
        var package = "ngs-tools";
        var versions = ["1.8.6","1.8.5","1.8.4","1.8.3","1.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-tools/README.html