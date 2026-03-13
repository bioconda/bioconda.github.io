:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghm'
.. highlight: bash

ghm
===

.. conda:recipe:: ghm
   :replaces_section_title:
   :noindex:

   A MOD\-score analysis in which parametric LOD scores are maximized over the parameters of the trait model

   :homepage: https://www.helmholtz-muenchen.de/en/ige/service/software-download/genehunter-modscore/index.html
   :license: INDIVIDUAL
   :recipe: /`ghm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghm/meta.yaml>`_

   


.. conda:package:: ghm

   |downloads_ghm| |docker_ghm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1-5</code>,  <code>3.1-4</code>,  <code>3.1-3</code>,  <code>3.1-2</code>,  <code>3.1-1</code>,  <code>3.1-0</code>,  <code>3.0-4</code>,  <code>3.0-3</code>,  <code>3.0-2</code>,  </span></summary>
      

      ``3.1-5``,  ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install ghm

to add into an existing workspace instead, run::

    pixi add ghm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ghm

Alternatively, to install into a new environment, run::

    conda create -n envname ghm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ghm:<tag>

(see `ghm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ghm| image:: https://img.shields.io/conda/dn/bioconda/ghm.svg?style=flat
   :target: https://anaconda.org/bioconda/ghm
   :alt:   (downloads)
.. |docker_ghm| image:: https://quay.io/repository/biocontainers/ghm/status
   :target: https://quay.io/repository/biocontainers/ghm
.. _`ghm/tags`: https://quay.io/repository/biocontainers/ghm?tab=tags


.. raw:: html

    <script>
        var package = "ghm";
        var versions = ["3.1","3.1","3.1","3.1","3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghm/README.html