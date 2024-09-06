:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'allo'
.. highlight: bash

allo
====

.. conda:recipe:: allo
   :replaces_section_title:
   :noindex:

   Multi\-mapped read rescue strategy for gene regulatory analyses

   :homepage: https://github.com/seqcode/allo
   :license: MIT / MIT
   :recipe: /`allo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allo/meta.yaml>`_

   


.. conda:package:: allo

   |downloads_allo| |docker_allo|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.5-0``

      

   
   :depends joblib: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends tensorflow: ``>=2.11``
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

      mamba install allo

   and update with::

      mamba update allo

  To create a new environment, run::

      mamba create --name myenvname allo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/allo:<tag>

   (see `allo/tags`_ for valid values for ``<tag>``)


.. |downloads_allo| image:: https://img.shields.io/conda/dn/bioconda/allo.svg?style=flat
   :target: https://anaconda.org/bioconda/allo
   :alt:   (downloads)
.. |docker_allo| image:: https://quay.io/repository/biocontainers/allo/status
   :target: https://quay.io/repository/biocontainers/allo
.. _`allo/tags`: https://quay.io/repository/biocontainers/allo?tab=tags


.. raw:: html

    <script>
        var package = "allo";
        var versions = ["1.2.0","1.1.2","1.1.1","1.1.1","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/allo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/allo/README.html