:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maker'
.. highlight: bash

maker
=====

.. conda:recipe:: maker
   :replaces_section_title:
   :noindex:

   MAKER is a portable and easily configurable genome annotation pipeline.

   :homepage: https://www.yandell-lab.org/software/maker.html
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`maker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maker/meta.yaml>`_
   :links: biotools: :biotools:`maker`, usegalaxy-eu: :usegalaxy-eu:`maker`

   


.. conda:package:: maker

   |downloads_maker| |docker_maker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.01.04-0</code>,  <code>3.01.03-4</code>,  <code>3.01.03-2</code>,  <code>3.01.03-1</code>,  <code>3.01.03-0</code>,  <code>2.31.11-1</code>,  <code>2.31.11-0</code>,  <code>2.31.10-17</code>,  <code>2.31.10-16</code>,  </span></summary>
      

      ``3.01.04-0``,  ``3.01.03-4``,  ``3.01.03-2``,  ``3.01.03-1``,  ``3.01.03-0``,  ``2.31.11-1``,  ``2.31.11-0``,  ``2.31.10-17``,  ``2.31.10-16``,  ``2.31.10-15``,  ``2.31.10-14``,  ``2.31.10-13``,  ``2.31.10-12``,  ``2.31.10-11``,  ``2.31.10-10``,  ``2.31.10-9``,  ``2.31.10-8``,  ``2.31.10-7``,  ``2.31.10-6``,  ``2.31.9-6``,  ``2.31.9-3``,  ``2.31.9-2``,  ``2.31.9-1``,  ``2.31.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on augustus: ``>=3.5.0``
   :depends on blast: ``2.14.1.*``
   :depends on exonerate: 
   :depends on libgcc: ``>=13``
   :depends on mpich-mpicc: 
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bioperl-core: ``1.7.8.*``
   :depends on perl-bioperl-core: ``>=1.7.8``
   :depends on perl-bit-vector: 
   :depends on perl-dbd-pg: ``3.18.0.*``
   :depends on perl-dbd-sqlite: ``>=1.76,<2.0a0``
   :depends on perl-dbi: 
   :depends on perl-forks: 
   :depends on perl-inline-c: ``>=0.78``
   :depends on perl-inline-c: ``>=0.82,<0.83.0a0``
   :depends on perl-io-all: 
   :depends on perl-io-prompt: ``>=0.997004,<0.997005.0a0``
   :depends on perl-perl-unsafe-signals: ``>=0.3,<0.4.0a0``
   :depends on perl-perlio-gzip: ``>=0.20,<0.21.0a0``
   :depends on perl-uri: ``5.17.*``
   :depends on repeatmasker: ``>=4.1.9``
   :depends on rmblast: ``2.14.1.*``
   :depends on snap: 

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

    pixi global install maker

to add into an existing workspace instead, run::

    pixi add maker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install maker

Alternatively, to install into a new environment, run::

    conda create -n envname maker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/maker:<tag>

(see `maker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_maker| image:: https://img.shields.io/conda/dn/bioconda/maker.svg?style=flat
   :target: https://anaconda.org/bioconda/maker
   :alt:   (downloads)
.. |docker_maker| image:: https://quay.io/repository/biocontainers/maker/status
   :target: https://quay.io/repository/biocontainers/maker
.. _`maker/tags`: https://quay.io/repository/biocontainers/maker?tab=tags


.. raw:: html

    <script>
        var package = "maker";
        var versions = ["3.01.04","3.01.03","3.01.03","3.01.03","3.01.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maker/README.html