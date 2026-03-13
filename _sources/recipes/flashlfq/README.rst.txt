:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flashlfq'
.. highlight: bash

flashlfq
========

.. conda:recipe:: flashlfq
   :replaces_section_title:
   :noindex:

   Ultrafast label\-free quantification algorithm for mass\-spectrometry proteomics.

   :homepage: https://github.com/smith-chem-wisc/FlashLFQ
   :documentation: https://github.com/smith-chem-wisc/FlashLFQ/wiki
   
   :license: GPL / LGPL-3.0-only
   :recipe: /`flashlfq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flashlfq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flashlfq/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jproteome.7b00608`

   


.. conda:package:: flashlfq

   |downloads_flashlfq| |docker_flashlfq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.0.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``2.1.4-0``,  ``2.1.3-0``,  ``2.0.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.112-0``,  ``0.1.111-0``,  ``0.1.110-0``,  ``0.1.109-0``,  ``0.1.108-1``,  ``0.1.108-0``,  ``0.1.105-2``,  ``0.1.105-0``,  ``0.1.101-0``,  ``0.1.100-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dotnet-runtime: ``8.0.*``
   :depends on openssl: 

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

    pixi global install flashlfq

to add into an existing workspace instead, run::

    pixi add flashlfq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flashlfq

Alternatively, to install into a new environment, run::

    conda create -n envname flashlfq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flashlfq:<tag>

(see `flashlfq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flashlfq| image:: https://img.shields.io/conda/dn/bioconda/flashlfq.svg?style=flat
   :target: https://anaconda.org/bioconda/flashlfq
   :alt:   (downloads)
.. |docker_flashlfq| image:: https://quay.io/repository/biocontainers/flashlfq/status
   :target: https://quay.io/repository/biocontainers/flashlfq
.. _`flashlfq/tags`: https://quay.io/repository/biocontainers/flashlfq?tab=tags


.. raw:: html

    <script>
        var package = "flashlfq";
        var versions = ["2.1.4","2.1.3","2.0.0","1.2.6","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flashlfq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flashlfq/README.html