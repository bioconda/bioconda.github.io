:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'desalt'
.. highlight: bash

desalt
======

.. conda:recipe:: desalt
   :replaces_section_title:
   :noindex:

   De Bruijn graph\-based Spliced Aligner for Long Transcriptome reads.

   :homepage: https://github.com/ydLiu-HIT/deSALT
   :documentation: https://github.com/ydLiu-HIT/deSALT/blob/v1.5.6/README.md
   
   :license: MIT / MIT
   :recipe: /`desalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desalt/meta.yaml>`_
   :links: biotools: :biotools:`deSALT`

   


.. conda:package:: desalt

   |downloads_desalt| |docker_desalt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.6-7</code>,  <code>1.5.6-6</code>,  <code>1.5.6-5</code>,  <code>1.5.6-4</code>,  <code>1.5.6-3</code>,  <code>1.5.6-2</code>,  <code>1.5.6-1</code>,  <code>1.5.6-0</code>,  <code>1.5.5-0</code>,  </span></summary>
      

      ``1.5.6-7``,  ``1.5.6-6``,  ``1.5.6-5``,  ``1.5.6-4``,  ``1.5.6-3``,  ``1.5.6-2``,  ``1.5.6-1``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
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

    pixi global install desalt

to add into an existing workspace instead, run::

    pixi add desalt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install desalt

Alternatively, to install into a new environment, run::

    conda create -n envname desalt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/desalt:<tag>

(see `desalt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_desalt| image:: https://img.shields.io/conda/dn/bioconda/desalt.svg?style=flat
   :target: https://anaconda.org/bioconda/desalt
   :alt:   (downloads)
.. |docker_desalt| image:: https://quay.io/repository/biocontainers/desalt/status
   :target: https://quay.io/repository/biocontainers/desalt
.. _`desalt/tags`: https://quay.io/repository/biocontainers/desalt?tab=tags


.. raw:: html

    <script>
        var package = "desalt";
        var versions = ["1.5.6","1.5.6","1.5.6","1.5.6","1.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/desalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/desalt/README.html