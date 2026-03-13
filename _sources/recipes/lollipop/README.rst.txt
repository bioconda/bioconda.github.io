:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lollipop'
.. highlight: bash

lollipop
========

.. conda:recipe:: lollipop
   :replaces_section_title:
   :noindex:

   A tool for Deconvolution for Wastewater Genomics

   :homepage: https://github.com/cbg-ethz/LolliPop
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`lollipop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lollipop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lollipop/meta.yaml>`_
   :links: biotools: :biotools:`lollipop`, doi: :doi:`10.1101/2022.11.02.22281825`

   


.. conda:package:: lollipop

   |downloads_lollipop| |docker_lollipop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: 
   :depends on click: 
   :depends on click-option-group: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.10``
   :depends on ruamel.yaml: ``>=0.18``
   :depends on scipy: 
   :depends on strictyaml: 
   :depends on threadpoolctl: 
   :depends on tqdm: 
   :depends on zstandard: 

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

    pixi global install lollipop

to add into an existing workspace instead, run::

    pixi add lollipop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lollipop

Alternatively, to install into a new environment, run::

    conda create -n envname lollipop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lollipop:<tag>

(see `lollipop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lollipop| image:: https://img.shields.io/conda/dn/bioconda/lollipop.svg?style=flat
   :target: https://anaconda.org/bioconda/lollipop
   :alt:   (downloads)
.. |docker_lollipop| image:: https://quay.io/repository/biocontainers/lollipop/status
   :target: https://quay.io/repository/biocontainers/lollipop
.. _`lollipop/tags`: https://quay.io/repository/biocontainers/lollipop?tab=tags


.. raw:: html

    <script>
        var package = "lollipop";
        var versions = ["0.5.3","0.5.2","0.5.1","0.5.0","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lollipop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lollipop/README.html