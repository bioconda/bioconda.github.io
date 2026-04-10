:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'capc-map'
.. highlight: bash

capc-map
========

.. conda:recipe:: capc-map
   :replaces_section_title:
   :noindex:

   Analysis software for Capture\-C data

   :homepage: https://capc-map.readthedocs.io/
   :license: GNU General Public License v3.0
   :recipe: /`capc-map <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capc-map>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capc-map/meta.yaml>`_

   


.. conda:package:: capc-map

   |downloads_capc-map| |docker_capc-map|

   :versions:
      
      

      ``1.1.3-6``,  ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on bowtie: ``>=1.1.1``
   :depends on cutadapt: ``>=1.11``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on numpy: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on samtools: ``>=1.3.1``

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

    pixi global install capc-map

to add into an existing workspace instead, run::

    pixi add capc-map

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install capc-map

Alternatively, to install into a new environment, run::

    conda create -n envname capc-map

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/capc-map:<tag>

(see `capc-map/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_capc-map| image:: https://img.shields.io/conda/dn/bioconda/capc-map.svg?style=flat
   :target: https://anaconda.org/bioconda/capc-map
   :alt:   (downloads)
.. |docker_capc-map| image:: https://quay.io/repository/biocontainers/capc-map/status
   :target: https://quay.io/repository/biocontainers/capc-map
.. _`capc-map/tags`: https://quay.io/repository/biocontainers/capc-map?tab=tags


.. raw:: html

    <script>
        var package = "capc-map";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/capc-map/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/capc-map/README.html