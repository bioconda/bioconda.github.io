:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirmachine'
.. highlight: bash

mirmachine
==========

.. conda:recipe:: mirmachine
   :replaces_section_title:
   :noindex:

   A command line to tool detect miRNA homologs in genome sequences.

   :homepage: https://github.com/sinanugur/MirMachine
   :documentation: https://mirmachine.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`mirmachine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirmachine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirmachine/meta.yaml>`_

   


.. conda:package:: mirmachine

   |downloads_mirmachine| |docker_mirmachine|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0.3-0</code>,  <code>0.3.0.2-0</code>,  <code>0.3.0.1-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.13-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11.2022-0</code>,  <code>0.2.11.2-0</code>,  </span></summary>
      

      ``0.3.0.3-0``,  ``0.3.0.2-0``,  ``0.3.0.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11.2022-0``,  ``0.2.11.2-0``,  ``0.2.11.1-0``,  ``0.2.11-1``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.1.31-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: ``>=1.4.4``
   :depends on attrs: ``>=25.3.0``
   :depends on bedtools: ``>=2.31.1``
   :depends on biopython: ``>=1.85``
   :depends on configargparse: ``>=1.7``
   :depends on coreutils: ``>=8.31``
   :depends on datrie: 
   :depends on decorator: ``>=4.4.2``
   :depends on docopt: ``>=0.6.2``
   :depends on docutils: ``>=0.21.2``
   :depends on gawk: ``>=5.0.1``
   :depends on gitdb: ``>=4.0.12``
   :depends on gitpython: ``>=3.1.44``
   :depends on infernal: ``1.1.5``
   :depends on jsonschema: ``>=4.23.0``
   :depends on moreutils: ``>=0.5.7``
   :depends on nbformat: ``>=5.10.4``
   :depends on numpy: ``>=2.2.5``
   :depends on psutil: ``>=7.0.0``
   :depends on pyrsistent: ``>=0.15.7``
   :depends on python: ``>=3.6``
   :depends on python-newick: ``>=1.0.0``
   :depends on pyyaml: 
   :depends on rich: ``>=14.0.0``
   :depends on samtools: ``>=1.6``
   :depends on smmap: ``>=5.0.2``
   :depends on snakemake-minimal: ``>=9.3.3``
   :depends on toposort: ``>=1.10``
   :depends on traitlets: ``>=5.14.3``
   :depends on wrapt: ``>=1.17.2``
   :depends on zipp: ``>=3.21.0``

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

    pixi global install mirmachine

to add into an existing workspace instead, run::

    pixi add mirmachine

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirmachine

Alternatively, to install into a new environment, run::

    conda create -n envname mirmachine

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirmachine:<tag>

(see `mirmachine/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirmachine| image:: https://img.shields.io/conda/dn/bioconda/mirmachine.svg?style=flat
   :target: https://anaconda.org/bioconda/mirmachine
   :alt:   (downloads)
.. |docker_mirmachine| image:: https://quay.io/repository/biocontainers/mirmachine/status
   :target: https://quay.io/repository/biocontainers/mirmachine
.. _`mirmachine/tags`: https://quay.io/repository/biocontainers/mirmachine?tab=tags


.. raw:: html

    <script>
        var package = "mirmachine";
        var versions = ["0.3.0.3","0.3.0.2","0.3.0.1","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirmachine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirmachine/README.html