:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transannot'
.. highlight: bash

transannot
==========

.. conda:recipe:: transannot
   :replaces_section_title:
   :noindex:

   TransAnnot\: a fast transcriptome annotation pipeline.

   :homepage: https://github.com/soedinglab/transannot
   :documentation: https://github.com/soedinglab/transannot/blob/4-8cd2fdc/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`transannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transannot/meta.yaml>`_
   :links: biotools: :biotools:`transannot`, doi: :doi:`10.1093/bioadv/vbae152`

   


.. conda:package:: transannot

   |downloads_transannot| |docker_transannot|

   :versions:
      
      

      ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.70b2a60-1``,  ``3.70b2a60-0``,  ``3.7f1c8e1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``1.fa9ebab-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on aria2: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on cuda-cudart: ``>=12.8.57,<13.0a0``
   :depends on gawk: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install transannot

to add into an existing workspace instead, run::

    pixi add transannot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install transannot

Alternatively, to install into a new environment, run::

    conda create -n envname transannot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/transannot:<tag>

(see `transannot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_transannot| image:: https://img.shields.io/conda/dn/bioconda/transannot.svg?style=flat
   :target: https://anaconda.org/bioconda/transannot
   :alt:   (downloads)
.. |docker_transannot| image:: https://quay.io/repository/biocontainers/transannot/status
   :target: https://quay.io/repository/biocontainers/transannot
.. _`transannot/tags`: https://quay.io/repository/biocontainers/transannot?tab=tags


.. raw:: html

    <script>
        var package = "transannot";
        var versions = ["4.0.0","4.0.0","4.0.0","3.70b2a60","3.70b2a60"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transannot/README.html