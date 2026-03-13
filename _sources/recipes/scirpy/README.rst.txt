:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scirpy'
.. highlight: bash

scirpy
======

.. conda:recipe:: scirpy
   :replaces_section_title:
   :noindex:

   A Scanpy extension for analyzing single\-cell T\-cell and B\-cell receptor \(TCR\/BCR\) sequencing data.

   :homepage: https://scirpy.scverse.org/en/latest
   :developer docs: https://github.com/icbi-lab/scirpy
   :license: BSD / BSD-3-Clause
   :recipe: /`scirpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scirpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scirpy/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.04.10.035865`

   


.. conda:package:: scirpy

   |downloads_scirpy| |docker_scirpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.23.0-0</code>,  <code>0.22.5-0</code>,  <code>0.22.4-0</code>,  <code>0.22.3-0</code>,  <code>0.22.2-0</code>,  <code>0.22.1-0</code>,  <code>0.22.0-0</code>,  <code>0.21.0-0</code>,  <code>0.20.1-0</code>,  </span></summary>
      

      ``0.23.0-0``,  ``0.22.5-0``,  ``0.22.4-0``,  ``0.22.3-0``,  ``0.22.2-0``,  ``0.22.1-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.1-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: ``>=0.7``
   :depends on airr: ``>=1.4.1``
   :depends on anndata: ``>=0.9``
   :depends on awkward: ``>=2.1.0``
   :depends on joblib: ``>=1.3.1``
   :depends on logomaker: ``!=0.8.5``
   :depends on mudata: ``>=0.2.3``
   :depends on networkx: ``>=2.5``
   :depends on numba: ``>=0.41.0``
   :depends on numpy: ``>=1.17.0``
   :depends on pandas: ``>=2.3``
   :depends on pooch: ``>=1.7.0``
   :depends on python: ``>=3.12``
   :depends on python-igraph: ``>0.10.1|<0.10.0``
   :depends on python-levenshtein: 
   :depends on scanpy: ``>=1.9.3``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on setuptools: ``<82``
   :depends on squarify: 
   :depends on tqdm: ``>=4.63``

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

    pixi global install scirpy

to add into an existing workspace instead, run::

    pixi add scirpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scirpy

Alternatively, to install into a new environment, run::

    conda create -n envname scirpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scirpy:<tag>

(see `scirpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scirpy| image:: https://img.shields.io/conda/dn/bioconda/scirpy.svg?style=flat
   :target: https://anaconda.org/bioconda/scirpy
   :alt:   (downloads)
.. |docker_scirpy| image:: https://quay.io/repository/biocontainers/scirpy/status
   :target: https://quay.io/repository/biocontainers/scirpy
.. _`scirpy/tags`: https://quay.io/repository/biocontainers/scirpy?tab=tags


.. raw:: html

    <script>
        var package = "scirpy";
        var versions = ["0.23.0","0.22.5","0.22.4","0.22.3","0.22.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scirpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scirpy/README.html