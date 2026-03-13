:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bakta'
.. highlight: bash

bakta
=====

.. conda:recipe:: bakta
   :replaces_section_title:
   :noindex:

   Rapid \& standardized annotation of bacterial genomes\, MAGs \& plasmids.

   :homepage: https://github.com/oschwengers/bakta
   :documentation: https://github.com/oschwengers/bakta/blob/v1.12.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bakta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bakta/meta.yaml>`_
   :links: biotools: :biotools:`bakta`, usegalaxy-eu: :usegalaxy-eu:`bakta`, doi: :doi:`10.1099/mgen.0.000685`, doi: :doi:`10.5281/zenodo.4247252`

   


.. conda:package:: bakta

   |downloads_bakta| |docker_bakta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.11.4-0</code>,  <code>1.11.3-0</code>,  <code>1.11.2-0</code>,  <code>1.11.1-0</code>,  <code>1.11.0-0</code>,  <code>1.10.4-1</code>,  <code>1.10.4-0</code>,  <code>1.10.3-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.11.4-0``,  ``1.11.3-0``,  ``1.11.2-0``,  ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.4-1``,  ``1.10.4-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on alive-progress: ``3.0.1``
   :depends on aragorn: ``>=1.2.41``
   :depends on biopython: ``>=1.78``
   :depends on blast: ``>=2.17.0``
   :depends on diamond: ``>=2.1.21``
   :depends on infernal: ``>=1.1.5``
   :depends on ncbi-amrfinderplus: ``>=4.2.7``
   :depends on piler-cr: 
   :depends on pycirclize: ``>=1.7.0``
   :depends on pyhmmer: ``>=0.12.0``
   :depends on pyrodigal: ``>=3.7.0``
   :depends on python: ``>=3.9,<3.14``
   :depends on pyyaml: ``>=6.0``
   :depends on requests: ``>=2.25.1``
   :depends on trnascan-se: ``>=2.0.12``
   :depends on xopen: ``>=1.5.0``

   :additional platforms:
      

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

    pixi global install bakta

to add into an existing workspace instead, run::

    pixi add bakta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bakta

Alternatively, to install into a new environment, run::

    conda create -n envname bakta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bakta:<tag>

(see `bakta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bakta| image:: https://img.shields.io/conda/dn/bioconda/bakta.svg?style=flat
   :target: https://anaconda.org/bioconda/bakta
   :alt:   (downloads)
.. |docker_bakta| image:: https://quay.io/repository/biocontainers/bakta/status
   :target: https://quay.io/repository/biocontainers/bakta
.. _`bakta/tags`: https://quay.io/repository/biocontainers/bakta?tab=tags


.. raw:: html

    <script>
        var package = "bakta";
        var versions = ["1.12.0","1.11.4","1.11.3","1.11.2","1.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bakta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bakta/README.html