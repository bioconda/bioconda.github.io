:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hecatomb'
.. highlight: bash

hecatomb
========

.. conda:recipe:: hecatomb
   :replaces_section_title:
   :noindex:

   Hecatomb\: and end\-to\-end platform for viral metagenomics

   :homepage: https://github.com/shandley/hecatomb
   :documentation: https://hecatomb.readthedocs.io/en/latest/
   
   :license: MIT
   :recipe: /`hecatomb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hecatomb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hecatomb/meta.yaml>`_

   Hecatomb accelerates viral metagenomics research by assembling contigs and accurately identifying viruses from a
   range of sequencing data types.



.. conda:package:: hecatomb

   |downloads_hecatomb| |docker_hecatomb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0.beta.5-0</code>,  </span></summary>
      

      ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0.beta.5-0``,  ``1.0.0.beta.4-0``,  ``1.0.0.beta.3-0``,  ``1.0.0.beta.2-1``,  ``1.0.0.beta.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=8.1.3``
   :depends on metasnek: ``>=0.0.7``
   :depends on pulp: ``<2.8``
   :depends on python: ``>=3.9``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake: ``>=8``
   :depends on snaketool-utils: ``>=0.0.5``

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

    pixi global install hecatomb

to add into an existing workspace instead, run::

    pixi add hecatomb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hecatomb

Alternatively, to install into a new environment, run::

    conda create -n envname hecatomb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hecatomb:<tag>

(see `hecatomb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hecatomb| image:: https://img.shields.io/conda/dn/bioconda/hecatomb.svg?style=flat
   :target: https://anaconda.org/bioconda/hecatomb
   :alt:   (downloads)
.. |docker_hecatomb| image:: https://quay.io/repository/biocontainers/hecatomb/status
   :target: https://quay.io/repository/biocontainers/hecatomb
.. _`hecatomb/tags`: https://quay.io/repository/biocontainers/hecatomb?tab=tags


.. raw:: html

    <script>
        var package = "hecatomb";
        var versions = ["1.3.4","1.3.3","1.3.2","1.3.1","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hecatomb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hecatomb/README.html