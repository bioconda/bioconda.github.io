:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pharokka'
.. highlight: bash

pharokka
========

.. conda:recipe:: pharokka
   :replaces_section_title:
   :noindex:

   Fast Phage Annotation Program

   :homepage: https://github.com/gbouras13/pharokka
   :documentation: https://pharokka.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pharokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pharokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pharokka/meta.yaml>`_

   


.. conda:package:: pharokka

   |downloads_pharokka| |docker_pharokka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.1-1</code>,  <code>1.9.1-0</code>,  <code>1.9.0-0</code>,  <code>1.8.2-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.5-2</code>,  <code>1.7.5-1</code>,  <code>1.7.5-0</code>,  </span></summary>
      

      ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.5-2``,  ``1.7.5-1``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on alive-progress: ``>=3.0.1``
   :depends on aragorn: ``>=1.2.41``
   :depends on bcbio-gff: ``>=0.7.0``
   :depends on biopython: ``>=1.80``
   :depends on black: ``>=22.3.0``
   :depends on dnaapler: ``>=1.0.1``
   :depends on isort: ``>=5.10.1``
   :depends on loguru: ``>=0.5.4``
   :depends on mash: ``>=2.2``
   :depends on minced: ``>=0.4.2``
   :depends on mmseqs2: ``>=14.7e284``
   :depends on phanotate: ``=1.6.7,<2``
   :depends on pycirclize: ``>=0.3.1``
   :depends on pyhmmer: ``>=0.12.0``
   :depends on pyrodigal: ``>=3.1.0``
   :depends on pyrodigal-gv: ``>=0.2.0``
   :depends on pyrodigal-rv: ``>=0.1.0``
   :depends on pytest: ``>=6.2.5``
   :depends on pytest-cov: ``>=3.0.0``
   :depends on python: ``>=3.5``
   :depends on pyyaml: ``>=6.0``
   :depends on requests: ``>=2.25.1``
   :depends on setuptools: ``>=67.7.2,<81``
   :depends on trnascan-se: ``>=2.0.9``

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

    pixi global install pharokka

to add into an existing workspace instead, run::

    pixi add pharokka

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pharokka

Alternatively, to install into a new environment, run::

    conda create -n envname pharokka

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pharokka:<tag>

(see `pharokka/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pharokka| image:: https://img.shields.io/conda/dn/bioconda/pharokka.svg?style=flat
   :target: https://anaconda.org/bioconda/pharokka
   :alt:   (downloads)
.. |docker_pharokka| image:: https://quay.io/repository/biocontainers/pharokka/status
   :target: https://quay.io/repository/biocontainers/pharokka
.. _`pharokka/tags`: https://quay.io/repository/biocontainers/pharokka?tab=tags


.. raw:: html

    <script>
        var package = "pharokka";
        var versions = ["1.9.1","1.9.1","1.9.0","1.8.2","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pharokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pharokka/README.html