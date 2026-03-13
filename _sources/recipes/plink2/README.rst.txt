:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plink2'
.. highlight: bash

plink2
======

.. conda:recipe:: plink2
   :replaces_section_title:
   :noindex:

   Whole genome association analysis toolset

   :homepage: https://www.cog-genomics.org/plink2
   :license: GPL-3
   :recipe: /`plink2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink2/meta.yaml>`_

   Whole genome association analysis toolset\, designed to perform a range of basic\, large\-scale analyses in a computationally efficient manner.


.. conda:package:: plink2

   |downloads_plink2| |docker_plink2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0a.6.9-0</code>,  <code>2.00a5.12-1</code>,  <code>2.00a5.12-0</code>,  <code>2.00a5.10-0</code>,  <code>2.00a5-0</code>,  <code>2.00a3.7-4</code>,  <code>2.00a3.7-3</code>,  <code>2.00a3.7-2</code>,  <code>2.00a3.7-1</code>,  </span></summary>
      

      ``2.0.0a.6.9-0``,  ``2.00a5.12-1``,  ``2.00a5.12-0``,  ``2.00a5.10-0``,  ``2.00a5-0``,  ``2.00a3.7-4``,  ``2.00a3.7-3``,  ``2.00a3.7-2``,  ``2.00a3.7-1``,  ``2.00a3.7-0``,  ``2.00a3.3-0``,  ``2.00a2.3-2``,  ``2.00a2.3-1``,  ``2.00a2.3-0``,  ``1.90b3.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install plink2

to add into an existing workspace instead, run::

    pixi add plink2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plink2

Alternatively, to install into a new environment, run::

    conda create -n envname plink2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plink2:<tag>

(see `plink2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plink2| image:: https://img.shields.io/conda/dn/bioconda/plink2.svg?style=flat
   :target: https://anaconda.org/bioconda/plink2
   :alt:   (downloads)
.. |docker_plink2| image:: https://quay.io/repository/biocontainers/plink2/status
   :target: https://quay.io/repository/biocontainers/plink2
.. _`plink2/tags`: https://quay.io/repository/biocontainers/plink2?tab=tags


.. raw:: html

    <script>
        var package = "plink2";
        var versions = ["2.0.0a.6.9","2.00a5.12","2.00a5.12","2.00a5.10","2.00a5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plink2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plink2/README.html