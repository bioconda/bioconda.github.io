:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bfc'
.. highlight: bash

bfc
===

.. conda:recipe:: bfc
   :replaces_section_title:
   :noindex:

   BFC is a standalone high\-performance tool for correcting sequencing errors from Illumina sequencing data.

   :homepage: https://github.com/lh3/bfc
   :license: MIT / MIT
   :recipe: /`bfc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bfc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bfc/meta.yaml>`_

   


.. conda:package:: bfc

   |downloads_bfc| |docker_bfc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r181-12</code>,  <code>r181-11</code>,  <code>r181-10</code>,  <code>r181-9</code>,  <code>r181-8</code>,  <code>r181-7</code>,  <code>r181-6</code>,  <code>r181-5</code>,  <code>r181-4</code>,  </span></summary>
      

      ``r181-12``,  ``r181-11``,  ``r181-10``,  ``r181-9``,  ``r181-8``,  ``r181-7``,  ``r181-6``,  ``r181-5``,  ``r181-4``,  ``r181-3``,  ``r181-2``,  ``r181-1``,  ``r181-0``

      
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

    pixi global install bfc

to add into an existing workspace instead, run::

    pixi add bfc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bfc

Alternatively, to install into a new environment, run::

    conda create -n envname bfc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bfc:<tag>

(see `bfc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bfc| image:: https://img.shields.io/conda/dn/bioconda/bfc.svg?style=flat
   :target: https://anaconda.org/bioconda/bfc
   :alt:   (downloads)
.. |docker_bfc| image:: https://quay.io/repository/biocontainers/bfc/status
   :target: https://quay.io/repository/biocontainers/bfc
.. _`bfc/tags`: https://quay.io/repository/biocontainers/bfc?tab=tags


.. raw:: html

    <script>
        var package = "bfc";
        var versions = ["r181","r181","r181","r181","r181"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bfc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bfc/README.html