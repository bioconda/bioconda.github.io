:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tssar'
.. highlight: bash

tssar
=====

.. conda:recipe:: tssar
   :replaces_section_title:
   :noindex:

   TSSAR is a Web Service for predicting bacterial Transcription Start Sites from dRNA\-seq data.

   :homepage: http://rna.tbi.univie.ac.at/TSSAR
   :license: GPL / GPL-2.0-or-later
   :recipe: /`tssar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tssar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tssar/meta.yaml>`_

   


.. conda:package:: tssar

   |downloads_tssar| |docker_tssar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-10</code>,  <code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  </span></summary>
      

      ``1.0.1-10``,  ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-skellam: 
   :depends on r-vgam: 

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

    pixi global install tssar

to add into an existing workspace instead, run::

    pixi add tssar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tssar

Alternatively, to install into a new environment, run::

    conda create -n envname tssar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tssar:<tag>

(see `tssar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tssar| image:: https://img.shields.io/conda/dn/bioconda/tssar.svg?style=flat
   :target: https://anaconda.org/bioconda/tssar
   :alt:   (downloads)
.. |docker_tssar| image:: https://quay.io/repository/biocontainers/tssar/status
   :target: https://quay.io/repository/biocontainers/tssar
.. _`tssar/tags`: https://quay.io/repository/biocontainers/tssar?tab=tags


.. raw:: html

    <script>
        var package = "tssar";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tssar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tssar/README.html