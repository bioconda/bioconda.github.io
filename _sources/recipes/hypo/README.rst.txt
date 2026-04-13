:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hypo'
.. highlight: bash

hypo
====

.. conda:recipe:: hypo
   :replaces_section_title:
   :noindex:

   Super Fast and Accurate Polisher for Long Read Genome Assemblies.

   :homepage: https://github.com/kensung-lab/hypo
   :documentation: https://github.com/kensung-lab/hypo/blob/v1.0.3/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hypo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypo/meta.yaml>`_
   :links: biotools: :biotools:`hypo`, usegalaxy-eu: :usegalaxy-eu:`hypo`, doi: :doi:`10.1101/2019.12.19.882506`

   


.. conda:package:: hypo

   |downloads_hypo| |docker_hypo|

   :versions:
      
      

      ``1.0.3-3``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on htslib: ``>=1.10``
   :depends on htslib: ``>=1.23.1,<1.24.0a0``
   :depends on kmc: ``>=3.0``
   :depends on kmc: ``>=3.2.4,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on sdsl-lite: ``>=2.1.1``

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

    pixi global install hypo

to add into an existing workspace instead, run::

    pixi add hypo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hypo

Alternatively, to install into a new environment, run::

    conda create -n envname hypo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hypo:<tag>

(see `hypo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hypo| image:: https://img.shields.io/conda/dn/bioconda/hypo.svg?style=flat
   :target: https://anaconda.org/bioconda/hypo
   :alt:   (downloads)
.. |docker_hypo| image:: https://quay.io/repository/biocontainers/hypo/status
   :target: https://quay.io/repository/biocontainers/hypo
.. _`hypo/tags`: https://quay.io/repository/biocontainers/hypo?tab=tags


.. raw:: html

    <script>
        var package = "hypo";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hypo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hypo/README.html