:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequenza-utils'
.. highlight: bash

sequenza-utils
==============

.. conda:recipe:: sequenza-utils
   :replaces_section_title:
   :noindex:

   Analysis of cancer sequencing samples\, utilities for the R package sequenza

   :homepage: http://sequenza-utils.readthedocs.org
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`sequenza-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenza-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenza-utils/meta.yaml>`_

   


.. conda:package:: sequenza-utils

   |downloads_sequenza-utils| |docker_sequenza-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-8</code>,  <code>3.0.0-7</code>,  <code>3.0.0-6</code>,  <code>3.0.0-5</code>,  <code>3.0.0-4</code>,  <code>3.0.0-3</code>,  <code>3.0.0-2</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  </span></summary>
      

      ``3.0.0-8``,  ``3.0.0-7``,  ``3.0.0-6``,  ``3.0.0-5``,  ``3.0.0-4``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.1.9999b0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: 

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

    pixi global install sequenza-utils

to add into an existing workspace instead, run::

    pixi add sequenza-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sequenza-utils

Alternatively, to install into a new environment, run::

    conda create -n envname sequenza-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sequenza-utils:<tag>

(see `sequenza-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sequenza-utils| image:: https://img.shields.io/conda/dn/bioconda/sequenza-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/sequenza-utils
   :alt:   (downloads)
.. |docker_sequenza-utils| image:: https://quay.io/repository/biocontainers/sequenza-utils/status
   :target: https://quay.io/repository/biocontainers/sequenza-utils
.. _`sequenza-utils/tags`: https://quay.io/repository/biocontainers/sequenza-utils?tab=tags


.. raw:: html

    <script>
        var package = "sequenza-utils";
        var versions = ["3.0.0","3.0.0","3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequenza-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequenza-utils/README.html