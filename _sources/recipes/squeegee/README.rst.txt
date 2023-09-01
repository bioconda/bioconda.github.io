:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squeegee'
.. highlight: bash

squeegee
========

.. conda:recipe:: squeegee
   :replaces_section_title:
   :noindex:

   squeegee\, de novo computational contamination detection tool for metagenomic samples

   :homepage: https://gitlab.com/treangenlab/squeegee
   :license: MIT
   :recipe: /`squeegee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeegee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squeegee/meta.yaml>`_

   


.. conda:package:: squeegee

   |downloads_squeegee| |docker_squeegee|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends biopython: 
   :depends bowtie2: ``>=2.3.5``
   :depends kraken: ``>=1.1.1``
   :depends mash: ``>=2.2.2``
   :depends meryl: ``>=1.2``
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends samtools: ``>=1.11``
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

      mamba install squeegee

   and update with::

      mamba update squeegee

  To create a new environment, run::

      mamba create --name myenvname squeegee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/squeegee:<tag>

   (see `squeegee/tags`_ for valid values for ``<tag>``)


.. |downloads_squeegee| image:: https://img.shields.io/conda/dn/bioconda/squeegee.svg?style=flat
   :target: https://anaconda.org/bioconda/squeegee
   :alt:   (downloads)
.. |docker_squeegee| image:: https://quay.io/repository/biocontainers/squeegee/status
   :target: https://quay.io/repository/biocontainers/squeegee
.. _`squeegee/tags`: https://quay.io/repository/biocontainers/squeegee?tab=tags


.. raw:: html

    <script>
        var package = "squeegee";
        var versions = ["0.2.0","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squeegee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squeegee/README.html