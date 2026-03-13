:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-data-packages'
.. highlight: bash

bioconductor-data-packages
==========================

.. conda:recipe:: bioconductor-data-packages
   :replaces_section_title:
   :noindex:

   A package to enable downloading and installation of Bioconductor data packages

   :homepage: https://github.com/bioconda/bioconda-utils
   :license: MIT
   :recipe: /`bioconductor-data-packages <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-data-packages>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-data-packages/meta.yaml>`_

   


.. conda:package:: bioconductor-data-packages

   |downloads_bioconductor-data-packages| |docker_bioconductor-data-packages|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20260207-0</code>,  <code>20260107-0</code>,  <code>20250625-0</code>,  <code>20250401-0</code>,  <code>20250105.1-0</code>,  <code>20250105-0</code>,  <code>20250104-0</code>,  <code>20250101-0</code>,  <code>20241231-0</code>,  </span></summary>
      

      ``20260207-0``,  ``20260107-0``,  ``20250625-0``,  ``20250401-0``,  ``20250105.1-0``,  ``20250105-0``,  ``20250104-0``,  ``20250101-0``,  ``20241231-0``,  ``20241220-0``,  ``20241103-0``,  ``20231203-0``,  ``20231202-0``,  ``20230718-1``,  ``20230717-1``,  ``20230717-0``,  ``20230713-0``,  ``20230706-0``,  ``20230420-0``,  ``20230202-0``,  ``20221112-0``,  ``20221111-3``,  ``20221111-2``,  ``20221111-1``,  ``20221111-0``,  ``20221110-2``,  ``20221110-1``,  ``20221110-0``,  ``20221109-2``,  ``20221109-1``,  ``20221109-0``,  ``20221108-1``,  ``20221108-0``,  ``20221107-1``,  ``20221106-3``,  ``20221105-1``,  ``20221104-2``,  ``20221103-0``,  ``20221027-0``

      
      .. raw:: html

         </details>
      

   
   :depends on curl: 
   :depends on r-base: 
   :depends on yq: 

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

    pixi global install bioconductor-data-packages

to add into an existing workspace instead, run::

    pixi add bioconductor-data-packages

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-data-packages

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-data-packages

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-data-packages:<tag>

(see `bioconductor-data-packages/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-data-packages| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-data-packages.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-data-packages
   :alt:   (downloads)
.. |docker_bioconductor-data-packages| image:: https://quay.io/repository/biocontainers/bioconductor-data-packages/status
   :target: https://quay.io/repository/biocontainers/bioconductor-data-packages
.. _`bioconductor-data-packages/tags`: https://quay.io/repository/biocontainers/bioconductor-data-packages?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-data-packages";
        var versions = ["20260207","20260107","20250625","20250401","20250105.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-data-packages/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-data-packages/README.html