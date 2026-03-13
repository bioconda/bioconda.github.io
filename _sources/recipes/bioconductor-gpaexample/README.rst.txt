:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpaexample'
.. highlight: bash

bioconductor-gpaexample
=======================

.. conda:recipe:: bioconductor-gpaexample
   :replaces_section_title:
   :noindex:

   Example data for the GPA package \(Genetic analysis incorporating Pleiotropy and Annotation\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/gpaExample.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gpaexample <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpaexample>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpaexample/meta.yaml>`_

   Example data for the GPA package\, consisting of the p\-values of 1\,219\,805 SNPs for five psychiatric disorder GWAS from the psychiatric GWAS consortium \(PGC\)\, with the annotation data using genes preferentially expressed in the central nervous system \(CNS\).


.. conda:package:: bioconductor-gpaexample

   |downloads_bioconductor-gpaexample| |docker_bioconductor-gpaexample|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.9.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
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

    pixi global install bioconductor-gpaexample

to add into an existing workspace instead, run::

    pixi add bioconductor-gpaexample

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gpaexample

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gpaexample

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gpaexample:<tag>

(see `bioconductor-gpaexample/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gpaexample| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpaexample.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpaexample
   :alt:   (downloads)
.. |docker_bioconductor-gpaexample| image:: https://quay.io/repository/biocontainers/bioconductor-gpaexample/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpaexample
.. _`bioconductor-gpaexample/tags`: https://quay.io/repository/biocontainers/bioconductor-gpaexample?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpaexample";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpaexample/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpaexample/README.html