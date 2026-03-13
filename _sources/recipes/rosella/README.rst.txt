:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rosella'
.. highlight: bash

rosella
=======

.. conda:recipe:: rosella
   :replaces_section_title:
   :noindex:

   Metagenomic binning pipeline and algorithm using UMAP and HDBSCAN

   :homepage: https://github.com/rhysnewell/rosella.git
   :license: BSD-3-Clause
   :recipe: /`rosella <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rosella>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rosella/meta.yaml>`_

   


.. conda:package:: rosella

   |downloads_rosella| |docker_rosella|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.7-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-2</code>,  <code>0.4.2-1</code>,  </span></summary>
      

      ``0.5.7-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.81``
   :depends on coverm: ``>=0.6.1``
   :depends on flight-genome: ``>=1.6.0``
   :depends on hdbscan: ``>=0.8.28``
   :depends on imageio: ``>=2.31``
   :depends on joblib: ``>=1.1.0,<=1.3``
   :depends on joblib: ``>=1.3.0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: ``>=3.8``
   :depends on numba: ``>=0.53,<=0.57``
   :depends on numpy: ``<=1.24``
   :depends on openssl: ``>=3.6.0,<4.0a0``
   :depends on pandas: ``>=1.3``
   :depends on pebble: ``>=5.0``
   :depends on pynndescent: ``>=0.5.7``
   :depends on python: ``>=3.8,<=3.10``
   :depends on scikit-bio: ``>=0.5.7``
   :depends on scikit-learn: ``>=1.2.0``
   :depends on scipy: ``<=1.11``
   :depends on seaborn: ``>=0.12``
   :depends on tbb: ``>=2021.10.0``
   :depends on threadpoolctl: ``>=3.2.0``
   :depends on tqdm: ``>=4.66``
   :depends on umap-learn: ``>=0.5.3``

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

    pixi global install rosella

to add into an existing workspace instead, run::

    pixi add rosella

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rosella

Alternatively, to install into a new environment, run::

    conda create -n envname rosella

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rosella:<tag>

(see `rosella/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rosella| image:: https://img.shields.io/conda/dn/bioconda/rosella.svg?style=flat
   :target: https://anaconda.org/bioconda/rosella
   :alt:   (downloads)
.. |docker_rosella| image:: https://quay.io/repository/biocontainers/rosella/status
   :target: https://quay.io/repository/biocontainers/rosella
.. _`rosella/tags`: https://quay.io/repository/biocontainers/rosella?tab=tags


.. raw:: html

    <script>
        var package = "rosella";
        var versions = ["0.5.7","0.5.5","0.5.4","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rosella/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rosella/README.html