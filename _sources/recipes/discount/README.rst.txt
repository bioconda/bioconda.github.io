:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discount'
.. highlight: bash

discount
========

.. conda:recipe:: discount
   :replaces_section_title:
   :noindex:

   Discount is a very scalable k\-mer counting and indexing tool based on Apache Spark.

   :homepage: https://github.com/jtnystrom/Discount
   :documentation: https://github.com/jtnystrom/Discount/blob/v3.0.1/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`discount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discount/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab156`

   


.. conda:package:: discount

   |downloads_discount| |docker_discount|

   :versions:
      
      

      ``3.0.1-0``

      

   
   :depends openjdk: ``>=17,<22``
   :depends pyspark: ``>=3.1.0,<4.0.0``
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

      mamba install discount

   and update with::

      mamba update discount

  To create a new environment, run::

      mamba create --name myenvname discount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/discount:<tag>

   (see `discount/tags`_ for valid values for ``<tag>``)


.. |downloads_discount| image:: https://img.shields.io/conda/dn/bioconda/discount.svg?style=flat
   :target: https://anaconda.org/bioconda/discount
   :alt:   (downloads)
.. |docker_discount| image:: https://quay.io/repository/biocontainers/discount/status
   :target: https://quay.io/repository/biocontainers/discount
.. _`discount/tags`: https://quay.io/repository/biocontainers/discount?tab=tags


.. raw:: html

    <script>
        var package = "discount";
        var versions = ["3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discount/README.html