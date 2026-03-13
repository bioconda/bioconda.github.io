:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-paircompviz'
.. highlight: bash

bioconductor-paircompviz
========================

.. conda:recipe:: bioconductor-paircompviz
   :replaces_section_title:
   :noindex:

   Multiple comparison test visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/paircompviz.html
   :license: GPL (>=3.0)
   :recipe: /`bioconductor-paircompviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paircompviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paircompviz/meta.yaml>`_
   :links: biotools: :biotools:`paircompviz`, doi: :doi:`10.1038/nmeth.3252`

   This package provides visualization of the results from the multiple \(i.e. pairwise\) comparison tests such as pairwise.t.test\, pairwise.prop.test or pairwise.wilcox.test. The groups being compared are visualized as nodes in Hasse diagram. Such approach enables very clear and vivid depiction of which group is significantly greater than which others\, especially if comparing a large number of groups.


.. conda:package:: bioconductor-paircompviz

   |downloads_bioconductor-paircompviz| |docker_bioconductor-paircompviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rgraphviz: ``>=2.54.0,<2.55.0``
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

    pixi global install bioconductor-paircompviz

to add into an existing workspace instead, run::

    pixi add bioconductor-paircompviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-paircompviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-paircompviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-paircompviz:<tag>

(see `bioconductor-paircompviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-paircompviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paircompviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-paircompviz
   :alt:   (downloads)
.. |docker_bioconductor-paircompviz| image:: https://quay.io/repository/biocontainers/bioconductor-paircompviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paircompviz
.. _`bioconductor-paircompviz/tags`: https://quay.io/repository/biocontainers/bioconductor-paircompviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-paircompviz";
        var versions = ["1.48.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paircompviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paircompviz/README.html