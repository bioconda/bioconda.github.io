:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bumbershoot'
.. highlight: bash

bumbershoot
===========

.. conda:recipe:: bumbershoot
   :replaces_section_title:
   :noindex:

   The Bumbershoot tool suite for analyzing shotgun proteomic data

   :homepage: https://proteowizard.sourceforge.net
   :license: Apache 2.0
   :recipe: /`bumbershoot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bumbershoot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bumbershoot/meta.yaml>`_

   


.. conda:package:: bumbershoot

   |downloads_bumbershoot| |docker_bumbershoot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3_0_21142_0e4f4a4-0</code>,  <code>3_0_20295_bfe5db0-0</code>,  <code>3_0_20290_13f6ea4-0</code>,  <code>3_0_20178_35b8bd1-0</code>,  <code>3_0_20175_cbf82d0-0</code>,  <code>3_0_20163_6147e44-0</code>,  <code>3_0_11579-0</code>,  <code>3_0_11392-0</code>,  <code>3_0_11391-0</code>,  </span></summary>
      

      ``3_0_21142_0e4f4a4-0``,  ``3_0_20295_bfe5db0-0``,  ``3_0_20290_13f6ea4-0``,  ``3_0_20178_35b8bd1-0``,  ``3_0_20175_cbf82d0-0``,  ``3_0_20163_6147e44-0``,  ``3_0_11579-0``,  ``3_0_11392-0``,  ``3_0_11391-0``,  ``3_0_11369-0``,  ``3_0_10246-0``,  ``3_0_10158-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on libstdcxx-ng: ``>=9.3.0``

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

    pixi global install bumbershoot

to add into an existing workspace instead, run::

    pixi add bumbershoot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bumbershoot

Alternatively, to install into a new environment, run::

    conda create -n envname bumbershoot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bumbershoot:<tag>

(see `bumbershoot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bumbershoot| image:: https://img.shields.io/conda/dn/bioconda/bumbershoot.svg?style=flat
   :target: https://anaconda.org/bioconda/bumbershoot
   :alt:   (downloads)
.. |docker_bumbershoot| image:: https://quay.io/repository/biocontainers/bumbershoot/status
   :target: https://quay.io/repository/biocontainers/bumbershoot
.. _`bumbershoot/tags`: https://quay.io/repository/biocontainers/bumbershoot?tab=tags


.. raw:: html

    <script>
        var package = "bumbershoot";
        var versions = ["3_0_21142_0e4f4a4","3_0_20295_bfe5db0","3_0_20290_13f6ea4","3_0_20178_35b8bd1","3_0_20175_cbf82d0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bumbershoot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bumbershoot/README.html