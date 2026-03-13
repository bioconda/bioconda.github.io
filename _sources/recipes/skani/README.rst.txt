:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skani'
.. highlight: bash

skani
=====

.. conda:recipe:: skani
   :replaces_section_title:
   :noindex:

   skani is a fast and robust tool for calculating ANI between metagenome assembled genomes and contigs.

   :homepage: https://github.com/bluenote-1577/skani
   :license: MIT
   :recipe: /`skani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skani/meta.yaml>`_

   


.. conda:package:: skani

   |downloads_skani| |docker_skani|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-2</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.5-0</code>,  </span></summary>
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-2``,  ``0.1.3-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install skani

to add into an existing workspace instead, run::

    pixi add skani

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install skani

Alternatively, to install into a new environment, run::

    conda create -n envname skani

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/skani:<tag>

(see `skani/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_skani| image:: https://img.shields.io/conda/dn/bioconda/skani.svg?style=flat
   :target: https://anaconda.org/bioconda/skani
   :alt:   (downloads)
.. |docker_skani| image:: https://quay.io/repository/biocontainers/skani/status
   :target: https://quay.io/repository/biocontainers/skani
.. _`skani/tags`: https://quay.io/repository/biocontainers/skani?tab=tags


.. raw:: html

    <script>
        var package = "skani";
        var versions = ["0.3.1","0.3.0","0.2.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skani/README.html