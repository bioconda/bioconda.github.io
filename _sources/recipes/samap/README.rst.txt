:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samap'
.. highlight: bash

samap
=====

.. conda:recipe:: samap
   :replaces_section_title:
   :noindex:

   The SAMap algorithm

   :homepage: https://github.com/atarashansky/SAMap
   :license: MIT / MIT
   :recipe: /`samap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samap/meta.yaml>`_

   


.. conda:package:: samap

   |downloads_samap| |docker_samap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.15-0</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on dill: 
   :depends on h5py: ``<=2.10``
   :depends on hnswlib: 
   :depends on leidenalg: 
   :depends on python: ``<3.8``
   :depends on sam-algorithm: ``>=0.8.4``
   :depends on scanpy: 

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

    pixi global install samap

to add into an existing workspace instead, run::

    pixi add samap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samap

Alternatively, to install into a new environment, run::

    conda create -n envname samap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samap:<tag>

(see `samap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samap| image:: https://img.shields.io/conda/dn/bioconda/samap.svg?style=flat
   :target: https://anaconda.org/bioconda/samap
   :alt:   (downloads)
.. |docker_samap| image:: https://quay.io/repository/biocontainers/samap/status
   :target: https://quay.io/repository/biocontainers/samap
.. _`samap/tags`: https://quay.io/repository/biocontainers/samap?tab=tags


.. raw:: html

    <script>
        var package = "samap";
        var versions = ["1.0.15","1.0.14","1.0.13","1.0.12","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samap/README.html