:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phables'
.. highlight: bash

phables
=======

.. conda:recipe:: phables
   :replaces_section_title:
   :noindex:

   Phables\: from fragmented assemblies to high\-quality bacteriophage genomes.

   :homepage: https://github.com/Vini2/phables
   :documentation: https://phables.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`phables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phables/meta.yaml>`_

   Phables resolves bacteriophage genomes using phage bubbles in viral metagenomic data.


.. conda:package:: phables

   |downloads_phables| |docker_phables|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.1-2</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.1.0b7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=8.1.3``
   :depends on jinja2: ``>=3.0.2``
   :depends on mamba: ``<1.4.2``
   :depends on metasnek: ``>=0.0.5``
   :depends on python: ``>=3.9,<3.11``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake-minimal: ``>=7.14.0``
   :depends on snaketool-utils: ``>=0.0.3``

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

    pixi global install phables

to add into an existing workspace instead, run::

    pixi add phables

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phables

Alternatively, to install into a new environment, run::

    conda create -n envname phables

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phables:<tag>

(see `phables/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phables| image:: https://img.shields.io/conda/dn/bioconda/phables.svg?style=flat
   :target: https://anaconda.org/bioconda/phables
   :alt:   (downloads)
.. |docker_phables| image:: https://quay.io/repository/biocontainers/phables/status
   :target: https://quay.io/repository/biocontainers/phables
.. _`phables/tags`: https://quay.io/repository/biocontainers/phables?tab=tags


.. raw:: html

    <script>
        var package = "phables";
        var versions = ["1.5.0","1.4.1","1.4.1","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phables/README.html