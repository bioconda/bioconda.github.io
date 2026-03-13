:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hits'
.. highlight: bash

hits
====

.. conda:recipe:: hits
   :replaces_section_title:
   :noindex:

   Utilities for processing high\-throughput sequencing experiments.

   :homepage: https://github.com/jeffhussmann/hits
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hits/meta.yaml>`_

   


.. conda:package:: hits

   |downloads_hits| |docker_hits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.4.5-0</code>,  <code>0.4.3-1</code>,  <code>0.4.3-0</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.4.5-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``,  ``0.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.72``
   :depends on bokeh: ``>=3.2``
   :depends on ipython: ``>=7.8.0``
   :depends on ipywidgets: ``>=7.4.2``
   :depends on libgcc: ``>=14``
   :depends on matplotlib-base: ``>=3.0.2``
   :depends on numpy: ``>=1.15.4``
   :depends on pandas: ``>=0.23.4``
   :depends on pillow: ``>=5.3.0``
   :depends on pysam: ``>=0.15.1``
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on python_abi: ``3.13.* *_cp313``
   :depends on pyyaml: ``>=3.13``
   :depends on s3fs: 
   :depends on scipy: ``>=1.2.1``
   :depends on seaborn-base: ``>=0.11.0``
   :depends on statsmodels: ``>=0.12.1``

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

    pixi global install hits

to add into an existing workspace instead, run::

    pixi add hits

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hits

Alternatively, to install into a new environment, run::

    conda create -n envname hits

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hits:<tag>

(see `hits/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hits| image:: https://img.shields.io/conda/dn/bioconda/hits.svg?style=flat
   :target: https://anaconda.org/bioconda/hits
   :alt:   (downloads)
.. |docker_hits| image:: https://quay.io/repository/biocontainers/hits/status
   :target: https://quay.io/repository/biocontainers/hits
.. _`hits/tags`: https://quay.io/repository/biocontainers/hits?tab=tags


.. raw:: html

    <script>
        var package = "hits";
        var versions = ["0.5.1","0.4.5","0.4.3","0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hits/README.html