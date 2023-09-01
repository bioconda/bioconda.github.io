:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gor_pyspark'
.. highlight: bash

gor_pyspark
===========

.. conda:recipe:: gor_pyspark
   :replaces_section_title:
   :noindex:

   Python helper function for gor\-spark

   :homepage: https://github.com/gorpipe/gor-pyspark
   :license: APACHE / Apache Software
   :recipe: /`gor_pyspark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gor_pyspark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gor_pyspark/meta.yaml>`_

   


.. conda:package:: gor_pyspark

   |downloads_gor_pyspark| |docker_gor_pyspark|

   :versions:
      
      

      ``3.22.6-0``

      

   
   :depends pyspark: ``>=3.2.1``
   :depends python: 
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

      mamba install gor_pyspark

   and update with::

      mamba update gor_pyspark

  To create a new environment, run::

      mamba create --name myenvname gor_pyspark

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gor_pyspark:<tag>

   (see `gor_pyspark/tags`_ for valid values for ``<tag>``)


.. |downloads_gor_pyspark| image:: https://img.shields.io/conda/dn/bioconda/gor_pyspark.svg?style=flat
   :target: https://anaconda.org/bioconda/gor_pyspark
   :alt:   (downloads)
.. |docker_gor_pyspark| image:: https://quay.io/repository/biocontainers/gor_pyspark/status
   :target: https://quay.io/repository/biocontainers/gor_pyspark
.. _`gor_pyspark/tags`: https://quay.io/repository/biocontainers/gor_pyspark?tab=tags


.. raw:: html

    <script>
        var package = "gor_pyspark";
        var versions = ["3.22.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gor_pyspark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gor_pyspark/README.html