:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'porechop'
.. highlight: bash

porechop
========

.. conda:recipe:: porechop
   :replaces_section_title:
   :noindex:

   Adapter removal and demultiplexing of Oxford Nanopore reads

   :homepage: https://github.com/rrwick/Porechop
   :documentation: https://github.com/rrwick/Porechop?tab=readme-ov-file#how-it-works
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`porechop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop/meta.yaml>`_

   


.. conda:package:: porechop

   |downloads_porechop| |docker_porechop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.4-9</code>,  <code>0.2.4-8</code>,  <code>0.2.4-7</code>,  <code>0.2.4-6</code>,  <code>0.2.4-4</code>,  <code>0.2.4-3</code>,  <code>0.2.4-2</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  </span></summary>
      

      ``0.2.4-9``,  ``0.2.4-8``,  ``0.2.4-7``,  ``0.2.4-6``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3_seqan2.1.1-3``,  ``0.2.3_seqan2.1.1-2``,  ``0.2.3_seqan2.1.1-1``,  ``0.2.3_seqan2.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install porechop

to add into an existing workspace instead, run::

    pixi add porechop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install porechop

Alternatively, to install into a new environment, run::

    conda create -n envname porechop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/porechop:<tag>

(see `porechop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_porechop| image:: https://img.shields.io/conda/dn/bioconda/porechop.svg?style=flat
   :target: https://anaconda.org/bioconda/porechop
   :alt:   (downloads)
.. |docker_porechop| image:: https://quay.io/repository/biocontainers/porechop/status
   :target: https://quay.io/repository/biocontainers/porechop
.. _`porechop/tags`: https://quay.io/repository/biocontainers/porechop?tab=tags


.. raw:: html

    <script>
        var package = "porechop";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/porechop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/porechop/README.html