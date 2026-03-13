:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mason'
.. highlight: bash

mason
=====

.. conda:recipe:: mason
   :replaces_section_title:
   :noindex:

   Mason is a collection of tools for the simulation of biological sequences.

   :homepage: https://www.seqan.de/apps/mason.html
   :documentation: https://github.com/seqan/seqan/tree/seqan-v2.5.2/apps/mason2/README
   
   :developer docs: https://github.com/seqan/seqan/tree/main/apps/mason2
   :license: BSD / BSD 3-Clause
   :recipe: /`mason <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mason>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mason/meta.yaml>`_
   :links: biotools: :biotools:`mason`, doi: :doi:`10.1371/journal.pone.0049110`

   


.. conda:package:: mason

   |downloads_mason| |docker_mason|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.13-0</code>,  <code>2.0.12-1</code>,  <code>2.0.12-0</code>,  <code>2.0.9-4</code>,  <code>2.0.9-3</code>,  <code>2.0.9-2</code>,  <code>2.0.9-1</code>,  <code>2.0.9-0</code>,  <code>2.0.8-1</code>,  </span></summary>
      

      ``2.0.13-0``,  ``2.0.12-1``,  ``2.0.12-0``,  ``2.0.9-4``,  ``2.0.9-3``,  ``2.0.9-2``,  ``2.0.9-1``,  ``2.0.9-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install mason

to add into an existing workspace instead, run::

    pixi add mason

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mason

Alternatively, to install into a new environment, run::

    conda create -n envname mason

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mason:<tag>

(see `mason/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mason| image:: https://img.shields.io/conda/dn/bioconda/mason.svg?style=flat
   :target: https://anaconda.org/bioconda/mason
   :alt:   (downloads)
.. |docker_mason| image:: https://quay.io/repository/biocontainers/mason/status
   :target: https://quay.io/repository/biocontainers/mason
.. _`mason/tags`: https://quay.io/repository/biocontainers/mason?tab=tags


.. raw:: html

    <script>
        var package = "mason";
        var versions = ["2.0.13","2.0.12","2.0.12","2.0.9","2.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mason/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mason/README.html