:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mft-tools'
.. highlight: bash

mft-tools
=========

.. conda:recipe:: mft-tools
   :replaces_section_title:
   :noindex:

   Tranform DNA sequences using the Min\-Frame Transformation \(MFT\)

   :homepage: https://github.com/treangenlab/mft-tools
   :documentation: https://github.com/treangenlab/mft-tools/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`mft-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mft-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mft-tools/meta.yaml>`_

   


.. conda:package:: mft-tools

   |downloads_mft-tools| |docker_mft-tools|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>-</code>,  <code>l</code>,  <code>i</code>,  <code>n</code>,  <code>u</code>,  <code>x</code>,  <code>-</code>,  <code>a</code>,  <code>a</code>,  <code>r</code>,  <code>c</code>,  <code>h</code>,  <code>6</code>,  <code>4</code>,  <code> </code>,  <code>-</code>,  <code>o</code>,  <code>s</code>,  <code>x</code>,  <code>-</code>,  <code>a</code>,  <code>r</code>,  <code>m</code>,  <code>6</code>,  <code>4</code></span>
      

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

    pixi global install mft-tools

to add into an existing workspace instead, run::

    pixi add mft-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mft-tools

Alternatively, to install into a new environment, run::

    conda create -n envname mft-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mft-tools:<tag>

(see `mft-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mft-tools| image:: https://img.shields.io/conda/dn/bioconda/mft-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/mft-tools
   :alt:   (downloads)
.. |docker_mft-tools| image:: https://quay.io/repository/biocontainers/mft-tools/status
   :target: https://quay.io/repository/biocontainers/mft-tools
.. _`mft-tools/tags`: https://quay.io/repository/biocontainers/mft-tools?tab=tags


.. raw:: html

    <script>
        var package = "mft-tools";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mft-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mft-tools/README.html