:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pirs'
.. highlight: bash

pirs
====

.. conda:recipe:: pirs
   :replaces_section_title:
   :noindex:

   pIRS is a program for simulating Illumina PE reads.

   :homepage: https://github.com/galaxy001/pirs
   :license: GPL-2.0
   :recipe: /`pirs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirs/meta.yaml>`_

   


.. conda:package:: pirs

   |downloads_pirs| |docker_pirs|

   :versions:
      
      

      ``2.0.2-6``,  ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends on boost: ``>=1.74.0,<1.74.1.0a0``
   :depends on bwa: 
   :depends on coreutils: 
   :depends on gnuplot: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libgfortran-ng: 
   :depends on libgfortran5: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on perl: 
   :depends on samtools: 
   :depends on soapaligner: 
   :depends on soapcoverage: 
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install pirs

to add into an existing workspace instead, run::

    pixi add pirs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pirs

Alternatively, to install into a new environment, run::

    conda create -n envname pirs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pirs:<tag>

(see `pirs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pirs| image:: https://img.shields.io/conda/dn/bioconda/pirs.svg?style=flat
   :target: https://anaconda.org/bioconda/pirs
   :alt:   (downloads)
.. |docker_pirs| image:: https://quay.io/repository/biocontainers/pirs/status
   :target: https://quay.io/repository/biocontainers/pirs
.. _`pirs/tags`: https://quay.io/repository/biocontainers/pirs?tab=tags


.. raw:: html

    <script>
        var package = "pirs";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pirs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pirs/README.html