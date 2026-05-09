:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq-gen'
.. highlight: bash

seq-gen
=======

.. conda:recipe:: seq-gen
   :replaces_section_title:
   :noindex:

   Seq\-Gen is a program that will simulate the evolution of nucleotide or amino acid sequences along a phylogeny\, using common models of the substitution process.

   :homepage: http://tree.bio.ed.ac.uk/software/Seq-Gen/
   :developer docs: https://github.com/rambaut/Seq-Gen
   :license: BSD / BSD-3-Clause
   :recipe: /`seq-gen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-gen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-gen/meta.yaml>`_

   


.. conda:package:: seq-gen

   |downloads_seq-gen| |docker_seq-gen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.5-0</code>,  <code>1.3.4-8</code>,  <code>1.3.4-7</code>,  <code>1.3.4-6</code>,  <code>1.3.4-5</code>,  <code>1.3.4-4</code>,  <code>1.3.4-3</code>,  <code>1.3.4-2</code>,  <code>1.3.4-0</code>,  </span></summary>
      

      ``1.3.5-0``,  ``1.3.4-8``,  ``1.3.4-7``,  ``1.3.4-6``,  ``1.3.4-5``,  ``1.3.4-4``,  ``1.3.4-3``,  ``1.3.4-2``,  ``1.3.4-0``,  ``1.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

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

    pixi global install seq-gen

to add into an existing workspace instead, run::

    pixi add seq-gen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seq-gen

Alternatively, to install into a new environment, run::

    conda create -n envname seq-gen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seq-gen:<tag>

(see `seq-gen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seq-gen| image:: https://img.shields.io/conda/dn/bioconda/seq-gen.svg?style=flat
   :target: https://anaconda.org/bioconda/seq-gen
   :alt:   (downloads)
.. |docker_seq-gen| image:: https://quay.io/repository/biocontainers/seq-gen/status
   :target: https://quay.io/repository/biocontainers/seq-gen
.. _`seq-gen/tags`: https://quay.io/repository/biocontainers/seq-gen?tab=tags


.. raw:: html

    <script>
        var package = "seq-gen";
        var versions = ["1.3.5","1.3.4","1.3.4","1.3.4","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq-gen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq-gen/README.html