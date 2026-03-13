:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phate'
.. highlight: bash

phate
=====

.. conda:recipe:: phate
   :replaces_section_title:
   :noindex:

   PHATE \(Potential of Heat\-diffusion for Affinity\-based Transition Embedding\) is a tool for visualizing high dimensional data.

   :homepage: https://github.com/KrishnaswamyLab/PHATE
   :documentation: https://phate.readthedocs.io
   
   :license: GPL / GPL-2.0-only
   :recipe: /`phate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phate/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-019-0336-3`

   


.. conda:package:: phate

   |downloads_phate| |docker_phate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``0.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on deprecated: 
   :depends on future: 
   :depends on graphtools: ``>=1.5.3``
   :depends on matplotlib-base: ``>=3.0``
   :depends on numpy: ``>=1.20.0``
   :depends on python: ``>=3.9``
   :depends on s_gd2: ``>=1.5``
   :depends on scikit-learn: ``>=1.5.0``
   :depends on scipy: ``>=1.7.0``
   :depends on scprep: ``>=0.11.1``
   :depends on tasklogger: ``>=1.2``

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

    pixi global install phate

to add into an existing workspace instead, run::

    pixi add phate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phate

Alternatively, to install into a new environment, run::

    conda create -n envname phate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phate:<tag>

(see `phate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phate| image:: https://img.shields.io/conda/dn/bioconda/phate.svg?style=flat
   :target: https://anaconda.org/bioconda/phate
   :alt:   (downloads)
.. |docker_phate| image:: https://quay.io/repository/biocontainers/phate/status
   :target: https://quay.io/repository/biocontainers/phate
.. _`phate/tags`: https://quay.io/repository/biocontainers/phate?tab=tags


.. raw:: html

    <script>
        var package = "phate";
        var versions = ["2.0.0","1.0.11","1.0.10","1.0.9","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phate/README.html