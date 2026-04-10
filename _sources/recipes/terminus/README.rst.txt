:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'terminus'
.. highlight: bash

terminus
========

.. conda:recipe:: terminus
   :replaces_section_title:
   :noindex:

   Terminus enables the discovery of data\-driven\, robust transcript groups from RNA\-seq data

   :homepage: https://github.com/COMBINE-lab/terminus
   :license: BSD 3-Clause
   :recipe: /`terminus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/terminus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/terminus/meta.yaml>`_

   


.. conda:package:: terminus

   |downloads_terminus| |docker_terminus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.0-8</code>,  <code>0.1.0-7</code>,  <code>0.1.0-6</code>,  <code>0.1.0-5</code>,  <code>0.1.0-4</code>,  <code>0.1.0-3</code>,  <code>0.1.0-2</code>,  <code>0.1.0-1</code>,  <code>0.1.0-0</code>,  </span></summary>
      

      ``0.1.0-8``,  ``0.1.0-7``,  ``0.1.0-6``,  ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``v0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install terminus

to add into an existing workspace instead, run::

    pixi add terminus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install terminus

Alternatively, to install into a new environment, run::

    conda create -n envname terminus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/terminus:<tag>

(see `terminus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_terminus| image:: https://img.shields.io/conda/dn/bioconda/terminus.svg?style=flat
   :target: https://anaconda.org/bioconda/terminus
   :alt:   (downloads)
.. |docker_terminus| image:: https://quay.io/repository/biocontainers/terminus/status
   :target: https://quay.io/repository/biocontainers/terminus
.. _`terminus/tags`: https://quay.io/repository/biocontainers/terminus?tab=tags


.. raw:: html

    <script>
        var package = "terminus";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/terminus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/terminus/README.html