:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macs3'
.. highlight: bash

macs3
=====

.. conda:recipe:: macs3
   :replaces_section_title:
   :noindex:

   Model Based Analysis for ChIP\-Seq data.

   :homepage: https://github.com/macs3-project/MACS
   :documentation: https://macs3-project.github.io/MACS
   
   :license: BSD / BSD-3-Clause
   :recipe: /`macs3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs3/meta.yaml>`_
   :links: biotools: :biotools:`macs`, doi: :doi:`10.1186/gb-2008-9-9-r137`, usegalaxy-eu: :usegalaxy-eu:`peakcalling_macs`, usegalaxy-eu: :usegalaxy-eu:`macs2_bdgbroadcall`, usegalaxy-eu: :usegalaxy-eu:`macs2_bdgcmp`, usegalaxy-eu: :usegalaxy-eu:`macs2_bdgdiff`, usegalaxy-eu: :usegalaxy-eu:`macs2_bdgpeakcall`, usegalaxy-eu: :usegalaxy-eu:`macs2_callpeak`, usegalaxy-eu: :usegalaxy-eu:`macs2_filterdup`, usegalaxy-eu: :usegalaxy-eu:`macs2_predictd`, usegalaxy-eu: :usegalaxy-eu:`macs2_randsample`, usegalaxy-eu: :usegalaxy-eu:`macs2_refinepeak`

   


.. conda:package:: macs3

   |downloads_macs3| |docker_macs3|

   :versions:
      
      

      ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-3``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``

      

   
   :depends on cykhash: ``>=2.0,<3.0``
   :depends on hmmlearn: ``>=0.3.2``
   :depends on libgcc: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.25``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scikit-learn: ``>=1.3``
   :depends on scipy: ``>=1.12``

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

    pixi global install macs3

to add into an existing workspace instead, run::

    pixi add macs3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install macs3

Alternatively, to install into a new environment, run::

    conda create -n envname macs3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/macs3:<tag>

(see `macs3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_macs3| image:: https://img.shields.io/conda/dn/bioconda/macs3.svg?style=flat
   :target: https://anaconda.org/bioconda/macs3
   :alt:   (downloads)
.. |docker_macs3| image:: https://quay.io/repository/biocontainers/macs3/status
   :target: https://quay.io/repository/biocontainers/macs3
.. _`macs3/tags`: https://quay.io/repository/biocontainers/macs3?tab=tags


.. raw:: html

    <script>
        var package = "macs3";
        var versions = ["3.0.4","3.0.3","3.0.2","3.0.2","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macs3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macs3/README.html