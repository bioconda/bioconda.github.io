:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tissuumaps'
.. highlight: bash

tissuumaps
==========

.. conda:recipe:: tissuumaps
   :replaces_section_title:
   :noindex:

   TissUUmaps is a lightweight viewer that uses basic web tools to visualize gene expression data or any kind of point data on top of whole slide images


   :homepage: https://tissuumaps.research.it.uu.se/
   :license: MIT
   :recipe: /`tissuumaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tissuumaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tissuumaps/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.01.28.478131`

   


.. conda:package:: tissuumaps

   |downloads_tissuumaps| |docker_tissuumaps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1.14-0</code>,  <code>3.2.1.12-0</code>,  <code>3.2.1.11-0</code>,  <code>3.2.1.10-0</code>,  <code>3.2.1.9-0</code>,  <code>3.2.1.8-0</code>,  <code>3.2.1.7-0</code>,  <code>3.2.1.6-0</code>,  <code>3.2.1.5-0</code>,  </span></summary>
      

      ``3.2.1.14-0``,  ``3.2.1.12-0``,  ``3.2.1.11-0``,  ``3.2.1.10-0``,  ``3.2.1.9-0``,  ``3.2.1.8-0``,  ``3.2.1.7-0``,  ``3.2.1.6-0``,  ``3.2.1.5-0``,  ``3.2.1.4-0``,  ``3.2.1.3-0``,  ``3.2.1.2-0``,  ``3.2.1.1-0``,  ``3.2.0.5-0``,  ``3.2.0.4-0``,  ``3.2.0.3-0``,  ``3.2.0.2-0``,  ``3.2.0.1-0``,  ``3.2-0``,  ``3.1.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on flask: ``>=2``
   :depends on h5py: ``>=3.6.0``
   :depends on ipython: ``>=7.0``
   :depends on openslide-python: ``>=1.1.2``
   :depends on pillow: ``>=8.2.0``
   :depends on python: 
   :depends on pyvips: 
   :depends on pyyaml: ``>=6.0``
   :depends on scipy: ``>=1.7.2``

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

    pixi global install tissuumaps

to add into an existing workspace instead, run::

    pixi add tissuumaps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tissuumaps

Alternatively, to install into a new environment, run::

    conda create -n envname tissuumaps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tissuumaps:<tag>

(see `tissuumaps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tissuumaps| image:: https://img.shields.io/conda/dn/bioconda/tissuumaps.svg?style=flat
   :target: https://anaconda.org/bioconda/tissuumaps
   :alt:   (downloads)
.. |docker_tissuumaps| image:: https://quay.io/repository/biocontainers/tissuumaps/status
   :target: https://quay.io/repository/biocontainers/tissuumaps
.. _`tissuumaps/tags`: https://quay.io/repository/biocontainers/tissuumaps?tab=tags


.. raw:: html

    <script>
        var package = "tissuumaps";
        var versions = ["3.2.1.14","3.2.1.12","3.2.1.11","3.2.1.10","3.2.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tissuumaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tissuumaps/README.html