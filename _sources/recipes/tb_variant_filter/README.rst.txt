:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tb_variant_filter'
.. highlight: bash

tb_variant_filter
=================

.. conda:recipe:: tb_variant_filter
   :replaces_section_title:
   :noindex:

   VCF variant filter optimised for filter M. tuberculosis H37Rv variants

   :homepage: http://github.com/COMBAT-TB/tb_variant_filter
   :license: GPL / GPL-3.0
   :recipe: /`tb_variant_filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb_variant_filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb_variant_filter/meta.yaml>`_

   tb\_variant\_filter filters variants in VCF filters\, with a focus on the kinds of filtering
   done with variants found relative to M. tuberculosis H37Rv


.. conda:package:: tb_variant_filter

   |downloads_tb_variant_filter| |docker_tb_variant_filter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-1</code>,  <code>0.2.0-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on intervaltree: 
   :depends on lxml: 
   :depends on neo4j-python-driver: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on requests: 
   :depends on vcfpy: 

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

    pixi global install tb_variant_filter

to add into an existing workspace instead, run::

    pixi add tb_variant_filter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tb_variant_filter

Alternatively, to install into a new environment, run::

    conda create -n envname tb_variant_filter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tb_variant_filter:<tag>

(see `tb_variant_filter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tb_variant_filter| image:: https://img.shields.io/conda/dn/bioconda/tb_variant_filter.svg?style=flat
   :target: https://anaconda.org/bioconda/tb_variant_filter
   :alt:   (downloads)
.. |docker_tb_variant_filter| image:: https://quay.io/repository/biocontainers/tb_variant_filter/status
   :target: https://quay.io/repository/biocontainers/tb_variant_filter
.. _`tb_variant_filter/tags`: https://quay.io/repository/biocontainers/tb_variant_filter?tab=tags


.. raw:: html

    <script>
        var package = "tb_variant_filter";
        var versions = ["0.4.0","0.3.6","0.3.5","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tb_variant_filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tb_variant_filter/README.html