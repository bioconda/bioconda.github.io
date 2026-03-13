:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phantompeakqualtools'
.. highlight: bash

phantompeakqualtools
====================

.. conda:recipe:: phantompeakqualtools
   :replaces_section_title:
   :noindex:

   This package computes informative enrichment and quality measures for ChIP\-seq\/DNase\-seq\/FAIRE\-seq\/MNase\-seq data. It can also be used to obtain robust estimates of the predominant fragment length or characteristic tag shift values in these assays.

   :homepage: https://github.com/kundajelab/phantompeakqualtools
   :license: BSD-3-Clause
   :recipe: /`phantompeakqualtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantompeakqualtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantompeakqualtools/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.136184.111`, doi: :doi:`10.1038/nbt.1508`

   


.. conda:package:: phantompeakqualtools

   |downloads_phantompeakqualtools| |docker_phantompeakqualtools|

   :versions:
      
      

      ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1.1-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends on bioconductor-rsamtools: 
   :depends on boost: 
   :depends on gawk: 
   :depends on r-base: ``>=3.1``
   :depends on r-bitops: 
   :depends on r-catools: 
   :depends on r-snow: 
   :depends on r-snowfall: 
   :depends on r-spp: ``>=1.13``
   :depends on samtools: 

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

    pixi global install phantompeakqualtools

to add into an existing workspace instead, run::

    pixi add phantompeakqualtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phantompeakqualtools

Alternatively, to install into a new environment, run::

    conda create -n envname phantompeakqualtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phantompeakqualtools:<tag>

(see `phantompeakqualtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phantompeakqualtools| image:: https://img.shields.io/conda/dn/bioconda/phantompeakqualtools.svg?style=flat
   :target: https://anaconda.org/bioconda/phantompeakqualtools
   :alt:   (downloads)
.. |docker_phantompeakqualtools| image:: https://quay.io/repository/biocontainers/phantompeakqualtools/status
   :target: https://quay.io/repository/biocontainers/phantompeakqualtools
.. _`phantompeakqualtools/tags`: https://quay.io/repository/biocontainers/phantompeakqualtools?tab=tags


.. raw:: html

    <script>
        var package = "phantompeakqualtools";
        var versions = ["1.2.2","1.2.2","1.2.1.1","1.2.1","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phantompeakqualtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phantompeakqualtools/README.html