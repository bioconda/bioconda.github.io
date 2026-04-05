:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paml'
.. highlight: bash

paml
====

.. conda:recipe:: paml
   :replaces_section_title:
   :noindex:

   A package of programs for phylogenetic analyses of DNA or protein sequences using maximum likelihood.

   :homepage: https://evomics.org/resources/software/molecular-evolution-software/paml
   :documentation: https://github.com/abacus-gene/paml/wiki
   
   :developer docs: https://github.com/abacus-gene/paml
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`paml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paml/meta.yaml>`_
   :links: biotools: :biotools:`paml`, doi: :doi:`10.1093/bioinformatics/13.5.555`

   


.. conda:package:: paml

   |downloads_paml| |docker_paml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.10.10-0</code>,  <code>4.10.9-1</code>,  <code>4.10.9-0</code>,  <code>4.10.7-2</code>,  <code>4.10.7-1</code>,  <code>4.10.7-0</code>,  <code>4.10.6-2</code>,  <code>4.10.6-1</code>,  <code>4.10.6-0</code>,  </span></summary>
      

      ``4.10.10-0``,  ``4.10.9-1``,  ``4.10.9-0``,  ``4.10.7-2``,  ``4.10.7-1``,  ``4.10.7-0``,  ``4.10.6-2``,  ``4.10.6-1``,  ``4.10.6-0``,  ``4.9-7``,  ``4.9-6``,  ``4.9-5``,  ``4.9-4``,  ``4.9-3``,  ``4.9-2``,  ``4.9-1``,  ``4.9-0``

      
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

    pixi global install paml

to add into an existing workspace instead, run::

    pixi add paml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install paml

Alternatively, to install into a new environment, run::

    conda create -n envname paml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/paml:<tag>

(see `paml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_paml| image:: https://img.shields.io/conda/dn/bioconda/paml.svg?style=flat
   :target: https://anaconda.org/bioconda/paml
   :alt:   (downloads)
.. |docker_paml| image:: https://quay.io/repository/biocontainers/paml/status
   :target: https://quay.io/repository/biocontainers/paml
.. _`paml/tags`: https://quay.io/repository/biocontainers/paml?tab=tags


.. raw:: html

    <script>
        var package = "paml";
        var versions = ["4.10.10","4.10.9","4.10.9","4.10.7","4.10.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paml/README.html