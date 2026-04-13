:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqlib'
.. highlight: bash

seqlib
======

.. conda:recipe:: seqlib
   :replaces_section_title:
   :noindex:

   C\+\+ interface to HTSlib\, BWA\-MEM and Fermi.

   :homepage: https://github.com/walaj/SeqLib
   :documentation: https://github.com/walaj/SeqLib/blob/1.2.0/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`seqlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqlib/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw741`

   


.. conda:package:: seqlib

   |downloads_seqlib| |docker_seqlib|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.4,<6.0a0``
   :depends on libstdcxx: ``>=13``
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

    pixi global install seqlib

to add into an existing workspace instead, run::

    pixi add seqlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqlib

Alternatively, to install into a new environment, run::

    conda create -n envname seqlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqlib:<tag>

(see `seqlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqlib| image:: https://img.shields.io/conda/dn/bioconda/seqlib.svg?style=flat
   :target: https://anaconda.org/bioconda/seqlib
   :alt:   (downloads)
.. |docker_seqlib| image:: https://quay.io/repository/biocontainers/seqlib/status
   :target: https://quay.io/repository/biocontainers/seqlib
.. _`seqlib/tags`: https://quay.io/repository/biocontainers/seqlib?tab=tags


.. raw:: html

    <script>
        var package = "seqlib";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqlib/README.html