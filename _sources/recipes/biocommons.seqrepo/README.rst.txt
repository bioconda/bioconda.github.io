:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocommons.seqrepo'
.. highlight: bash

biocommons.seqrepo
==================

.. conda:recipe:: biocommons.seqrepo
   :replaces_section_title:
   :noindex:

   Python package for writing and reading a local collection of biological sequences.

   :homepage: https://github.com/biocommons/biocommons.seqrepo
   :license: APACHE / Apache-2.0
   :recipe: /`biocommons.seqrepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocommons.seqrepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocommons.seqrepo/meta.yaml>`_

   


.. conda:package:: biocommons.seqrepo

   |downloads_biocommons.seqrepo| |docker_biocommons.seqrepo|

   :versions:
      
      

      ``0.6.9-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``

      

   
   :depends bioutils: ``>0.4``
   :depends coloredlogs: 
   :depends ipython: 
   :depends pysam: 
   :depends python: ``>=3.9``
   :depends requests: 
   :depends requests-html: 
   :depends six: 
   :depends tqdm: 
   :depends yoyo-migrations: 
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

      mamba install biocommons.seqrepo

   and update with::

      mamba update biocommons.seqrepo

  To create a new environment, run::

      mamba create --name myenvname biocommons.seqrepo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biocommons.seqrepo:<tag>

   (see `biocommons.seqrepo/tags`_ for valid values for ``<tag>``)


.. |downloads_biocommons.seqrepo| image:: https://img.shields.io/conda/dn/bioconda/biocommons.seqrepo.svg?style=flat
   :target: https://anaconda.org/bioconda/biocommons.seqrepo
   :alt:   (downloads)
.. |docker_biocommons.seqrepo| image:: https://quay.io/repository/biocontainers/biocommons.seqrepo/status
   :target: https://quay.io/repository/biocontainers/biocommons.seqrepo
.. _`biocommons.seqrepo/tags`: https://quay.io/repository/biocontainers/biocommons.seqrepo?tab=tags


.. raw:: html

    <script>
        var package = "biocommons.seqrepo";
        var versions = ["0.6.9","0.6.7","0.6.6","0.6.5","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocommons.seqrepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocommons.seqrepo/README.html