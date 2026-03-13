:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'architeuthis'
.. highlight: bash

architeuthis
============

.. conda:recipe:: architeuthis
   :replaces_section_title:
   :noindex:

   Tool to analyze and summarize data for Kraken.

   :homepage: https://github.com/cdiener/architeuthis
   :developer docs: https://github.com/cdiener/architeuthis.git
   :license: Apache-2.0
   :recipe: /`architeuthis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/architeuthis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/architeuthis/meta.yaml>`_

   architeuthis is a fast standalone command to supplement the Kraken suite of software
   tools such like Kraken2\, KrakenUniq\, and Bracken. I saw myself repeatedly rewriting
   the same code in my pipelines when dealing with Kraken output\, like merging files or
   maninpulating lineage annotations. It also adds some functionality to dive deeper
   into the individual k\-mer classifications for reads.



.. conda:package:: architeuthis

   |downloads_architeuthis| |docker_architeuthis|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends on taxonkit: ``>=0.16.0``

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

    pixi global install architeuthis

to add into an existing workspace instead, run::

    pixi add architeuthis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install architeuthis

Alternatively, to install into a new environment, run::

    conda create -n envname architeuthis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/architeuthis:<tag>

(see `architeuthis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_architeuthis| image:: https://img.shields.io/conda/dn/bioconda/architeuthis.svg?style=flat
   :target: https://anaconda.org/bioconda/architeuthis
   :alt:   (downloads)
.. |docker_architeuthis| image:: https://quay.io/repository/biocontainers/architeuthis/status
   :target: https://quay.io/repository/biocontainers/architeuthis
.. _`architeuthis/tags`: https://quay.io/repository/biocontainers/architeuthis?tab=tags


.. raw:: html

    <script>
        var package = "architeuthis";
        var versions = ["0.5.0","0.4.0","0.3.1","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/architeuthis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/architeuthis/README.html