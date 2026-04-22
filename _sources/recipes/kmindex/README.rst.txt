:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmindex'
.. highlight: bash

kmindex
=======

.. conda:recipe:: kmindex
   :replaces_section_title:
   :noindex:

   A tool for large\-scale k\-mer indexing

   :homepage: https://github.com/tlemane/kmindex
   :documentation: https://tlemane.github.io/kmindex
   
   :developer docs: https://github.com/tlemane/kmindex/
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`kmindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmindex/meta.yaml>`_

   Given a databank D \= \{S1\,...\,Sn\}\, with each Si being any genomic dataset \(genome or raw reads\)\, kmindex allows to compute the percentage of shared k\-mers between a query Q and each Si.


.. conda:package:: kmindex

   |downloads_kmindex| |docker_kmindex|

   :versions:
      
      

      ``0.6.0-1``,  ``0.6.0-0``

      

   
   :depends on kmtricks: ``>=1.5.1``
   :depends on libgcc: ``>=12``
   :depends on libstdcxx: ``>=12``

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

    pixi global install kmindex

to add into an existing workspace instead, run::

    pixi add kmindex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kmindex

Alternatively, to install into a new environment, run::

    conda create -n envname kmindex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kmindex:<tag>

(see `kmindex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kmindex| image:: https://img.shields.io/conda/dn/bioconda/kmindex.svg?style=flat
   :target: https://anaconda.org/bioconda/kmindex
   :alt:   (downloads)
.. |docker_kmindex| image:: https://quay.io/repository/biocontainers/kmindex/status
   :target: https://quay.io/repository/biocontainers/kmindex
.. _`kmindex/tags`: https://quay.io/repository/biocontainers/kmindex?tab=tags


.. raw:: html

    <script>
        var package = "kmindex";
        var versions = ["0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmindex/README.html