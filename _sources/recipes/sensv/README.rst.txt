:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sensv'
.. highlight: bash

sensv
=====

.. conda:recipe:: sensv
   :replaces_section_title:
   :noindex:

   SENSV

   :homepage: https://github.com/HKU-BAL/SENSV
   :license: AGPLv3
   :recipe: /`sensv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sensv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sensv/meta.yaml>`_

   


.. conda:package:: sensv

   |downloads_sensv| |docker_sensv|

   :versions:
      
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``v1.0.1-0``

      

   
   :depends on grabix: ``0.1.8.*``
   :depends on htslib: ``1.10.2.*``
   :depends on intervaltree: ``3.0.2.*``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on minimap2: ``2.17.*``
   :depends on pandas: ``1.0.1.*``
   :depends on pigz: ``2.3.4.*``
   :depends on pyfaidx: ``0.5.8.*``
   :depends on pypy3.6: ``7.3.0.*``
   :depends on pysam: ``0.15.3.*``
   :depends on samtools: 
   :depends on scipy: ``1.4.1.*``
   :depends on survivor: ``1.0.6.*``
   :depends on vcflib: ``1.0.0.*``
   :depends on zlib: 

   :additional platforms:
      

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

    pixi global install sensv

to add into an existing workspace instead, run::

    pixi add sensv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sensv

Alternatively, to install into a new environment, run::

    conda create -n envname sensv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sensv:<tag>

(see `sensv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sensv| image:: https://img.shields.io/conda/dn/bioconda/sensv.svg?style=flat
   :target: https://anaconda.org/bioconda/sensv
   :alt:   (downloads)
.. |docker_sensv| image:: https://quay.io/repository/biocontainers/sensv/status
   :target: https://quay.io/repository/biocontainers/sensv
.. _`sensv/tags`: https://quay.io/repository/biocontainers/sensv?tab=tags


.. raw:: html

    <script>
        var package = "sensv";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sensv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sensv/README.html