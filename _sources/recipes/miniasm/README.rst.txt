:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miniasm'
.. highlight: bash

miniasm
=======

.. conda:recipe:: miniasm
   :replaces_section_title:
   :noindex:

   Ultrafast de novo assembly for long noisy reads \(though having no consensus step\).

   :homepage: https://github.com/lh3/miniasm
   :documentation: https://github.com/lh3/miniasm/blob/v0.3/README.md
   
   :license: MIT / MIT
   :recipe: /`miniasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniasm/meta.yaml>`_
   :links: biotools: :biotools:`miniasm`, usegalaxy-eu: :usegalaxy-eu:`miniasm`, doi: :doi:`10.1093/bioinformatics/btw152`

   


.. conda:package:: miniasm

   |downloads_miniasm| |docker_miniasm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3-5</code>,  <code>0.3-4</code>,  <code>0.3-3</code>,  <code>0.3-2</code>,  <code>0.3-1</code>,  <code>0.3-0</code>,  <code>0.3_r179-3</code>,  <code>0.3_r179-2</code>,  <code>0.3_r179-1</code>,  </span></summary>
      

      ``0.3-5``,  ``0.3-4``,  ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.3_r179-3``,  ``0.3_r179-2``,  ``0.3_r179-1``,  ``0.3_r179-0``,  ``0.2-0``,  ``0.2_r168-3``,  ``0.2_r168-2``,  ``0.2_r168-1``,  ``0.2_r168-0``,  ``0.2_r159-0``,  ``0.2_r137-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
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

    pixi global install miniasm

to add into an existing workspace instead, run::

    pixi add miniasm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install miniasm

Alternatively, to install into a new environment, run::

    conda create -n envname miniasm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/miniasm:<tag>

(see `miniasm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_miniasm| image:: https://img.shields.io/conda/dn/bioconda/miniasm.svg?style=flat
   :target: https://anaconda.org/bioconda/miniasm
   :alt:   (downloads)
.. |docker_miniasm| image:: https://quay.io/repository/biocontainers/miniasm/status
   :target: https://quay.io/repository/biocontainers/miniasm
.. _`miniasm/tags`: https://quay.io/repository/biocontainers/miniasm?tab=tags


.. raw:: html

    <script>
        var package = "miniasm";
        var versions = ["0.3","0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miniasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miniasm/README.html