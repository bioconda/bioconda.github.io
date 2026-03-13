:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam-readcount'
.. highlight: bash

bam-readcount
=============

.. conda:recipe:: bam-readcount
   :replaces_section_title:
   :noindex:

   bam\-readcount generates metrics at single nucleotide positions.

   :homepage: https://github.com/genome/bam-readcount
   :documentation: https://github.com/genome/bam-readcount/blob/v1.0.1/README.md
   
   :license: MIT / MIT
   :recipe: /`bam-readcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam-readcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam-readcount/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.03722`, biotools: :biotools:`bam-readcount`

   


.. conda:package:: bam-readcount

   |downloads_bam-readcount| |docker_bam-readcount|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.8-4``,  ``0.8-3``,  ``0.8-2``,  ``0.8-1``

      

   
   :depends on icu: ``>=73.2,<74.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: 

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

    pixi global install bam-readcount

to add into an existing workspace instead, run::

    pixi add bam-readcount

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bam-readcount

Alternatively, to install into a new environment, run::

    conda create -n envname bam-readcount

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bam-readcount:<tag>

(see `bam-readcount/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bam-readcount| image:: https://img.shields.io/conda/dn/bioconda/bam-readcount.svg?style=flat
   :target: https://anaconda.org/bioconda/bam-readcount
   :alt:   (downloads)
.. |docker_bam-readcount| image:: https://quay.io/repository/biocontainers/bam-readcount/status
   :target: https://quay.io/repository/biocontainers/bam-readcount
.. _`bam-readcount/tags`: https://quay.io/repository/biocontainers/bam-readcount?tab=tags


.. raw:: html

    <script>
        var package = "bam-readcount";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam-readcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam-readcount/README.html