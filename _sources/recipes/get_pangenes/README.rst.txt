:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_pangenes'
.. highlight: bash

get_pangenes
============

.. conda:recipe:: get_pangenes
   :replaces_section_title:
   :noindex:

   A versatile software package for calling pangenes from whole genome alignments

   :homepage: https://github.com/Ensembl/plant-scripts/tree/master/pangenes
   :license: APACHE / Apache-2.0
   :recipe: /`get_pangenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_pangenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_pangenes/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1186/s13059-023-03071-z`

   get\_pangenes.pl computes whole genome alignments \(WGA\) to define clusters of collinear\, orthologous genes\/features annotated in GFF files\, defining pangenes across a pangenome. currently the bioconda version supports nly minimap2.


.. conda:package:: get_pangenes

   |downloads_get_pangenes| |docker_get_pangenes|

   :versions:
      
      

      ``20250904-0``,  ``20250123-0``,  ``1.3-0``

      

   
   :depends on bedtools: 
   :depends on bzip2: 
   :depends on coreutils: 
   :depends on get_homologues: 
   :depends on gffread: ``0.12.7.*``
   :depends on gmap: 
   :depends on grep: 
   :depends on gsalign: 
   :depends on gzip: 
   :depends on minimap2: ``2.24.*``
   :depends on perl: 
   :depends on perl-db_file: 
   :depends on samtools: 
   :depends on wget: 

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

    pixi global install get_pangenes

to add into an existing workspace instead, run::

    pixi add get_pangenes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install get_pangenes

Alternatively, to install into a new environment, run::

    conda create -n envname get_pangenes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/get_pangenes:<tag>

(see `get_pangenes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_get_pangenes| image:: https://img.shields.io/conda/dn/bioconda/get_pangenes.svg?style=flat
   :target: https://anaconda.org/bioconda/get_pangenes
   :alt:   (downloads)
.. |docker_get_pangenes| image:: https://quay.io/repository/biocontainers/get_pangenes/status
   :target: https://quay.io/repository/biocontainers/get_pangenes
.. _`get_pangenes/tags`: https://quay.io/repository/biocontainers/get_pangenes?tab=tags


.. raw:: html

    <script>
        var package = "get_pangenes";
        var versions = ["20250904","20250123","1.3"];
    </script>





Notes
-----
This package installs the GET\_PANGENES code. It is recommended to run it in a
computer cluster with LSF or slurm\, particularly for large genomes.
To configure it for HPC \(get\_pangenes.pl \-m\) please check the documentation and
edit your own HPC.conf file \, which should be placed in the same location as the
main script get\_pangenes.pl . Documentation can be found at

https\:\/\/github.com\/Ensembl\/plant\-scripts\/tree\/master\/pangenes


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_pangenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_pangenes/README.html