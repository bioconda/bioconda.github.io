:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'karect'
.. highlight: bash

karect
======

.. conda:recipe:: karect
   :replaces_section_title:
   :noindex:

   Read error correction tool based on multiple alignment.

   :homepage: https://github.com/aminallam/karect
   :documentation: https://github.com/aminallam/karect/blob/master/karect_manual.pdf
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`karect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karect/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv415`

   


.. conda:package:: karect

   |downloads_karect| |docker_karect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-9</code>,  <code>1.0-8</code>,  <code>1.0-7</code>,  <code>1.0-6</code>,  <code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  </span></summary>
      

      ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
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

    pixi global install karect

to add into an existing workspace instead, run::

    pixi add karect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install karect

Alternatively, to install into a new environment, run::

    conda create -n envname karect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/karect:<tag>

(see `karect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_karect| image:: https://img.shields.io/conda/dn/bioconda/karect.svg?style=flat
   :target: https://anaconda.org/bioconda/karect
   :alt:   (downloads)
.. |docker_karect| image:: https://quay.io/repository/biocontainers/karect/status
   :target: https://quay.io/repository/biocontainers/karect
.. _`karect/tags`: https://quay.io/repository/biocontainers/karect?tab=tags


.. raw:: html

    <script>
        var package = "karect";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/karect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/karect/README.html