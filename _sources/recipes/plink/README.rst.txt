:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plink'
.. highlight: bash

plink
=====

.. conda:recipe:: plink
   :replaces_section_title:
   :noindex:

   Whole genome association analysis toolset\, designed to perform a range of basic\, large\-scale analyses in a computationally efficient manner.

   :homepage: https://www.cog-genomics.org/plink/
   :license: GPL
   :recipe: /`plink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink/meta.yaml>`_

   


.. conda:package:: plink

   |downloads_plink| |docker_plink|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.90b7.7-1</code>,  <code>1.90b7.7-0</code>,  <code>1.90b6.21-7</code>,  <code>1.90b6.21-6</code>,  <code>1.90b6.21-5</code>,  <code>1.90b6.21-4</code>,  <code>1.90b6.21-3</code>,  <code>1.90b6.21-2</code>,  <code>1.90b6.21-1</code>,  </span></summary>
      

      ``1.90b7.7-1``,  ``1.90b7.7-0``,  ``1.90b6.21-7``,  ``1.90b6.21-6``,  ``1.90b6.21-5``,  ``1.90b6.21-4``,  ``1.90b6.21-3``,  ``1.90b6.21-2``,  ``1.90b6.21-1``,  ``1.90b6.21-0``,  ``1.90b6.18-1``,  ``1.90b6.18-0``,  ``1.90b6.12-2``,  ``1.90b6.12-1``,  ``1.90b6.12-0``,  ``1.90b5-1``,  ``1.90b5-0``,  ``1.90b4-3``,  ``1.90b4-2``,  ``1.90b4-1``,  ``1.90b4-0``,  ``1.9.0b.7.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libopenblas: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install plink

to add into an existing workspace instead, run::

    pixi add plink

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plink

Alternatively, to install into a new environment, run::

    conda create -n envname plink

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plink:<tag>

(see `plink/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plink| image:: https://img.shields.io/conda/dn/bioconda/plink.svg?style=flat
   :target: https://anaconda.org/bioconda/plink
   :alt:   (downloads)
.. |docker_plink| image:: https://quay.io/repository/biocontainers/plink/status
   :target: https://quay.io/repository/biocontainers/plink
.. _`plink/tags`: https://quay.io/repository/biocontainers/plink?tab=tags


.. raw:: html

    <script>
        var package = "plink";
        var versions = ["1.90b7.7","1.90b7.7","1.90b6.21","1.90b6.21","1.90b6.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plink/README.html