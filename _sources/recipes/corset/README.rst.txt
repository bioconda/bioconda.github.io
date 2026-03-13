:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corset'
.. highlight: bash

corset
======

.. conda:recipe:: corset
   :replaces_section_title:
   :noindex:

   Software for clustering de novo assembled transcripts and counting overlapping reads.

   :homepage: https://github.com/Oshlack/Corset
   :documentation: https://github.com/Oshlack/Corset/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`corset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corset/meta.yaml>`_
   :links: biotools: :biotools:`corset`, doi: :doi:`10.1186/s13059-014-0410-6`

   


.. conda:package:: corset

   |downloads_corset| |docker_corset|

   :versions:
      
      

      ``1.09-6``,  ``1.09-4``,  ``1.09-3``,  ``1.09-2``,  ``1.09-1``,  ``1.09-0``,  ``1.07-0``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on samtools: ``0.1.19.*``
   :depends on samtools: ``>=0.1.19,<0.2.0a0``

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

    pixi global install corset

to add into an existing workspace instead, run::

    pixi add corset

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install corset

Alternatively, to install into a new environment, run::

    conda create -n envname corset

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/corset:<tag>

(see `corset/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_corset| image:: https://img.shields.io/conda/dn/bioconda/corset.svg?style=flat
   :target: https://anaconda.org/bioconda/corset
   :alt:   (downloads)
.. |docker_corset| image:: https://quay.io/repository/biocontainers/corset/status
   :target: https://quay.io/repository/biocontainers/corset
.. _`corset/tags`: https://quay.io/repository/biocontainers/corset?tab=tags


.. raw:: html

    <script>
        var package = "corset";
        var versions = ["1.09","1.09","1.09","1.09","1.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corset/README.html