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
      
      

      ``20250123-0``

      

   
   :depends bedtools: 
   :depends bzip2: 
   :depends coreutils: 
   :depends get_homologues: 
   :depends gffread: ``0.12.7.*``
   :depends gmap: 
   :depends grep: 
   :depends gsalign: 
   :depends gzip: 
   :depends minimap2: ``2.24.*``
   :depends perl: 
   :depends perl-db_file: 
   :depends samtools: 
   :depends wget: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install get_pangenes

   and update with::

      mamba update get_pangenes

  To create a new environment, run::

      mamba create --name myenvname get_pangenes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/get_pangenes:<tag>

   (see `get_pangenes/tags`_ for valid values for ``<tag>``)


.. |downloads_get_pangenes| image:: https://img.shields.io/conda/dn/bioconda/get_pangenes.svg?style=flat
   :target: https://anaconda.org/bioconda/get_pangenes
   :alt:   (downloads)
.. |docker_get_pangenes| image:: https://quay.io/repository/biocontainers/get_pangenes/status
   :target: https://quay.io/repository/biocontainers/get_pangenes
.. _`get_pangenes/tags`: https://quay.io/repository/biocontainers/get_pangenes?tab=tags


.. raw:: html

    <script>
        var package = "get_pangenes";
        var versions = ["20250123"];
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