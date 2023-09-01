:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pfam_scan'
.. highlight: bash

pfam_scan
=========

.. conda:recipe:: pfam_scan
   :replaces_section_title:
   :noindex:

   pfam\_scan.pl is a Perl script calling HMMER v3 to search a FASTA file against a library of Pfam HMMs.

   :homepage: http://ftp.ebi.ac.uk/pub/databases/Pfam/Tools/
   :license: GPL (>= 2)
   :recipe: /`pfam_scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfam_scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfam_scan/meta.yaml>`_

   


.. conda:package:: pfam_scan

   |downloads_pfam_scan| |docker_pfam_scan|

   :versions:
      
      

      ``1.6-4``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends hmmer: ``>=3.0``
   :depends perl: 
   :depends perl-bioperl: ``>=1.4``
   :depends perl-ipc-run: 
   :depends perl-moose: 
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

      mamba install pfam_scan

   and update with::

      mamba update pfam_scan

  To create a new environment, run::

      mamba create --name myenvname pfam_scan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pfam_scan:<tag>

   (see `pfam_scan/tags`_ for valid values for ``<tag>``)


.. |downloads_pfam_scan| image:: https://img.shields.io/conda/dn/bioconda/pfam_scan.svg?style=flat
   :target: https://anaconda.org/bioconda/pfam_scan
   :alt:   (downloads)
.. |docker_pfam_scan| image:: https://quay.io/repository/biocontainers/pfam_scan/status
   :target: https://quay.io/repository/biocontainers/pfam_scan
.. _`pfam_scan/tags`: https://quay.io/repository/biocontainers/pfam_scan?tab=tags


.. raw:: html

    <script>
        var package = "pfam_scan";
        var versions = ["1.6","1.6","1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pfam_scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pfam_scan/README.html