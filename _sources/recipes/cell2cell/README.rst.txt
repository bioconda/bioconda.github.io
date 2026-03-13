:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cell2cell'
.. highlight: bash

cell2cell
=========

.. conda:recipe:: cell2cell
   :replaces_section_title:
   :noindex:

   Inferring cell\-cell interactions from transcriptomes with cell2cell.

   :homepage: https://github.com/earmingol/cell2cell
   :license: BSD / BSD-3-Clause
   :recipe: /`cell2cell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cell2cell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cell2cell/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1010715`

   


.. conda:package:: cell2cell

   |downloads_cell2cell| |docker_cell2cell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-3</code>,  <code>0.7.4-2</code>,  <code>0.7.4-1</code>,  </span></summary>
      

      ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-3``,  ``0.7.4-2``,  ``0.7.4-1``,  ``0.7.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gseapy: ``>=1.1.6``
   :depends on kneed: 
   :depends on matplotlib-base: ``>=3.2.0``
   :depends on networkx: ``>=2.3``
   :depends on numpy: ``>=1.16``
   :depends on openpyxl: ``>=2.6.2``
   :depends on pandas: ``>=1.0.0``
   :depends on python: ``>=3``
   :depends on scanpy: 
   :depends on scikit-learn: 
   :depends on seaborn-base: ``>=0.11.0``
   :depends on statannotations: 
   :depends on statsmodels: 
   :depends on tensorly: 
   :depends on tqdm: 
   :depends on umap-learn: 
   :depends on xlrd: ``>=1.1``

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

    pixi global install cell2cell

to add into an existing workspace instead, run::

    pixi add cell2cell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cell2cell

Alternatively, to install into a new environment, run::

    conda create -n envname cell2cell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cell2cell:<tag>

(see `cell2cell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cell2cell| image:: https://img.shields.io/conda/dn/bioconda/cell2cell.svg?style=flat
   :target: https://anaconda.org/bioconda/cell2cell
   :alt:   (downloads)
.. |docker_cell2cell| image:: https://quay.io/repository/biocontainers/cell2cell/status
   :target: https://quay.io/repository/biocontainers/cell2cell
.. _`cell2cell/tags`: https://quay.io/repository/biocontainers/cell2cell?tab=tags


.. raw:: html

    <script>
        var package = "cell2cell";
        var versions = ["0.8.4","0.8.3","0.8.2","0.8.1","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cell2cell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cell2cell/README.html