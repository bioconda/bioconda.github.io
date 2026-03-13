:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair3-illumina'
.. highlight: bash

clair3-illumina
===============

.. conda:recipe:: clair3-illumina
   :replaces_section_title:
   :noindex:

   Clair3 with libraries to support variant calling using Illumina short\-reads. Version in sync with Clair3.

   :homepage: https://github.com/HKU-BAL/Clair3
   :license: BSD / BSD-3-Clause
   :recipe: /`clair3-illumina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-illumina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-illumina/meta.yaml>`_
   :links: doi: :doi:`10.1038/s43588-022-00387-x`

   


.. conda:package:: clair3-illumina

   |downloads_clair3-illumina| |docker_clair3-illumina|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-1</code>,  <code>1.0.10-0</code>,  <code>1.0.9-1</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.5-1``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on clair3: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

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

    pixi global install clair3-illumina

to add into an existing workspace instead, run::

    pixi add clair3-illumina

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clair3-illumina

Alternatively, to install into a new environment, run::

    conda create -n envname clair3-illumina

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clair3-illumina:<tag>

(see `clair3-illumina/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clair3-illumina| image:: https://img.shields.io/conda/dn/bioconda/clair3-illumina.svg?style=flat
   :target: https://anaconda.org/bioconda/clair3-illumina
   :alt:   (downloads)
.. |docker_clair3-illumina| image:: https://quay.io/repository/biocontainers/clair3-illumina/status
   :target: https://quay.io/repository/biocontainers/clair3-illumina
.. _`clair3-illumina/tags`: https://quay.io/repository/biocontainers/clair3-illumina?tab=tags


.. raw:: html

    <script>
        var package = "clair3-illumina";
        var versions = ["2.0.0","1.2.0","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair3-illumina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair3-illumina/README.html