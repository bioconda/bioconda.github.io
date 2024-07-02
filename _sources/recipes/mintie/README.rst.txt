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

      

   
   :depends bbmap: 
   :depends bedtools: 
   :depends bioconductor-edger: 
   :depends bioconductor-tximport: 
   :depends biopython: 
   :depends bpipe: 
   :depends fastuniq: 
   :depends fastx_toolkit: 
   :depends gmap: ``>=2021.06.04``
   :depends intervaltree_bio: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: 
   :depends r-base: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-readr: 
   :depends r-statmod: 
   :depends salmon: 
   :depends samtools: 
   :depends soapdenovo-trans: ``1.03.*``
   :depends tbb: ``2020.2.*``
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mintie

   and update with::

      mamba update mintie

  To create a new environment, run::

      mamba create --name myenvname mintie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mintie:<tag>

   (see `mintie/tags`_ for valid values for ``<tag>``)


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