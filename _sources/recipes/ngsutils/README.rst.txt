:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsutils'
.. highlight: bash

ngsutils
========

.. conda:recipe:: ngsutils
   :replaces_section_title:
   :noindex:

   Tools for next\-generation sequencing analysis http\:\/\/ngsutils.org

   :homepage: http://ngsutils.org
   :license: BSD
   :recipe: /`ngsutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsutils/meta.yaml>`_
   :links: biotools: :biotools:`ngsutils`

   


.. conda:package:: ngsutils

   |downloads_ngsutils| |docker_ngsutils|

   :versions:
      
      

      ``0.5.9-5``,  ``0.5.9-4``,  ``0.5.9-3``,  ``0.5.9-2``,  ``0.5.9-1``,  ``0.5.9-0``

      

   
   :depends on coverage: 
   :depends on eta: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on pysam: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on samtools: 
   :depends on swalign: 

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

    pixi global install ngsutils

to add into an existing workspace instead, run::

    pixi add ngsutils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngsutils

Alternatively, to install into a new environment, run::

    conda create -n envname ngsutils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngsutils:<tag>

(see `ngsutils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngsutils| image:: https://img.shields.io/conda/dn/bioconda/ngsutils.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsutils
   :alt:   (downloads)
.. |docker_ngsutils| image:: https://quay.io/repository/biocontainers/ngsutils/status
   :target: https://quay.io/repository/biocontainers/ngsutils
.. _`ngsutils/tags`: https://quay.io/repository/biocontainers/ngsutils?tab=tags


.. raw:: html

    <script>
        var package = "ngsutils";
        var versions = ["0.5.9","0.5.9","0.5.9","0.5.9","0.5.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsutils/README.html