:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apcomplex'
.. highlight: bash

bioconductor-apcomplex
======================

.. conda:recipe:: bioconductor-apcomplex
   :replaces_section_title:
   :noindex:

   Estimate protein complex membership using AP\-MS protein data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/apComplex.html
   :license: LGPL
   :recipe: /`bioconductor-apcomplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apcomplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apcomplex/meta.yaml>`_
   :links: biotools: :biotools:`apcomplex`, doi: :doi:`10.1093/bioinformatics/bti567`

   Functions to estimate a bipartite graph of protein complex membership using AP\-MS data.


.. conda:package:: bioconductor-apcomplex

   |downloads_bioconductor-apcomplex| |docker_bioconductor-apcomplex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.76.0-0</code>,  <code>2.72.0-0</code>,  <code>2.68.0-0</code>,  <code>2.66.0-0</code>,  <code>2.64.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-1</code>,  <code>2.56.0-0</code>,  </span></summary>
      

      ``2.76.0-0``,  ``2.72.0-0``,  ``2.68.0-0``,  ``2.66.0-0``,  ``2.64.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-org.sc.sgd.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0``
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

    pixi global install bioconductor-apcomplex

to add into an existing workspace instead, run::

    pixi add bioconductor-apcomplex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-apcomplex

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-apcomplex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-apcomplex:<tag>

(see `bioconductor-apcomplex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-apcomplex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apcomplex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-apcomplex
   :alt:   (downloads)
.. |docker_bioconductor-apcomplex| image:: https://quay.io/repository/biocontainers/bioconductor-apcomplex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apcomplex
.. _`bioconductor-apcomplex/tags`: https://quay.io/repository/biocontainers/bioconductor-apcomplex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-apcomplex";
        var versions = ["2.76.0","2.72.0","2.68.0","2.66.0","2.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apcomplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apcomplex/README.html