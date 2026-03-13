:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'readfq'
.. highlight: bash

readfq
======

.. conda:recipe:: readfq
   :replaces_section_title:
   :noindex:

   A high\-speed tool to calculate reads number and total base count in FASTQ file\, forked from Li Heng\'s original version.

   :homepage: https://github.com/tao-bioinfo/readfq
   :license: MIT / MIT
   :recipe: /`readfq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readfq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readfq/meta.yaml>`_

   


.. conda:package:: readfq

   |downloads_readfq| |docker_readfq|

   :versions:
      
      

      ``2015.08.30-7``,  ``2015.08.30-6``,  ``2015.08.30-5``,  ``2015.08.30-4``,  ``2015.08.30-3``,  ``2015.08.30-2``,  ``2015.08.30-1``,  ``2015.08.30-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install readfq

to add into an existing workspace instead, run::

    pixi add readfq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install readfq

Alternatively, to install into a new environment, run::

    conda create -n envname readfq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/readfq:<tag>

(see `readfq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_readfq| image:: https://img.shields.io/conda/dn/bioconda/readfq.svg?style=flat
   :target: https://anaconda.org/bioconda/readfq
   :alt:   (downloads)
.. |docker_readfq| image:: https://quay.io/repository/biocontainers/readfq/status
   :target: https://quay.io/repository/biocontainers/readfq
.. _`readfq/tags`: https://quay.io/repository/biocontainers/readfq?tab=tags


.. raw:: html

    <script>
        var package = "readfq";
        var versions = ["2015.08.30","2015.08.30","2015.08.30","2015.08.30","2015.08.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/readfq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/readfq/README.html