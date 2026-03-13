:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flash2'
.. highlight: bash

flash2
======

.. conda:recipe:: flash2
   :replaces_section_title:
   :noindex:

   Merge paired\-end reads from fragments that are shorter than twice the read length.

   :homepage: https://github.com/dstreett/FLASH2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`flash2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flash2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flash2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btr507`, biotools: :biotools:`flash`, usegalaxy-eu: :usegalaxy-eu:`flash`

   


.. conda:package:: flash2

   |downloads_flash2| |docker_flash2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.00-9</code>,  <code>2.2.00-8</code>,  <code>2.2.00-7</code>,  <code>2.2.00-6</code>,  <code>2.2.00-5</code>,  <code>2.2.00-4</code>,  <code>2.2.00-3</code>,  <code>2.2.00-2</code>,  <code>2.2.00-1</code>,  </span></summary>
      

      ``2.2.00-9``,  ``2.2.00-8``,  ``2.2.00-7``,  ``2.2.00-6``,  ``2.2.00-5``,  ``2.2.00-4``,  ``2.2.00-3``,  ``2.2.00-2``,  ``2.2.00-1``,  ``2.2.00-0``

      
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

    pixi global install flash2

to add into an existing workspace instead, run::

    pixi add flash2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flash2

Alternatively, to install into a new environment, run::

    conda create -n envname flash2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flash2:<tag>

(see `flash2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flash2| image:: https://img.shields.io/conda/dn/bioconda/flash2.svg?style=flat
   :target: https://anaconda.org/bioconda/flash2
   :alt:   (downloads)
.. |docker_flash2| image:: https://quay.io/repository/biocontainers/flash2/status
   :target: https://quay.io/repository/biocontainers/flash2
.. _`flash2/tags`: https://quay.io/repository/biocontainers/flash2?tab=tags


.. raw:: html

    <script>
        var package = "flash2";
        var versions = ["2.2.00","2.2.00","2.2.00","2.2.00","2.2.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flash2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flash2/README.html