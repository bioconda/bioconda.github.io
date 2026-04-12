:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'velvet'
.. highlight: bash

velvet
======

.. conda:recipe:: velvet
   :replaces_section_title:
   :noindex:

   Sequence Assembler for short reads.

   :homepage: https://github.com/dzerbino/velvet
   :documentation: https://github.com/dzerbino/velvet/blob/master/Manual.pdf
   
   :license: GPL / GPL-2.0-only
   :recipe: /`velvet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/velvet/meta.yaml>`_
   :links: biotools: :biotools:`velvet`, usegalaxy-eu: :usegalaxy-eu:`velvetg`, usegalaxy-eu: :usegalaxy-eu:`velveth`, doi: :doi:`10.1101/gr.074492.107`

   


.. conda:package:: velvet

   |downloads_velvet| |docker_velvet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.10-9</code>,  <code>1.2.10-8</code>,  <code>1.2.10-7</code>,  <code>1.2.10-6</code>,  <code>1.2.10-5</code>,  <code>1.2.10-4</code>,  <code>1.2.10-3</code>,  <code>1.2.10-2</code>,  <code>1.2.10-1</code>,  </span></summary>
      

      ``1.2.10-9``,  ``1.2.10-8``,  ``1.2.10-7``,  ``1.2.10-6``,  ``1.2.10-5``,  ``1.2.10-4``,  ``1.2.10-3``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``

      
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

    pixi global install velvet

to add into an existing workspace instead, run::

    pixi add velvet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install velvet

Alternatively, to install into a new environment, run::

    conda create -n envname velvet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/velvet:<tag>

(see `velvet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_velvet| image:: https://img.shields.io/conda/dn/bioconda/velvet.svg?style=flat
   :target: https://anaconda.org/bioconda/velvet
   :alt:   (downloads)
.. |docker_velvet| image:: https://quay.io/repository/biocontainers/velvet/status
   :target: https://quay.io/repository/biocontainers/velvet
.. _`velvet/tags`: https://quay.io/repository/biocontainers/velvet?tab=tags


.. raw:: html

    <script>
        var package = "velvet";
        var versions = ["1.2.10","1.2.10","1.2.10","1.2.10","1.2.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/velvet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/velvet/README.html