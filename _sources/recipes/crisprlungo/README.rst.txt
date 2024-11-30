:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprlungo'
.. highlight: bash

crisprlungo
===========

.. conda:recipe:: crisprlungo
   :replaces_section_title:
   :noindex:

   A software pipeline for analyzing single\-anchor amplicon sequencing and quantifying complex genome editing outcomes

   :homepage: https://github.com/pinellolab/CRISPRlungo
   :license: Partners
   :recipe: /`crisprlungo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprlungo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprlungo/meta.yaml>`_

   


.. conda:package:: crisprlungo

   |downloads_crisprlungo| |docker_crisprlungo|

   :versions:
      
      

      ``0.1.14-0``

      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends cas-offinder: 
   :depends crispresso2: 
   :depends cutadapt: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>3``
   :depends samtools: ``>=1.17``
   :depends scipy: 
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

      mamba install crisprlungo

   and update with::

      mamba update crisprlungo

  To create a new environment, run::

      mamba create --name myenvname crisprlungo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crisprlungo:<tag>

   (see `crisprlungo/tags`_ for valid values for ``<tag>``)


.. |downloads_crisprlungo| image:: https://img.shields.io/conda/dn/bioconda/crisprlungo.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprlungo
   :alt:   (downloads)
.. |docker_crisprlungo| image:: https://quay.io/repository/biocontainers/crisprlungo/status
   :target: https://quay.io/repository/biocontainers/crisprlungo
.. _`crisprlungo/tags`: https://quay.io/repository/biocontainers/crisprlungo?tab=tags


.. raw:: html

    <script>
        var package = "crisprlungo";
        var versions = ["0.1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprlungo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprlungo/README.html