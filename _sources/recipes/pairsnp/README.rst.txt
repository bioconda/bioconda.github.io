:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pairsnp'
.. highlight: bash

pairsnp
=======

.. conda:recipe:: pairsnp
   :replaces_section_title:
   :noindex:

   pairsnp calculates pairwise SNP distance matrices from multiple sequence alignment fasta files.

   :homepage: https://github.com/gtonkinhill/pairsnp
   :license: MIT
   :recipe: /`pairsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairsnp/meta.yaml>`_

   


.. conda:package:: pairsnp

   |downloads_pairsnp| |docker_pairsnp|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install pairsnp

   and update with::

      mamba update pairsnp

  To create a new environment, run::

      mamba create --name myenvname pairsnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pairsnp:<tag>

   (see `pairsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_pairsnp| image:: https://img.shields.io/conda/dn/bioconda/pairsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/pairsnp
   :alt:   (downloads)
.. |docker_pairsnp| image:: https://quay.io/repository/biocontainers/pairsnp/status
   :target: https://quay.io/repository/biocontainers/pairsnp
.. _`pairsnp/tags`: https://quay.io/repository/biocontainers/pairsnp?tab=tags


.. raw:: html

    <script>
        var package = "pairsnp";
        var versions = ["0.3.1","0.3.1","0.3.1","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairsnp/README.html