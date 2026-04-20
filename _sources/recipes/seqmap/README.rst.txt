:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqmap'
.. highlight: bash

seqmap
======

.. conda:recipe:: seqmap
   :replaces_section_title:
   :noindex:

   SeqMap is a tool for mapping large amount of oligonucleotide to the genome.

   :homepage: http://www-personal.umich.edu/~jianghui/seqmap
   :license: Custom OSS
   :recipe: /`seqmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqmap/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btn429`

   


.. conda:package:: seqmap

   |downloads_seqmap| |docker_seqmap|

   :versions:
      
      

      ``1.0.13-3``,  ``1.0.13-1``,  ``1.0.13-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install seqmap

to add into an existing workspace instead, run::

    pixi add seqmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqmap

Alternatively, to install into a new environment, run::

    conda create -n envname seqmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqmap:<tag>

(see `seqmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqmap| image:: https://img.shields.io/conda/dn/bioconda/seqmap.svg?style=flat
   :target: https://anaconda.org/bioconda/seqmap
   :alt:   (downloads)
.. |docker_seqmap| image:: https://quay.io/repository/biocontainers/seqmap/status
   :target: https://quay.io/repository/biocontainers/seqmap
.. _`seqmap/tags`: https://quay.io/repository/biocontainers/seqmap?tab=tags


.. raw:: html

    <script>
        var package = "seqmap";
        var versions = ["1.0.13","1.0.13","1.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqmap/README.html