:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srst2'
.. highlight: bash

srst2
=====

.. conda:recipe:: srst2
   :replaces_section_title:
   :noindex:

   Short Read Sequence Typing for Bacterial Pathogens

   :homepage: https://github.com/katholt/srst2
   :license: BSD
   :recipe: /`srst2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srst2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srst2/meta.yaml>`_

   


.. conda:package:: srst2

   |downloads_srst2| |docker_srst2|

   :versions:
      
      

      ``0.2.0-4``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.4.6-1``,  ``0.1.4.6-0``

      

   
   :depends bowtie2: ``<=2.2.9``
   :depends numpy: ``>=1.7.1``
   :depends python: ``<3``
   :depends samtools: ``0.1.18``
   :depends scipy: ``>=0.12.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install srst2

   and update with::

      mamba update srst2

  To create a new environment, run::

      mamba create --name myenvname srst2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/srst2:<tag>

   (see `srst2/tags`_ for valid values for ``<tag>``)


.. |downloads_srst2| image:: https://img.shields.io/conda/dn/bioconda/srst2.svg?style=flat
   :target: https://anaconda.org/bioconda/srst2
   :alt:   (downloads)
.. |docker_srst2| image:: https://quay.io/repository/biocontainers/srst2/status
   :target: https://quay.io/repository/biocontainers/srst2
.. _`srst2/tags`: https://quay.io/repository/biocontainers/srst2?tab=tags


.. raw:: html

    <script>
        var package = "srst2";
        var versions = ["0.2.0","0.2.0","0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srst2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srst2/README.html