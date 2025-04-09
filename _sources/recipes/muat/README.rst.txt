:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'muat'
.. highlight: bash

muat
====

.. conda:recipe:: muat
   :replaces_section_title:
   :noindex:

   A package for Mutation Attention Tool

   :homepage: https://github.com/primasanjaya/muat
   :license: Apache-2.0
   :recipe: /`muat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muat/meta.yaml>`_

   


.. conda:package:: muat

   |downloads_muat| |docker_muat|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends bcftools: 
   :depends bedops: 
   :depends bedtools: 
   :depends boto3: 
   :depends htslib: 
   :depends natsort: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pyliftover: 
   :depends python: 
   :depends pytorch: 
   :depends requests: 
   :depends scikit-learn: 
   :depends setuptools: 
   :depends swalign: 
   :depends tqdm: 
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

      mamba install muat

   and update with::

      mamba update muat

  To create a new environment, run::

      mamba create --name myenvname muat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/muat:<tag>

   (see `muat/tags`_ for valid values for ``<tag>``)


.. |downloads_muat| image:: https://img.shields.io/conda/dn/bioconda/muat.svg?style=flat
   :target: https://anaconda.org/bioconda/muat
   :alt:   (downloads)
.. |docker_muat| image:: https://quay.io/repository/biocontainers/muat/status
   :target: https://quay.io/repository/biocontainers/muat
.. _`muat/tags`: https://quay.io/repository/biocontainers/muat?tab=tags


.. raw:: html

    <script>
        var package = "muat";
        var versions = ["0.1.9","0.1.8","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/muat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/muat/README.html