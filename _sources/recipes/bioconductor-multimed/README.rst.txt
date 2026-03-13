:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multimed'
.. highlight: bash

bioconductor-multimed
=====================

.. conda:recipe:: bioconductor-multimed
   :replaces_section_title:
   :noindex:

   Testing multiple biological mediators simultaneously

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MultiMed.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-multimed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimed/meta.yaml>`_
   :links: biotools: :biotools:`multimed`, doi: :doi:`10.1093/bioinformatics/btt633`

   Implements methods for testing multiple mediators


.. conda:package:: bioconductor-multimed

   |downloads_bioconductor-multimed| |docker_bioconductor-multimed|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.28.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-multimed

to add into an existing workspace instead, run::

    pixi add bioconductor-multimed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-multimed

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-multimed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-multimed:<tag>

(see `bioconductor-multimed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-multimed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multimed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multimed
   :alt:   (downloads)
.. |docker_bioconductor-multimed| image:: https://quay.io/repository/biocontainers/bioconductor-multimed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multimed
.. _`bioconductor-multimed/tags`: https://quay.io/repository/biocontainers/bioconductor-multimed?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multimed";
        var versions = ["2.32.0","2.28.0","2.24.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multimed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multimed/README.html