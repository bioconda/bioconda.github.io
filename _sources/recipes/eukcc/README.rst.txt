:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukcc'
.. highlight: bash

eukcc
=====

.. conda:recipe:: eukcc
   :replaces_section_title:
   :noindex:

   Check eukaryotic genomes or MAGs for completeness and contamination.

   :homepage: https://github.com/Finn-Lab/EukCC
   :documentation: https://eukcc.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`eukcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukcc/meta.yaml>`_

   


.. conda:package:: eukcc

   |downloads_eukcc| |docker_eukcc|

   :versions:
      
      

      ``2.1.3-0``,  ``2.1.0-0``,  ``2.0-0``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1.5.1-0``,  ``0.1.4.6-0``

      

   
   :depends on biopython: ``1.83``
   :depends on bwa: 
   :depends on configargparse: 
   :depends on epa-ng: ``0.3.8.*``
   :depends on ete3: 
   :depends on hmmer: ``3.3.*``
   :depends on jsonpickle: 
   :depends on metaeuk: ``4.a0f584d.*``
   :depends on numpy: 
   :depends on pplacer: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on samtools: ``>=1.12``
   :depends on six: 

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

    pixi global install eukcc

to add into an existing workspace instead, run::

    pixi add eukcc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eukcc

Alternatively, to install into a new environment, run::

    conda create -n envname eukcc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eukcc:<tag>

(see `eukcc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eukcc| image:: https://img.shields.io/conda/dn/bioconda/eukcc.svg?style=flat
   :target: https://anaconda.org/bioconda/eukcc
   :alt:   (downloads)
.. |docker_eukcc| image:: https://quay.io/repository/biocontainers/eukcc/status
   :target: https://quay.io/repository/biocontainers/eukcc
.. _`eukcc/tags`: https://quay.io/repository/biocontainers/eukcc?tab=tags


.. raw:: html

    <script>
        var package = "eukcc";
        var versions = ["2.1.3","2.1.0","2.0","0.3","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukcc/README.html