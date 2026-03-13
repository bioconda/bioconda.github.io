:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mintie'
.. highlight: bash

mintie
======

.. conda:recipe:: mintie
   :replaces_section_title:
   :noindex:

   Method for Identifying Novel Transcripts and Isoforms
   using Equivalence classes\, in cancer and rare disease.


   :homepage: https://github.com/Oshlack/MINTIE
   :license: MIT
   :recipe: /`mintie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mintie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mintie/meta.yaml>`_

   


.. conda:package:: mintie

   |downloads_mintie| |docker_mintie|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.9-0``

      

   
   :depends on bbmap: 
   :depends on bedtools: 
   :depends on bioconductor-edger: 
   :depends on bioconductor-tximport: 
   :depends on biopython: 
   :depends on bpipe: 
   :depends on fastuniq: 
   :depends on fastx_toolkit: 
   :depends on gmap: ``>=2021.06.04``
   :depends on intervaltree_bio: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pysam: 
   :depends on python: 
   :depends on r-base: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-jsonlite: 
   :depends on r-readr: 
   :depends on r-statmod: 
   :depends on salmon: 
   :depends on samtools: 
   :depends on soapdenovo-trans: ``1.03.*``
   :depends on tbb: ``2020.2.*``
   :depends on trimmomatic: 

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

    pixi global install mintie

to add into an existing workspace instead, run::

    pixi add mintie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mintie

Alternatively, to install into a new environment, run::

    conda create -n envname mintie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mintie:<tag>

(see `mintie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mintie| image:: https://img.shields.io/conda/dn/bioconda/mintie.svg?style=flat
   :target: https://anaconda.org/bioconda/mintie
   :alt:   (downloads)
.. |docker_mintie| image:: https://quay.io/repository/biocontainers/mintie/status
   :target: https://quay.io/repository/biocontainers/mintie
.. _`mintie/tags`: https://quay.io/repository/biocontainers/mintie?tab=tags


.. raw:: html

    <script>
        var package = "mintie";
        var versions = ["0.4.3","0.4.2","0.4.1","0.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mintie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mintie/README.html