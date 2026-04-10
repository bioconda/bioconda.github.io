:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parsnp'
.. highlight: bash

parsnp
======

.. conda:recipe:: parsnp
   :replaces_section_title:
   :noindex:

   Parsnp is a command\-line\-tool for efficient microbial core genome alignment and SNP detection.

   :homepage: https://github.com/marbl/parsnp
   :documentation: https://harvest.readthedocs.io/en/latest/content/parsnp/tutorial.html
   
   :license: custom; see https://raw.githubusercontent.com/marbl/parsnp/master/LICENSE
   :recipe: /`parsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parsnp/meta.yaml>`_

   


.. conda:package:: parsnp

   |downloads_parsnp| |docker_parsnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.5-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  </span></summary>
      

      ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``1.7.4-2``,  ``1.7.4-1``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.6-1``,  ``1.5.6-0``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-1``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-4``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on fastani: 
   :depends on fasttree: 
   :depends on harvesttools: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mash: 
   :depends on numpy: 
   :depends on openmp: 
   :depends on phipack: 
   :depends on pyspoa: 
   :depends on python: ``>=3.7``
   :depends on raxml: 
   :depends on tqdm: 
   :depends on zlib: 

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

    pixi global install parsnp

to add into an existing workspace instead, run::

    pixi add parsnp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parsnp

Alternatively, to install into a new environment, run::

    conda create -n envname parsnp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parsnp:<tag>

(see `parsnp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parsnp| image:: https://img.shields.io/conda/dn/bioconda/parsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/parsnp
   :alt:   (downloads)
.. |docker_parsnp| image:: https://quay.io/repository/biocontainers/parsnp/status
   :target: https://quay.io/repository/biocontainers/parsnp
.. _`parsnp/tags`: https://quay.io/repository/biocontainers/parsnp?tab=tags


.. raw:: html

    <script>
        var package = "parsnp";
        var versions = ["2.1.5","2.1.4","2.1.3","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parsnp/README.html