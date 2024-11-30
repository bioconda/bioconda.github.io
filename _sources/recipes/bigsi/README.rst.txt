:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigsi'
.. highlight: bash

bigsi
=====

.. conda:recipe:: bigsi
   :replaces_section_title:
   :noindex:

   BItsliced Genomic Signature Index \[BIGSI\]

   :homepage: https://github.com/Phelimb/BIGSI
   :license: MIT / LICENSE
   :recipe: /`bigsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigsi/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-018-0010-1`

   


.. conda:package:: bigsi

   |downloads_bigsi| |docker_bigsi|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends biopython: 
   :depends bitarray: 
   :depends bsddb3: 
   :depends cython: 
   :depends hug: 
   :depends humanfriendly: 
   :depends libdb: 
   :depends mmh3: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends redis-py: 
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

      mamba install bigsi

   and update with::

      mamba update bigsi

  To create a new environment, run::

      mamba create --name myenvname bigsi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bigsi:<tag>

   (see `bigsi/tags`_ for valid values for ``<tag>``)


.. |downloads_bigsi| image:: https://img.shields.io/conda/dn/bioconda/bigsi.svg?style=flat
   :target: https://anaconda.org/bioconda/bigsi
   :alt:   (downloads)
.. |docker_bigsi| image:: https://quay.io/repository/biocontainers/bigsi/status
   :target: https://quay.io/repository/biocontainers/bigsi
.. _`bigsi/tags`: https://quay.io/repository/biocontainers/bigsi?tab=tags


.. raw:: html

    <script>
        var package = "bigsi";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigsi/README.html