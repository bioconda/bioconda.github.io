:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'relocate2'
.. highlight: bash

relocate2
=========

.. conda:recipe:: relocate2
   :replaces_section_title:
   :noindex:

   a high resolution transposable element insertion sites mapping tool for population resequencing

   :homepage: https://github.com/stajichlab/RelocaTE2
   :license: unknown
   :recipe: /`relocate2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relocate2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relocate2/meta.yaml>`_

   


.. conda:package:: relocate2

   |downloads_relocate2| |docker_relocate2|

   :versions:
      
      

      ``2.0.1-6``,  ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-2``,  ``2.0.1-0``,  ``2.0.0-1``

      

   
   :depends bedtools: ``2.26.0-0``
   :depends blat: ``35``
   :depends bowtie2: ``2.2.8``
   :depends bwa: ``0.6.2-0``
   :depends perl: ``>=5.10.0``
   :depends pysam: ``0.9.0``
   :depends python: ``2.7.12``
   :depends samtools: ``1.3-0``
   :depends seqtk: ``1.2-0``
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

      mamba install relocate2

   and update with::

      mamba update relocate2

  To create a new environment, run::

      mamba create --name myenvname relocate2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/relocate2:<tag>

   (see `relocate2/tags`_ for valid values for ``<tag>``)


.. |downloads_relocate2| image:: https://img.shields.io/conda/dn/bioconda/relocate2.svg?style=flat
   :target: https://anaconda.org/bioconda/relocate2
   :alt:   (downloads)
.. |docker_relocate2| image:: https://quay.io/repository/biocontainers/relocate2/status
   :target: https://quay.io/repository/biocontainers/relocate2
.. _`relocate2/tags`: https://quay.io/repository/biocontainers/relocate2?tab=tags


.. raw:: html

    <script>
        var package = "relocate2";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/relocate2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/relocate2/README.html