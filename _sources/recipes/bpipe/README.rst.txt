:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpipe'
.. highlight: bash

bpipe
=====

.. conda:recipe:: bpipe
   :replaces_section_title:
   :noindex:

   Bpipe \- a tool for running and managing bioinformatics pipelines

   :homepage: http://docs.bpipe.org/
   :license: BSD-3-Clause
   :recipe: /`bpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpipe/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts167`, biotools: :biotools:`bpipe`

   


.. conda:package:: bpipe

   |downloads_bpipe| |docker_bpipe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.13-0</code>,  <code>0.9.12-0</code>,  <code>0.9.11-1</code>,  <code>0.9.11-0</code>,  <code>0.9.10-1</code>,  <code>0.9.10-0</code>,  <code>0.9.9.9-0</code>,  <code>0.9.9.8-0</code>,  <code>0.9.9.7-0</code>,  </span></summary>
      

      ``0.9.13-0``,  ``0.9.12-0``,  ``0.9.11-1``,  ``0.9.11-0``,  ``0.9.10-1``,  ``0.9.10-0``,  ``0.9.9.9-0``,  ``0.9.9.8-0``,  ``0.9.9.7-0``,  ``0.9.9.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on coreutils: 
   :depends on openjdk: ``11.*``

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

    pixi global install bpipe

to add into an existing workspace instead, run::

    pixi add bpipe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bpipe

Alternatively, to install into a new environment, run::

    conda create -n envname bpipe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bpipe:<tag>

(see `bpipe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bpipe| image:: https://img.shields.io/conda/dn/bioconda/bpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/bpipe
   :alt:   (downloads)
.. |docker_bpipe| image:: https://quay.io/repository/biocontainers/bpipe/status
   :target: https://quay.io/repository/biocontainers/bpipe
.. _`bpipe/tags`: https://quay.io/repository/biocontainers/bpipe?tab=tags


.. raw:: html

    <script>
        var package = "bpipe";
        var versions = ["0.9.13","0.9.12","0.9.11","0.9.11","0.9.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpipe/README.html