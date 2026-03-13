:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomescope2'
.. highlight: bash

genomescope2
============

.. conda:recipe:: genomescope2
   :replaces_section_title:
   :noindex:

   Reference\-free profiling of polyploid genomes

   :homepage: https://github.com/tbenavi1/genomescope2.0
   :license: Apache-2.0
   :recipe: /`genomescope2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomescope2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomescope2/meta.yaml>`_

   


.. conda:package:: genomescope2

   |downloads_genomescope2| |docker_genomescope2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0-7</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fonts-conda-ecosystem: 
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on r-argparse: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-minpack.lm: 

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

    pixi global install genomescope2

to add into an existing workspace instead, run::

    pixi add genomescope2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomescope2

Alternatively, to install into a new environment, run::

    conda create -n envname genomescope2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomescope2:<tag>

(see `genomescope2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomescope2| image:: https://img.shields.io/conda/dn/bioconda/genomescope2.svg?style=flat
   :target: https://anaconda.org/bioconda/genomescope2
   :alt:   (downloads)
.. |docker_genomescope2| image:: https://quay.io/repository/biocontainers/genomescope2/status
   :target: https://quay.io/repository/biocontainers/genomescope2
.. _`genomescope2/tags`: https://quay.io/repository/biocontainers/genomescope2?tab=tags


.. raw:: html

    <script>
        var package = "genomescope2";
        var versions = ["2.1.0","2.0.1","2.0.1","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomescope2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomescope2/README.html