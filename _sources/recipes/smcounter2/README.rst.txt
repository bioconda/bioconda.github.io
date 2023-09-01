:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smcounter2'
.. highlight: bash

smcounter2
==========

.. conda:recipe:: smcounter2
   :replaces_section_title:
   :noindex:

   smCounter2\: an accurate low\-frequency variant caller for targeted sequencing data with unique molecular identifiers

   :homepage: https://github.com/qiaseq/qiaseq-smcounter-v2
   :license: MIT
   :recipe: /`smcounter2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcounter2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcounter2/meta.yaml>`_

   


.. conda:package:: smcounter2

   |downloads_smcounter2| |docker_smcounter2|

   :versions:
      
      

      ``0.1.2018.08.28-2``,  ``0.1.2018.08.28-1``,  ``0.1.2018.08.28-0``

      

   
   :depends bedtools: 
   :depends openpyxl: 
   :depends pysam: 
   :depends python: ``<3``
   :depends r-base: 
   :depends r-plyr: 
   :depends scipy: 
   :depends statistics: 
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

      mamba install smcounter2

   and update with::

      mamba update smcounter2

  To create a new environment, run::

      mamba create --name myenvname smcounter2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smcounter2:<tag>

   (see `smcounter2/tags`_ for valid values for ``<tag>``)


.. |downloads_smcounter2| image:: https://img.shields.io/conda/dn/bioconda/smcounter2.svg?style=flat
   :target: https://anaconda.org/bioconda/smcounter2
   :alt:   (downloads)
.. |docker_smcounter2| image:: https://quay.io/repository/biocontainers/smcounter2/status
   :target: https://quay.io/repository/biocontainers/smcounter2
.. _`smcounter2/tags`: https://quay.io/repository/biocontainers/smcounter2?tab=tags


.. raw:: html

    <script>
        var package = "smcounter2";
        var versions = ["0.1.2018.08.28","0.1.2018.08.28","0.1.2018.08.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smcounter2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smcounter2/README.html