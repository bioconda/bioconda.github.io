:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteinortho'
.. highlight: bash

proteinortho
============

.. conda:recipe:: proteinortho
   :replaces_section_title:
   :noindex:

   Proteinortho is a tool to detect orthologous genes within different species.

   :homepage: https://gitlab.com/paulklemm_PHD/proteinortho
   :documentation: https://gitlab.com/paulklemm_PHD/proteinortho/-/blob/master/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`proteinortho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteinortho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteinortho/meta.yaml>`_
   :links: biotools: :biotools:`proteinortho`, doi: :doi:`10.3389/fbinf.2023.1322477`, usegalaxy-eu: :usegalaxy-eu:`proteinortho`, usegalaxy-eu: :usegalaxy-eu:`proteinortho_summary`, usegalaxy-eu: :usegalaxy-eu:`proteinortho_grab_proteins`

   


.. conda:package:: proteinortho

   |downloads_proteinortho| |docker_proteinortho|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.3.6-0</code>,  <code>6.3.5-1</code>,  <code>6.3.5-0</code>,  <code>6.3.4-1</code>,  <code>6.3.4-0</code>,  <code>6.3.3-1</code>,  <code>6.3.3-0</code>,  <code>6.3.2-0</code>,  <code>6.3.1-0</code>,  </span></summary>
      

      ``6.3.6-0``,  ``6.3.5-1``,  ``6.3.5-0``,  ``6.3.4-1``,  ``6.3.4-0``,  ``6.3.3-1``,  ``6.3.3-0``,  ``6.3.2-0``,  ``6.3.1-0``,  ``6.3.0-0``,  ``6.2.3-1``,  ``6.2.3-0``,  ``6.2.2-0``,  ``6.2.1-0``,  ``6.2.0-0``,  ``6.1.7-0``,  ``6.1.6-0``,  ``6.1.5-0``,  ``6.1.4-0``,  ``6.1.3-0``,  ``6.1.2-0``,  ``6.1.1-1``,  ``6.1.1-0``,  ``6.1.0-2``,  ``6.1.0-1``,  ``6.1.0-0``,  ``6.0.35-0``,  ``6.0.34-0``,  ``6.0.33-1``,  ``6.0.33-0``,  ``6.0.32-0``,  ``6.0.31-0``,  ``6.0.30-0``,  ``6.0.29-1``,  ``6.0.29-0``,  ``6.0.28-1``,  ``6.0.28-0``,  ``6.0.27-0``,  ``6.0.26-0``,  ``6.0.25-0``,  ``6.0.24-0``,  ``6.0.23-0``,  ``6.0.22-0``,  ``6.0.21-0``,  ``6.0.20-0``,  ``6.0.19-0``,  ``6.0.18-1``,  ``6.0.18-0``,  ``6.0.17-0``,  ``6.0.16-1``,  ``6.0.16-0``,  ``6.0.15-0``,  ``6.0.14-0``,  ``6.0.13-0``,  ``6.0.12-0``,  ``6.0.11-0``,  ``6.0.10-0``,  ``6.0.9-0``,  ``6.0.8-0``,  ``6.0.7-0``,  ``6.0.6-0``,  ``6.0.5-0``,  ``6.0.4-0``,  ``6.0.3-0``,  ``6.0.2c-0``,  ``6.0.1-0``,  ``6.0-0``,  ``6.0b-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on diamond: ``>=0.9.29``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``
   :depends on libgomp: 
   :depends on liblapacke: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on perl: 
   :depends on python: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install proteinortho

to add into an existing workspace instead, run::

    pixi add proteinortho

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteinortho

Alternatively, to install into a new environment, run::

    conda create -n envname proteinortho

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteinortho:<tag>

(see `proteinortho/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteinortho| image:: https://img.shields.io/conda/dn/bioconda/proteinortho.svg?style=flat
   :target: https://anaconda.org/bioconda/proteinortho
   :alt:   (downloads)
.. |docker_proteinortho| image:: https://quay.io/repository/biocontainers/proteinortho/status
   :target: https://quay.io/repository/biocontainers/proteinortho
.. _`proteinortho/tags`: https://quay.io/repository/biocontainers/proteinortho?tab=tags


.. raw:: html

    <script>
        var package = "proteinortho";
        var versions = ["6.3.6","6.3.5","6.3.5","6.3.4","6.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteinortho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteinortho/README.html