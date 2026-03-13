:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlst'
.. highlight: bash

mlst
====

.. conda:recipe:: mlst
   :replaces_section_title:
   :noindex:

   Scan contig files against PubMLST typing schemes

   :homepage: https://github.com/tseemann/mlst
   :license: GPL / GPL-2.0
   :recipe: /`mlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst/meta.yaml>`_
   :links: biotools: :biotools:`mlst`

   


.. conda:package:: mlst

   |downloads_mlst| |docker_mlst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.2-0</code>,  <code>2.28.1-0</code>,  <code>2.25.0-0</code>,  <code>2.23.0-1</code>,  <code>2.23.0-0</code>,  <code>2.22.1-0</code>,  <code>2.22.0-0</code>,  <code>2.19.0-1</code>,  <code>2.19.0-0</code>,  </span></summary>
      

      ``2.32.2-0``,  ``2.28.1-0``,  ``2.25.0-0``,  ``2.23.0-1``,  ``2.23.0-0``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.19.0-1``,  ``2.19.0-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.6-1``,  ``2.17.6-0``,  ``2.16.4-0``,  ``2.16.2-1``,  ``2.16.2-0``,  ``2.16.1-0``,  ``2.16-0``,  ``2.15.2-0``,  ``2.15.1-0``,  ``2.15-0``,  ``2.14-0``,  ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-1``,  ``2.10-0``,  ``2.9-6``,  ``2.9-5``,  ``2.9-4``,  ``2.9-3``,  ``2.9-2``,  ``2.9-1``,  ``2.9-0``,  ``2.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on any2fasta: 
   :depends on blast: ``>=2.16.0``
   :depends on perl: 
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on perl-file-which: 
   :depends on perl-json: 
   :depends on perl-list-moreutils: 
   :depends on perl-moo: 
   :depends on zlib: 

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

    pixi global install mlst

to add into an existing workspace instead, run::

    pixi add mlst

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mlst

Alternatively, to install into a new environment, run::

    conda create -n envname mlst

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mlst:<tag>

(see `mlst/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mlst| image:: https://img.shields.io/conda/dn/bioconda/mlst.svg?style=flat
   :target: https://anaconda.org/bioconda/mlst
   :alt:   (downloads)
.. |docker_mlst| image:: https://quay.io/repository/biocontainers/mlst/status
   :target: https://quay.io/repository/biocontainers/mlst
.. _`mlst/tags`: https://quay.io/repository/biocontainers/mlst?tab=tags


.. raw:: html

    <script>
        var package = "mlst";
        var versions = ["2.32.2","2.28.1","2.25.0","2.23.0","2.23.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlst/README.html