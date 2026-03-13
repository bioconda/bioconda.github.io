:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minced'
.. highlight: bash

minced
======

.. conda:recipe:: minced
   :replaces_section_title:
   :noindex:

   MinCED \- Mining CRISPRs in Environmental Datasets

   :homepage: https://github.com/ctSkennerton/minced
   :license: GPL-3.0
   :recipe: /`minced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minced/meta.yaml>`_

   


.. conda:package:: minced

   |downloads_minced| |docker_minced|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.2-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``

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

    pixi global install minced

to add into an existing workspace instead, run::

    pixi add minced

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minced

Alternatively, to install into a new environment, run::

    conda create -n envname minced

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minced:<tag>

(see `minced/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minced| image:: https://img.shields.io/conda/dn/bioconda/minced.svg?style=flat
   :target: https://anaconda.org/bioconda/minced
   :alt:   (downloads)
.. |docker_minced| image:: https://quay.io/repository/biocontainers/minced/status
   :target: https://quay.io/repository/biocontainers/minced
.. _`minced/tags`: https://quay.io/repository/biocontainers/minced?tab=tags


.. raw:: html

    <script>
        var package = "minced";
        var versions = ["0.4.2","0.4.2","0.4.1","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minced/README.html