:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'celltypist'
.. highlight: bash

celltypist
==========

.. conda:recipe:: celltypist
   :replaces_section_title:
   :noindex:

   A tool for semi\-automatic cell type annotation.

   :homepage: https://github.com/Teichlab/celltypist
   :documentation: https://www.celltypist.org
   
   :license: MIT / MIT
   :recipe: /`celltypist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/celltypist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/celltypist/meta.yaml>`_
   :links: doi: :doi:`10.1126/science.abl5197`

   


.. conda:package:: celltypist

   |downloads_celltypist| |docker_celltypist|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  </span></summary>
      

      ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-1``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=7.1.2``
   :depends on leidenalg: ``>=0.9.0``
   :depends on numpy: ``>=1.19.0``
   :depends on openpyxl: ``>=3.0.4``
   :depends on pandas: ``>=1.0.5``
   :depends on python: ``>=3.6``
   :depends on python-annoy: 
   :depends on requests: ``>=2.23.0``
   :depends on scanpy: ``>=1.7.0``
   :depends on scikit-learn: ``>=0.24.1``

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

    pixi global install celltypist

to add into an existing workspace instead, run::

    pixi add celltypist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install celltypist

Alternatively, to install into a new environment, run::

    conda create -n envname celltypist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/celltypist:<tag>

(see `celltypist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_celltypist| image:: https://img.shields.io/conda/dn/bioconda/celltypist.svg?style=flat
   :target: https://anaconda.org/bioconda/celltypist
   :alt:   (downloads)
.. |docker_celltypist| image:: https://quay.io/repository/biocontainers/celltypist/status
   :target: https://quay.io/repository/biocontainers/celltypist
.. _`celltypist/tags`: https://quay.io/repository/biocontainers/celltypist?tab=tags


.. raw:: html

    <script>
        var package = "celltypist";
        var versions = ["1.7.1","1.7.0","1.6.3","1.6.2","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/celltypist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/celltypist/README.html