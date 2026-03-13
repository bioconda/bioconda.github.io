:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sphae'
.. highlight: bash

sphae
=====

.. conda:recipe:: sphae
   :replaces_section_title:
   :noindex:

   Phage toolkit

   :homepage: https://github.com/linsalrob/sphae/
   :documentation: https://github.com/linsalrob/sphae
   
   :developer docs: https://github.com/linsalrob/sphae
   :license: MIT / MIT
   :recipe: /`sphae <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sphae>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sphae/meta.yaml>`_

   Assembling and annotating pure culture phages from both Illumina and Nanopore sequencing technology


.. conda:package:: sphae

   |downloads_sphae| |docker_sphae|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.4-0</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.0-0</code>,  <code>1.4.8-0</code>,  <code>1.4.7-0</code>,  <code>1.4.6-0</code>,  <code>1.4.5-0</code>,  <code>1.4.4-0</code>,  </span></summary>
      

      ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.0-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.1b-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrmap: ``>=0.0.7``
   :depends on biopython: ``>=1.8.1``
   :depends on click: ``>=8.1.3``
   :depends on jinja2: ``>=3.0.2``
   :depends on metasnek: ``>=0.0.4``
   :depends on pandas: 
   :depends on python: ``<3.12``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake-minimal: ``>=7.14.0``
   :depends on snaketool-utils: ``>=0.0.4``

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

    pixi global install sphae

to add into an existing workspace instead, run::

    pixi add sphae

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sphae

Alternatively, to install into a new environment, run::

    conda create -n envname sphae

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sphae:<tag>

(see `sphae/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sphae| image:: https://img.shields.io/conda/dn/bioconda/sphae.svg?style=flat
   :target: https://anaconda.org/bioconda/sphae
   :alt:   (downloads)
.. |docker_sphae| image:: https://quay.io/repository/biocontainers/sphae/status
   :target: https://quay.io/repository/biocontainers/sphae
.. _`sphae/tags`: https://quay.io/repository/biocontainers/sphae?tab=tags


.. raw:: html

    <script>
        var package = "sphae";
        var versions = ["1.5.4","1.5.3","1.5.2","1.5.0","1.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sphae/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sphae/README.html