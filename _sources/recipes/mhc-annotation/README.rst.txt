:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhc-annotation'
.. highlight: bash

mhc-annotation
==============

.. conda:recipe:: mhc-annotation
   :replaces_section_title:
   :noindex:

   Tools to annotate haplotypes of MHC with gene and transcript information

   :homepage: https://github.com/DiltheyLab/MHC-annotation
   :license: MIT / MIT
   :recipe: /`mhc-annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhc-annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhc-annotation/meta.yaml>`_

   


.. conda:package:: mhc-annotation

   |downloads_mhc-annotation| |docker_mhc-annotation|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends minimap2: 
   :depends python: ``>=3.7``
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

      mamba install mhc-annotation

   and update with::

      mamba update mhc-annotation

  To create a new environment, run::

      mamba create --name myenvname mhc-annotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mhc-annotation:<tag>

   (see `mhc-annotation/tags`_ for valid values for ``<tag>``)


.. |downloads_mhc-annotation| image:: https://img.shields.io/conda/dn/bioconda/mhc-annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/mhc-annotation
   :alt:   (downloads)
.. |docker_mhc-annotation| image:: https://quay.io/repository/biocontainers/mhc-annotation/status
   :target: https://quay.io/repository/biocontainers/mhc-annotation
.. _`mhc-annotation/tags`: https://quay.io/repository/biocontainers/mhc-annotation?tab=tags


.. raw:: html

    <script>
        var package = "mhc-annotation";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhc-annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhc-annotation/README.html