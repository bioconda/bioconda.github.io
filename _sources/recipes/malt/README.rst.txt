:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'malt'
.. highlight: bash

malt
====

.. conda:recipe:: malt
   :replaces_section_title:
   :noindex:

   A tool for mapping metagenomic data

   :homepage: http://ab.inf.uni-tuebingen.de/software/malt/
   :license: GPLv3
   :recipe: /`malt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malt/meta.yaml>`_
   :links: biotools: :biotools:`malt`

   


.. conda:package:: malt

   |downloads_malt| |docker_malt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.62-0</code>,  <code>0.61-0</code>,  <code>0.53-0</code>,  <code>0.41-1</code>,  <code>0.41-0</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``0.62-0``,  ``0.61-0``,  ``0.53-0``,  ``0.41-1``,  ``0.41-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: 

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

    pixi global install malt

to add into an existing workspace instead, run::

    pixi add malt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install malt

Alternatively, to install into a new environment, run::

    conda create -n envname malt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/malt:<tag>

(see `malt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_malt| image:: https://img.shields.io/conda/dn/bioconda/malt.svg?style=flat
   :target: https://anaconda.org/bioconda/malt
   :alt:   (downloads)
.. |docker_malt| image:: https://quay.io/repository/biocontainers/malt/status
   :target: https://quay.io/repository/biocontainers/malt
.. _`malt/tags`: https://quay.io/repository/biocontainers/malt?tab=tags


.. raw:: html

    <script>
        var package = "malt";
        var versions = ["0.62","0.61","0.53","0.41","0.41"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/malt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/malt/README.html