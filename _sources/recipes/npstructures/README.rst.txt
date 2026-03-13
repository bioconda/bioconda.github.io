:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'npstructures'
.. highlight: bash

npstructures
============

.. conda:recipe:: npstructures
   :replaces_section_title:
   :noindex:

   Simple data structures that augments the numpy library

   :homepage: https://github.com/bionumpy/npstructures
   :license: MIT
   :recipe: /`npstructures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npstructures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npstructures/meta.yaml>`_

   


.. conda:package:: npstructures

   |downloads_npstructures| |docker_npstructures|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.19-1</code>,  <code>0.2.19-0</code>,  <code>0.2.18-0</code>,  <code>0.2.17-0</code>,  <code>0.2.16-0</code>,  <code>0.2.15-0</code>,  <code>0.2.14-0</code>,  <code>0.2.13-0</code>,  <code>0.2.12-0</code>,  </span></summary>
      

      ``0.2.19-1``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: ``>=1.20``
   :depends on python: ``>=3``

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

    pixi global install npstructures

to add into an existing workspace instead, run::

    pixi add npstructures

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install npstructures

Alternatively, to install into a new environment, run::

    conda create -n envname npstructures

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/npstructures:<tag>

(see `npstructures/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_npstructures| image:: https://img.shields.io/conda/dn/bioconda/npstructures.svg?style=flat
   :target: https://anaconda.org/bioconda/npstructures
   :alt:   (downloads)
.. |docker_npstructures| image:: https://quay.io/repository/biocontainers/npstructures/status
   :target: https://quay.io/repository/biocontainers/npstructures
.. _`npstructures/tags`: https://quay.io/repository/biocontainers/npstructures?tab=tags


.. raw:: html

    <script>
        var package = "npstructures";
        var versions = ["0.2.19","0.2.19","0.2.18","0.2.17","0.2.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/npstructures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/npstructures/README.html