:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fq'
.. highlight: bash

fq
==

.. conda:recipe:: fq
   :replaces_section_title:
   :noindex:

   fq is a library to generate and validate FASTQ file pairs.

   :homepage: https://github.com/stjude-rust-labs/fq
   :license: MIT
   :recipe: /`fq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fq/meta.yaml>`_

   fq provides subcommands for filtering\, generating\, subsampling\, and validating FASTQ files.



.. conda:package:: fq

   |downloads_fq| |docker_fq|

   :versions:
      
      

      ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.1-0``

      

   

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install fq

to add into an existing workspace instead, run::

    pixi add fq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fq

Alternatively, to install into a new environment, run::

    conda create -n envname fq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fq:<tag>

(see `fq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fq| image:: https://img.shields.io/conda/dn/bioconda/fq.svg?style=flat
   :target: https://anaconda.org/bioconda/fq
   :alt:   (downloads)
.. |docker_fq| image:: https://quay.io/repository/biocontainers/fq/status
   :target: https://quay.io/repository/biocontainers/fq
.. _`fq/tags`: https://quay.io/repository/biocontainers/fq?tab=tags


.. raw:: html

    <script>
        var package = "fq";
        var versions = ["0.12.0","0.11.0","0.11.0","0.10.0","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fq/README.html