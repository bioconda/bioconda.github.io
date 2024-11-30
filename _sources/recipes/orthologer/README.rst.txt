:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthologer'
.. highlight: bash

orthologer
==========

.. conda:recipe:: orthologer
   :replaces_section_title:
   :noindex:

   Establish orthology among fasta files.

   :homepage: https://orthologer.ezlab.org
   :documentation: https://orthologer.ezlab.org/#on-orthodb-data
   
   :developer docs: https://gitlab.com/ezlab/orthologer_container
   :license: GPL3 / GPL3
   :recipe: /`orthologer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthologer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthologer/meta.yaml>`_
   :links: biotools: :biotools:`orthologer`, doi: :doi:`10.1093/nar/gkac996`, PMID: :PMID:`36350662`

   Map genes to OrthoDB as well as finding orthology among a set of fasta files.


.. conda:package:: orthologer

   |downloads_orthologer| |docker_orthologer|

   :versions:
      
      

      ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.2-0``,  ``3.3.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bash: ``>=4.1``
   :depends biopython: 
   :depends blast: 
   :depends busco: ``>=5.7.0``
   :depends cd-hit: 
   :depends diamond: 
   :depends libgcc: ``>=12``
   :depends libgomp: 
   :depends libstdcxx: ``>=12``
   :depends mmseqs2: 
   :depends numpy: 
   :depends python: ``>=3.4``
   :depends rsync: 
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

      mamba install orthologer

   and update with::

      mamba update orthologer

  To create a new environment, run::

      mamba create --name myenvname orthologer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orthologer:<tag>

   (see `orthologer/tags`_ for valid values for ``<tag>``)


.. |downloads_orthologer| image:: https://img.shields.io/conda/dn/bioconda/orthologer.svg?style=flat
   :target: https://anaconda.org/bioconda/orthologer
   :alt:   (downloads)
.. |docker_orthologer| image:: https://quay.io/repository/biocontainers/orthologer/status
   :target: https://quay.io/repository/biocontainers/orthologer
.. _`orthologer/tags`: https://quay.io/repository/biocontainers/orthologer?tab=tags


.. raw:: html

    <script>
        var package = "orthologer";
        var versions = ["3.5.0","3.4.2","3.4.1","3.4.0","3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthologer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthologer/README.html