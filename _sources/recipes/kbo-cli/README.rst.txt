:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kbo-cli'
.. highlight: bash

kbo-cli
=======

.. conda:recipe:: kbo-cli
   :replaces_section_title:
   :noindex:

   Command\-line interface for the kbo local aligner

   :homepage: https://docs.rs/kbo
   :developer docs: https://github.com/tmaklin/kbo-cli
   :license: Dual-licensed under the MIT and Apache 2.0 licenses.
   :recipe: /`kbo-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kbo-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kbo-cli/meta.yaml>`_

   kbo is an aligner that can do variant calling\, reference\-based alignment and
   find sequences of interest in a query\, without a separate indexing step or
   any temporary disk space usage. kbo\-cli provides a command\-line interface to
   the call\, map\, find\, and build functions from kbo.



.. conda:package:: kbo-cli

   |downloads_kbo-cli| |docker_kbo-cli|

   :versions:
      
      

      ``0.2.1-0``,  ``0.1.1-0``

      

   

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

    pixi global install kbo-cli

to add into an existing workspace instead, run::

    pixi add kbo-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kbo-cli

Alternatively, to install into a new environment, run::

    conda create -n envname kbo-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kbo-cli:<tag>

(see `kbo-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kbo-cli| image:: https://img.shields.io/conda/dn/bioconda/kbo-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/kbo-cli
   :alt:   (downloads)
.. |docker_kbo-cli| image:: https://quay.io/repository/biocontainers/kbo-cli/status
   :target: https://quay.io/repository/biocontainers/kbo-cli
.. _`kbo-cli/tags`: https://quay.io/repository/biocontainers/kbo-cli?tab=tags


.. raw:: html

    <script>
        var package = "kbo-cli";
        var versions = ["0.2.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kbo-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kbo-cli/README.html