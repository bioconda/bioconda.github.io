:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wiggletools'
.. highlight: bash

wiggletools
===========

.. conda:recipe:: wiggletools
   :replaces_section_title:
   :noindex:

   The WiggleTools package allows genomewide data files to be manipulated as numerical functions\, equipped with all the standard functional analysis operators \(sum\, product\, product by a scalar\, comparators\)\, and derived statistics \(mean\, median\, variance\, stddev\, t\-test\, Wilcoxon\'s rank sum test\, etc\).

   :homepage: https://github.com/Ensembl/WiggleTools
   :documentation: https://github.com/Ensembl/WiggleTools/blob/v1.2.11/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`wiggletools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wiggletools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wiggletools/meta.yaml>`_

   


.. conda:package:: wiggletools

   |downloads_wiggletools| |docker_wiggletools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.11-10</code>,  <code>1.2.11-9</code>,  <code>1.2.11-8</code>,  <code>1.2.11-7</code>,  <code>1.2.11-6</code>,  <code>1.2.11-5</code>,  <code>1.2.11-4</code>,  <code>1.2.11-3</code>,  <code>1.2.11-2</code>,  </span></summary>
      

      ``1.2.11-10``,  ``1.2.11-9``,  ``1.2.11-8``,  ``1.2.11-7``,  ``1.2.11-6``,  ``1.2.11-5``,  ``1.2.11-4``,  ``1.2.11-3``,  ``1.2.11-2``,  ``1.2.11-1``,  ``1.2.11-0``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.8-2``,  ``1.2.8-1``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libbigwig: ``>=0.4.8,<0.5.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install wiggletools

to add into an existing workspace instead, run::

    pixi add wiggletools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wiggletools

Alternatively, to install into a new environment, run::

    conda create -n envname wiggletools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wiggletools:<tag>

(see `wiggletools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wiggletools| image:: https://img.shields.io/conda/dn/bioconda/wiggletools.svg?style=flat
   :target: https://anaconda.org/bioconda/wiggletools
   :alt:   (downloads)
.. |docker_wiggletools| image:: https://quay.io/repository/biocontainers/wiggletools/status
   :target: https://quay.io/repository/biocontainers/wiggletools
.. _`wiggletools/tags`: https://quay.io/repository/biocontainers/wiggletools?tab=tags


.. raw:: html

    <script>
        var package = "wiggletools";
        var versions = ["1.2.11","1.2.11","1.2.11","1.2.11","1.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wiggletools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wiggletools/README.html