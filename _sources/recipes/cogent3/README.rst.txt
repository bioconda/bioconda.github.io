:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogent3'
.. highlight: bash

cogent3
=======

.. conda:recipe:: cogent3
   :replaces_section_title:
   :noindex:

   COmparative GENomics Toolkit 3\: genomic sequence analysis within notebooks or on compute systems with 1000s of CPUs.

   :homepage: https://github.com/cogent3/cogent3
   :documentation: https://github.com/cogent3/cogent3/blob/2026.3.10a0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cogent3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent3/meta.yaml>`_

   


.. conda:package:: cogent3

   |downloads_cogent3| |docker_cogent3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2026.3.10a0-0</code>,  <code>2026.2.28a1-0</code>,  <code>2026.2.17a2-0</code>,  <code>2026.2.3a1-0</code>,  <code>2026.1.20a1-0</code>,  <code>2026.1.12a1-0</code>,  <code>2026.1.6a1-0</code>,  <code>2025.12.10a3-0</code>,  <code>2025.12.10a2-0</code>,  </span></summary>
      

      ``2026.3.10a0-0``,  ``2026.2.28a1-0``,  ``2026.2.17a2-0``,  ``2026.2.3a1-0``,  ``2026.1.20a1-0``,  ``2026.1.12a1-0``,  ``2026.1.6a1-0``,  ``2025.12.10a3-0``,  ``2025.12.10a2-0``,  ``2025.9.8a10-0``,  ``2025.9.8a9-0``,  ``2025.9.8a7-0``,  ``2025.9.8a5-0``,  ``2025.9.8a4-0``,  ``2025.9.8a3-0``,  ``2025.9.8a2-0``,  ``2025.9.8a1-0``,  ``2025.7.10a10-0``,  ``2025.7.10a9-0``,  ``2025.7.10a8-0``,  ``2025.7.10a7-0``,  ``2025.7.10a6-0``,  ``2025.7.10a5-0``,  ``2025.7.10a4-0``,  ``2025.7.10a3-0``,  ``2025.7.10a2-0``,  ``2025.7.10a1-0``,  ``2025.5.8a10-0``,  ``2025.5.8a9-0``,  ``2025.5.8a8-0``,  ``2025.5.8a7-0``,  ``2025.5.8a6-0``,  ``2025.5.8a5-0``,  ``2025.5.8a4-0``,  ``2025.5.8a3-0``,  ``2025.5.8a2-0``,  ``2025.5.8a1-0``,  ``2025.3.22a4-0``,  ``2025.3.22a2-0``,  ``2024.12.19a2-0``,  ``2024.12.19a1-0``,  ``2024.11.29a2-0``,  ``2024.7.19a9-0``,  ``2024.7.19a8-0``,  ``2024.7.19a7-0``,  ``2024.7.19a6-0``,  ``2024.7.19a5-0``,  ``2024.7.19a4-0``,  ``2024.7.19a3-0``,  ``2024.7.19a1-0``,  ``2024.5.7a1-0``,  ``2024.2.5a1-0``,  ``2023.12.15a1-0``,  ``2023.9.22a1-0``,  ``2023.7.18a1-0``,  ``2022.8.24a1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on chardet: 
   :depends on charset-normalizer: 
   :depends on clangdev: 
   :depends on llvmlite: 
   :depends on loky: ``!=3.5.0``
   :depends on numba: ``>=0.55.0``
   :depends on numba: ``>=0.61.0``
   :depends on numpy: ``<2.4``
   :depends on python: ``>=3.10,<3.14``
   :depends on scipy: 
   :depends on scitrack: 
   :depends on stevedore: 
   :depends on tinydb: 
   :depends on tqdm: 
   :depends on typing_extensions: 

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

    pixi global install cogent3

to add into an existing workspace instead, run::

    pixi add cogent3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cogent3

Alternatively, to install into a new environment, run::

    conda create -n envname cogent3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cogent3:<tag>

(see `cogent3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cogent3| image:: https://img.shields.io/conda/dn/bioconda/cogent3.svg?style=flat
   :target: https://anaconda.org/bioconda/cogent3
   :alt:   (downloads)
.. |docker_cogent3| image:: https://quay.io/repository/biocontainers/cogent3/status
   :target: https://quay.io/repository/biocontainers/cogent3
.. _`cogent3/tags`: https://quay.io/repository/biocontainers/cogent3?tab=tags


.. raw:: html

    <script>
        var package = "cogent3";
        var versions = ["2026.3.10a0","2026.2.28a1","2026.2.17a2","2026.2.3a1","2026.1.20a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogent3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogent3/README.html