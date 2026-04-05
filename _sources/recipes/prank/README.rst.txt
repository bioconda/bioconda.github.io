:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prank'
.. highlight: bash

prank
=====

.. conda:recipe:: prank
   :replaces_section_title:
   :noindex:

   PRANK is a probabilistic multiple alignment program for DNA\, codon and amino\-acid sequences.

   :homepage: http://wasabiapp.org/software/prank
   :documentation: https://ariloytynoja.github.io/prank-msa
   
   :developer docs: https://github.com/ariloytynoja/prank-msa
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`prank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prank/meta.yaml>`_
   :links: biotools: :biotools:`prank`, doi: :doi:`10.1007/978-1-62703-646-7_10`

   


.. conda:package:: prank

   |downloads_prank| |docker_prank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>170427-1</code>,  <code>170427-0</code>,  <code>v.170427-7</code>,  <code>v.170427-6</code>,  <code>v.170427-5</code>,  <code>v.170427-4</code>,  <code>v.170427-3</code>,  <code>v.170427-2</code>,  <code>v.170427-1</code>,  </span></summary>
      

      ``170427-1``,  ``170427-0``,  ``v.170427-7``,  ``v.170427-6``,  ``v.170427-5``,  ``v.170427-4``,  ``v.170427-3``,  ``v.170427-2``,  ``v.170427-1``,  ``v.170427-0``,  ``v.150803-0``

      
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

    pixi global install prank

to add into an existing workspace instead, run::

    pixi add prank

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prank

Alternatively, to install into a new environment, run::

    conda create -n envname prank

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prank:<tag>

(see `prank/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prank| image:: https://img.shields.io/conda/dn/bioconda/prank.svg?style=flat
   :target: https://anaconda.org/bioconda/prank
   :alt:   (downloads)
.. |docker_prank| image:: https://quay.io/repository/biocontainers/prank/status
   :target: https://quay.io/repository/biocontainers/prank
.. _`prank/tags`: https://quay.io/repository/biocontainers/prank?tab=tags


.. raw:: html

    <script>
        var package = "prank";
        var versions = ["170427","170427","v.170427","v.170427","v.170427"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prank/README.html