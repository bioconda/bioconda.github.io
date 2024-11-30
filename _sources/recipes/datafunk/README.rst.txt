:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'datafunk'
.. highlight: bash

datafunk
========

.. conda:recipe:: datafunk
   :replaces_section_title:
   :noindex:

   Miscellaneous data manipulation tools for fasta and sam files

   :homepage: https://github.com/cov-ert/datafunk
   :license: MIT / MIT
   :recipe: /`datafunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/datafunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/datafunk/meta.yaml>`_

   


.. conda:package:: datafunk

   |downloads_datafunk| |docker_datafunk|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.8-0``

      

   
   :depends biopython: ``>=1.70``
   :depends datapackage: 
   :depends epiweeks: 
   :depends pandas: ``>=0.25.0``
   :depends pycountry: ``>=19.8.18``
   :depends pysam: ``>=0.15.4``
   :depends python: 
   :depends unidecode: 
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

      mamba install datafunk

   and update with::

      mamba update datafunk

  To create a new environment, run::

      mamba create --name myenvname datafunk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/datafunk:<tag>

   (see `datafunk/tags`_ for valid values for ``<tag>``)


.. |downloads_datafunk| image:: https://img.shields.io/conda/dn/bioconda/datafunk.svg?style=flat
   :target: https://anaconda.org/bioconda/datafunk
   :alt:   (downloads)
.. |docker_datafunk| image:: https://quay.io/repository/biocontainers/datafunk/status
   :target: https://quay.io/repository/biocontainers/datafunk
.. _`datafunk/tags`: https://quay.io/repository/biocontainers/datafunk?tab=tags


.. raw:: html

    <script>
        var package = "datafunk";
        var versions = ["0.1.0","0.0.9","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/datafunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/datafunk/README.html