:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedtk'
.. highlight: bash

bedtk
=====

.. conda:recipe:: bedtk
   :replaces_section_title:
   :noindex:

   Bedtk is a set of simple tools to process BED files.

   :homepage: https://github.com/lh3/bedtk
   :license: MIT / MIT
   :recipe: /`bedtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtk/meta.yaml>`_
   :links: biotools: :biotools:`bedtk`

   Bedtk is a set of simple tools to process BED files. It so far implements intersection\, subtraction\, sorting\, merging and computing the breadth of coverage. Bedtk is not as versatile as bedtools and never aims to match the bedtools feature set. It instead focuses on performance. Bedtk is several to tens of times faster and uses a fraction of memory. It also provides a few convenient functions. For example\, sorting\, merging and intersection can be done in one go without Unix pipes.



.. conda:package:: bedtk

   |downloads_bedtk| |docker_bedtk|

   :versions:
      
      

      ``1.2-0``,  ``1.1-0``,  ``0.0.r25.dirty-6``,  ``0.0.r25.dirty-5``,  ``0.0.r25.dirty-4``,  ``0.0.r25.dirty-3``,  ``0.0.r25.dirty-2``,  ``0.0.r25.dirty-1``,  ``0.0.r25.dirty-0``

      

   
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

    pixi global install bedtk

to add into an existing workspace instead, run::

    pixi add bedtk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bedtk

Alternatively, to install into a new environment, run::

    conda create -n envname bedtk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bedtk:<tag>

(see `bedtk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bedtk| image:: https://img.shields.io/conda/dn/bioconda/bedtk.svg?style=flat
   :target: https://anaconda.org/bioconda/bedtk
   :alt:   (downloads)
.. |docker_bedtk| image:: https://quay.io/repository/biocontainers/bedtk/status
   :target: https://quay.io/repository/biocontainers/bedtk
.. _`bedtk/tags`: https://quay.io/repository/biocontainers/bedtk?tab=tags


.. raw:: html

    <script>
        var package = "bedtk";
        var versions = ["1.2","1.1","0.0.r25.dirty","0.0.r25.dirty","0.0.r25.dirty"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedtk/README.html