:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam-tide'
.. highlight: bash

bam-tide
========

.. conda:recipe:: bam-tide
   :replaces_section_title:
   :noindex:

   Fast BAM to BigWig coverage tool written in Rust.

   :homepage: https://github.com/stela2502/bam_tide
   :license: MIT
   :recipe: /`bam-tide <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam-tide>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam-tide/meta.yaml>`_

   bam\_tide provides a high\-performance implementation of BAM coverage
   calculation and BigWig generation\, serving as a fast alternative to
   deepTools bamCoverage.



.. conda:package:: bam-tide

   |downloads_bam-tide| |docker_bam-tide|

   :versions:
      
      

      ``1.2.3-0``

      

   
   :depends on htslib: ``>=1.23.1,<1.24.0a0``
   :depends on libcxx: ``>=19``
   :depends on libzlib: ``>=1.3.2,<2.0a0``

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

    pixi global install bam-tide

to add into an existing workspace instead, run::

    pixi add bam-tide

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bam-tide

Alternatively, to install into a new environment, run::

    conda create -n envname bam-tide

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bam-tide:<tag>

(see `bam-tide/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bam-tide| image:: https://img.shields.io/conda/dn/bioconda/bam-tide.svg?style=flat
   :target: https://anaconda.org/bioconda/bam-tide
   :alt:   (downloads)
.. |docker_bam-tide| image:: https://quay.io/repository/biocontainers/bam-tide/status
   :target: https://quay.io/repository/biocontainers/bam-tide
.. _`bam-tide/tags`: https://quay.io/repository/biocontainers/bam-tide?tab=tags


.. raw:: html

    <script>
        var package = "bam-tide";
        var versions = ["1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam-tide/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam-tide/README.html