:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqsizzle'
.. highlight: bash

seqsizzle
=========

.. conda:recipe:: seqsizzle
   :replaces_section_title:
   :noindex:

   A pager for viewing FASTQ files with fuzzy adaptor matching and coloring.

   :homepage: https://github.com/ChangqingW/SeqSizzle
   :license: AGPL-3.0-or-later
   :recipe: /`seqsizzle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsizzle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqsizzle/meta.yaml>`_

   


.. conda:package:: seqsizzle

   |downloads_seqsizzle| |docker_seqsizzle|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
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

    pixi global install seqsizzle

to add into an existing workspace instead, run::

    pixi add seqsizzle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqsizzle

Alternatively, to install into a new environment, run::

    conda create -n envname seqsizzle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqsizzle:<tag>

(see `seqsizzle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqsizzle| image:: https://img.shields.io/conda/dn/bioconda/seqsizzle.svg?style=flat
   :target: https://anaconda.org/bioconda/seqsizzle
   :alt:   (downloads)
.. |docker_seqsizzle| image:: https://quay.io/repository/biocontainers/seqsizzle/status
   :target: https://quay.io/repository/biocontainers/seqsizzle
.. _`seqsizzle/tags`: https://quay.io/repository/biocontainers/seqsizzle?tab=tags


.. raw:: html

    <script>
        var package = "seqsizzle";
        var versions = ["0.4.1","0.4.0","0.3.0","0.2.0","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqsizzle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqsizzle/README.html