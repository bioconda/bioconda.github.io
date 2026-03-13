:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'monsda'
.. highlight: bash

monsda
======

.. conda:recipe:: monsda
   :replaces_section_title:
   :noindex:

   MONSDA\, Modular Organizer of Nextflow and Snakemake driven HTS Data Analysis

   :homepage: https://github.com/jfallmann/MONSDA
   :documentation: https://monsda.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`monsda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monsda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monsda/meta.yaml>`_

   


.. conda:package:: monsda

   |downloads_monsda| |docker_monsda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.8-0</code>,  <code>1.2.7-0</code>,  <code>1.2.6-0</code>,  <code>1.2.4-0</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.4-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.83``
   :depends on black: ``>=21.5b2``
   :depends on flake8: ``>=3.8.3``
   :depends on natsort: ``>=8.4.0``
   :depends on nextflow: ``>=23.10.1``
   :depends on numpy: ``>=1.26.4``
   :depends on pandas: ``>=2.2.1``
   :depends on perl: ``>=5.32.0``
   :depends on python: ``>=3.12``
   :depends on pyyaml: ``>=6.0.1``
   :depends on scipy: ``>=1.12.0``
   :depends on snakemake: ``>=8.11.3``
   :depends on snakemake-executor-plugin-cluster-generic: ``1.0.9.*``
   :depends on snakemake-executor-plugin-slurm: ``0.5.0.*``
   :depends on snakemake-interface-common: ``1.17.2.*``
   :depends on snakemake-interface-executor-plugins: ``9.1.1.*``
   :depends on snakemake-interface-report-plugins: ``1.0.0.*``
   :depends on snakemake-interface-storage-plugins: ``3.2.2.*``
   :depends on snakemake-storage-plugin-s3: ``0.2.11.*``
   :depends on versioneer: ``>=0.20``

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

    pixi global install monsda

to add into an existing workspace instead, run::

    pixi add monsda

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install monsda

Alternatively, to install into a new environment, run::

    conda create -n envname monsda

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/monsda:<tag>

(see `monsda/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_monsda| image:: https://img.shields.io/conda/dn/bioconda/monsda.svg?style=flat
   :target: https://anaconda.org/bioconda/monsda
   :alt:   (downloads)
.. |docker_monsda| image:: https://quay.io/repository/biocontainers/monsda/status
   :target: https://quay.io/repository/biocontainers/monsda
.. _`monsda/tags`: https://quay.io/repository/biocontainers/monsda?tab=tags


.. raw:: html

    <script>
        var package = "monsda";
        var versions = ["1.2.8","1.2.7","1.2.6","1.2.4","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/monsda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/monsda/README.html