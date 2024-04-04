:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phava'
.. highlight: bash

phava
=====

.. conda:recipe:: phava
   :replaces_section_title:
   :noindex:

   Detection of invertons from long\-read sequencing datasets

   :homepage: https://github.com/patrickwest/PhaVa
   :license: MIT / MIT
   :recipe: /`phava <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phava>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phava/meta.yaml>`_

   


.. conda:package:: phava

   |downloads_phava| |docker_phava|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends biopython: ``>=1.81``
   :depends emboss: ``>=6.5.7``
   :depends minimap2: ``>=2.17``
   :depends mmseqs2: 
   :depends pysam: ``>=0.17.0``
   :depends python: ``>=3.9``
   :depends samtools: 
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

      mamba install phava

   and update with::

      mamba update phava

  To create a new environment, run::

      mamba create --name myenvname phava

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phava:<tag>

   (see `phava/tags`_ for valid values for ``<tag>``)


.. |downloads_phava| image:: https://img.shields.io/conda/dn/bioconda/phava.svg?style=flat
   :target: https://anaconda.org/bioconda/phava
   :alt:   (downloads)
.. |docker_phava| image:: https://quay.io/repository/biocontainers/phava/status
   :target: https://quay.io/repository/biocontainers/phava
.. _`phava/tags`: https://quay.io/repository/biocontainers/phava?tab=tags


.. raw:: html

    <script>
        var package = "phava";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phava/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phava/README.html