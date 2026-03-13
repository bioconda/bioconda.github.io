:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ectyper'
.. highlight: bash

ectyper
=======

.. conda:recipe:: ectyper
   :replaces_section_title:
   :noindex:

   ECtyper is a python program for serotyping E. coli genomes

   :homepage: https://github.com/phac-nml/ecoli_serotyping
   :license: Apache 2
   :recipe: /`ectyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ectyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ectyper/meta.yaml>`_

   


.. conda:package:: ectyper

   |downloads_ectyper| |docker_ectyper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-4</code>,  <code>2.0.0-3</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  </span></summary>
      

      ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.5.4-2``,  ``0.1-2``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.8.*``
   :depends on biopython: ``>=1.70.*,<=1.85``
   :depends on blast: ``>=2.7.1.*``
   :depends on bowtie2: ``>=2.3.*,<3``
   :depends on mash: ``>=2.0.*,<3``
   :depends on pandas: ``>=0.23.1.*,<3``
   :depends on pytest: ``>=3.5``
   :depends on python: ``>=3.5``
   :depends on requests: ``>=2.*.*``
   :depends on samtools: ``>=1.8.*,<2``
   :depends on seqtk: ``>=1.2.*,<2``

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

    pixi global install ectyper

to add into an existing workspace instead, run::

    pixi add ectyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ectyper

Alternatively, to install into a new environment, run::

    conda create -n envname ectyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ectyper:<tag>

(see `ectyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ectyper| image:: https://img.shields.io/conda/dn/bioconda/ectyper.svg?style=flat
   :target: https://anaconda.org/bioconda/ectyper
   :alt:   (downloads)
.. |docker_ectyper| image:: https://quay.io/repository/biocontainers/ectyper/status
   :target: https://quay.io/repository/biocontainers/ectyper
.. _`ectyper/tags`: https://quay.io/repository/biocontainers/ectyper?tab=tags


.. raw:: html

    <script>
        var package = "ectyper";
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ectyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ectyper/README.html