:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ont-fast5-api'
.. highlight: bash

ont-fast5-api
=============

.. conda:recipe:: ont-fast5-api
   :replaces_section_title:
   :noindex:

   Oxford Nanopore Technologies fast5 API software

   :homepage: https://github.com/nanoporetech/ont_fast5_api
   :license: MOZILLA / MPL-2.0
   :recipe: /`ont-fast5-api <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-fast5-api>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-fast5-api/meta.yaml>`_

   


.. conda:package:: ont-fast5-api

   |downloads_ont-fast5-api| |docker_ont-fast5-api|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.3-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.2-0</code>,  <code>4.0.0-0</code>,  <code>3.3.0-0</code>,  <code>3.2.0-0</code>,  <code>3.1.6-0</code>,  </span></summary>
      

      ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.2-0``,  ``4.0.0-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.8-1``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on h5py: ``>=2.6``
   :depends on hdf5: 
   :depends on numpy: ``>=1.11``
   :depends on packaging: 
   :depends on progressbar33: ``>=2.3.1``
   :depends on python: ``>=3``
   :depends on six: ``>=1.9``
   :depends on tar: 
   :depends on zstd: 

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

    pixi global install ont-fast5-api

to add into an existing workspace instead, run::

    pixi add ont-fast5-api

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ont-fast5-api

Alternatively, to install into a new environment, run::

    conda create -n envname ont-fast5-api

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ont-fast5-api:<tag>

(see `ont-fast5-api/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ont-fast5-api| image:: https://img.shields.io/conda/dn/bioconda/ont-fast5-api.svg?style=flat
   :target: https://anaconda.org/bioconda/ont-fast5-api
   :alt:   (downloads)
.. |docker_ont-fast5-api| image:: https://quay.io/repository/biocontainers/ont-fast5-api/status
   :target: https://quay.io/repository/biocontainers/ont-fast5-api
.. _`ont-fast5-api/tags`: https://quay.io/repository/biocontainers/ont-fast5-api?tab=tags


.. raw:: html

    <script>
        var package = "ont-fast5-api";
        var versions = ["4.1.3","4.1.2","4.1.1","4.1.0","4.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont-fast5-api/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont-fast5-api/README.html