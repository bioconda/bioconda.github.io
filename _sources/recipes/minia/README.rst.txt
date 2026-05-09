:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minia'
.. highlight: bash

minia
=====

.. conda:recipe:: minia
   :replaces_section_title:
   :noindex:

   Minia is a short\-read assembler based on a de Bruijn graph\, capable of assembling a human genome on a desktop computer in a day.

   :homepage: https://github.com/GATB/minia
   :documentation: https://gatb.inria.fr/software/minia
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`minia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minia/meta.yaml>`_
   :links: biotools: :biotools:`minia`, usegalaxy-eu: :usegalaxy-eu:`minia`, doi: :doi:`10.1186/1748-7188-8-22`

   


.. conda:package:: minia

   |downloads_minia| |docker_minia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.6-6</code>,  <code>3.2.6-5</code>,  <code>3.2.6-3</code>,  <code>3.2.6-2</code>,  <code>3.2.6-1</code>,  <code>3.2.6-0</code>,  <code>3.2.4-1</code>,  <code>3.2.4-0</code>,  <code>3.2.3-0</code>,  </span></summary>
      

      ``3.2.6-6``,  ``3.2.6-5``,  ``3.2.6-3``,  ``3.2.6-2``,  ``3.2.6-1``,  ``3.2.6-0``,  ``3.2.4-1``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=12``
   :depends on libstdcxx: ``>=12``
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

    pixi global install minia

to add into an existing workspace instead, run::

    pixi add minia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minia

Alternatively, to install into a new environment, run::

    conda create -n envname minia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minia:<tag>

(see `minia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minia| image:: https://img.shields.io/conda/dn/bioconda/minia.svg?style=flat
   :target: https://anaconda.org/bioconda/minia
   :alt:   (downloads)
.. |docker_minia| image:: https://quay.io/repository/biocontainers/minia/status
   :target: https://quay.io/repository/biocontainers/minia
.. _`minia/tags`: https://quay.io/repository/biocontainers/minia?tab=tags


.. raw:: html

    <script>
        var package = "minia";
        var versions = ["3.2.6","3.2.6","3.2.6","3.2.6","3.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minia/README.html