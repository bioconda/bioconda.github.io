:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-annotables'
.. highlight: bash

r-annotables
============

.. conda:recipe:: r-annotables
   :replaces_section_title:
   :noindex:

   Provides tables for converting and annotating Ensembl Gene IDs.

   :homepage: https://github.com/stephenturner/annotables
   :license: GPL3 / GPL-3
   :recipe: /`r-annotables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-annotables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-annotables/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.996854`

   


.. conda:package:: r-annotables

   |downloads_r-annotables| |docker_r-annotables|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.0-2</code>,  <code>0.2.0-1</code>,  <code>0.2.0-0</code>,  <code>0.1.90-4</code>,  <code>0.1.90-3</code>,  <code>0.1.90-2</code>,  <code>0.1.90-1</code>,  <code>0.1.90-0</code>,  <code>v0.1.90-3</code>,  </span></summary>
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.90-4``,  ``0.1.90-3``,  ``0.1.90-2``,  ``0.1.90-1``,  ``0.1.90-0``,  ``v0.1.90-3``,  ``v0.1.90-2``,  ``v0.1.90-1``,  ``v0.1.90-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-tibble: 

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

    pixi global install r-annotables

to add into an existing workspace instead, run::

    pixi add r-annotables

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-annotables

Alternatively, to install into a new environment, run::

    conda create -n envname r-annotables

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-annotables:<tag>

(see `r-annotables/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-annotables| image:: https://img.shields.io/conda/dn/bioconda/r-annotables.svg?style=flat
   :target: https://anaconda.org/bioconda/r-annotables
   :alt:   (downloads)
.. |docker_r-annotables| image:: https://quay.io/repository/biocontainers/r-annotables/status
   :target: https://quay.io/repository/biocontainers/r-annotables
.. _`r-annotables/tags`: https://quay.io/repository/biocontainers/r-annotables?tab=tags


.. raw:: html

    <script>
        var package = "r-annotables";
        var versions = ["0.2.0","0.2.0","0.2.0","0.1.90","0.1.90"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-annotables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-annotables/README.html