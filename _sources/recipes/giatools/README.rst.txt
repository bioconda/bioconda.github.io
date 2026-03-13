:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'giatools'
.. highlight: bash

giatools
========

.. conda:recipe:: giatools
   :replaces_section_title:
   :noindex:

   Tools required for Galaxy Image Analysis

   :homepage: https://github.com/BMCV/giatools
   :license: MIT
   :recipe: /`giatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/giatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/giatools/meta.yaml>`_

   


.. conda:package:: giatools

   |downloads_giatools| |docker_giatools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.3-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.2-0</code>,  </span></summary>
      

      ``0.7.3-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: ``>=25.4``
   :depends on numpy: ``>=1.18``
   :depends on ome-zarr: ``>=0.12.2,<0.13``
   :depends on python: ``>=3.9``
   :depends on scikit-image: ``>=0.18,<0.27``
   :depends on tifffile: 

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

    pixi global install giatools

to add into an existing workspace instead, run::

    pixi add giatools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install giatools

Alternatively, to install into a new environment, run::

    conda create -n envname giatools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/giatools:<tag>

(see `giatools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_giatools| image:: https://img.shields.io/conda/dn/bioconda/giatools.svg?style=flat
   :target: https://anaconda.org/bioconda/giatools
   :alt:   (downloads)
.. |docker_giatools| image:: https://quay.io/repository/biocontainers/giatools/status
   :target: https://quay.io/repository/biocontainers/giatools
.. _`giatools/tags`: https://quay.io/repository/biocontainers/giatools?tab=tags


.. raw:: html

    <script>
        var package = "giatools";
        var versions = ["0.7.3","0.7.1","0.7.0","0.6.0","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/giatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/giatools/README.html