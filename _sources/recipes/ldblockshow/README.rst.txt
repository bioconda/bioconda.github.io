:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ldblockshow'
.. highlight: bash

ldblockshow
===========

.. conda:recipe:: ldblockshow
   :replaces_section_title:
   :noindex:

   A tool for showing linkage disequilibrium heatmaps from variant call format \(VCF\) files.

   :homepage: https://github.com/BGI-shenzhen/LDBlockShow
   :license: MIT / MIT
   :recipe: /`ldblockshow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldblockshow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ldblockshow/meta.yaml>`_
   :links: biotools: :biotools:`ldblockshow`

   


.. conda:package:: ldblockshow

   |downloads_ldblockshow| |docker_ldblockshow|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.41-0</code>,  <code>1.40-3</code>,  <code>1.40-2</code>,  <code>1.40-1</code>,  <code>1.40-0</code>,  <code>1.38-0</code>,  <code>1.37-0</code>,  <code>1.36-0</code>,  <code>1.35-0</code>,  </span></summary>
      

      ``1.41-0``,  ``1.40-3``,  ``1.40-2``,  ``1.40-1``,  ``1.40-0``,  ``1.38-0``,  ``1.37-0``,  ``1.36-0``,  ``1.35-0``,  ``1.34-0``,  ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.27-0``,  ``1.25-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-svg: 
   :depends on plink: 

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

    pixi global install ldblockshow

to add into an existing workspace instead, run::

    pixi add ldblockshow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ldblockshow

Alternatively, to install into a new environment, run::

    conda create -n envname ldblockshow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ldblockshow:<tag>

(see `ldblockshow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ldblockshow| image:: https://img.shields.io/conda/dn/bioconda/ldblockshow.svg?style=flat
   :target: https://anaconda.org/bioconda/ldblockshow
   :alt:   (downloads)
.. |docker_ldblockshow| image:: https://quay.io/repository/biocontainers/ldblockshow/status
   :target: https://quay.io/repository/biocontainers/ldblockshow
.. _`ldblockshow/tags`: https://quay.io/repository/biocontainers/ldblockshow?tab=tags


.. raw:: html

    <script>
        var package = "ldblockshow";
        var versions = ["1.41","1.40","1.40","1.40","1.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ldblockshow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ldblockshow/README.html