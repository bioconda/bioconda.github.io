:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skmer'
.. highlight: bash

skmer
=====

.. conda:recipe:: skmer
   :replaces_section_title:
   :noindex:

   Assembly\-free and alignment\-free tool for estimating genomic distances between genome\-skims

   :homepage: https://github.com/shahab-sarmashghi/Skmer
   :license: BSD / BSD-3-Clause
   :recipe: /`skmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skmer/meta.yaml>`_

   


.. conda:package:: skmer

   |downloads_skmer| |docker_skmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.1.0-1</code>,  <code>3.1.0-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  </span></summary>
      

      ``3.3.0-0``,  ``3.2.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.2-3``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on kmer-jellyfish: ``2.3``
   :depends on mash: ``2.3``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on scipy: 
   :depends on seqtk: ``1.3``

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

    pixi global install skmer

to add into an existing workspace instead, run::

    pixi add skmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install skmer

Alternatively, to install into a new environment, run::

    conda create -n envname skmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/skmer:<tag>

(see `skmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_skmer| image:: https://img.shields.io/conda/dn/bioconda/skmer.svg?style=flat
   :target: https://anaconda.org/bioconda/skmer
   :alt:   (downloads)
.. |docker_skmer| image:: https://quay.io/repository/biocontainers/skmer/status
   :target: https://quay.io/repository/biocontainers/skmer
.. _`skmer/tags`: https://quay.io/repository/biocontainers/skmer?tab=tags


.. raw:: html

    <script>
        var package = "skmer";
        var versions = ["3.3.0","3.2.1","3.1.0","3.1.0","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skmer/README.html