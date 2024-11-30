:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genbank_to'
.. highlight: bash

genbank_to
==========

.. conda:recipe:: genbank_to
   :replaces_section_title:
   :noindex:

   genbank\_to\: convert genbank files to a swath of other formats

   :homepage: https://github.com/linsalrob/genbank_to
   :license: MIT / MIT
   :recipe: /`genbank_to <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genbank_to>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genbank_to/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.6465821`

   


.. conda:package:: genbank_to

   |downloads_genbank_to| |docker_genbank_to|

   :versions:
      
      

      ``0.42-0``,  ``0.41-0``,  ``0.35-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends pandas: 
   :depends python: ``>=3``
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

      mamba install genbank_to

   and update with::

      mamba update genbank_to

  To create a new environment, run::

      mamba create --name myenvname genbank_to

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genbank_to:<tag>

   (see `genbank_to/tags`_ for valid values for ``<tag>``)


.. |downloads_genbank_to| image:: https://img.shields.io/conda/dn/bioconda/genbank_to.svg?style=flat
   :target: https://anaconda.org/bioconda/genbank_to
   :alt:   (downloads)
.. |docker_genbank_to| image:: https://quay.io/repository/biocontainers/genbank_to/status
   :target: https://quay.io/repository/biocontainers/genbank_to
.. _`genbank_to/tags`: https://quay.io/repository/biocontainers/genbank_to?tab=tags


.. raw:: html

    <script>
        var package = "genbank_to";
        var versions = ["0.42","0.41","0.35"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genbank_to/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genbank_to/README.html