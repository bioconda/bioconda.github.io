:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qcat'
.. highlight: bash

qcat
====

.. conda:recipe:: qcat
   :replaces_section_title:
   :noindex:

   Qcat is Python command\-line tool for demultiplexing Oxford Nanopore reads from FASTQ files.

   :homepage: https://github.com/nanoporetech/qcat
   :license: Mozilla Public License Version 2.0
   :recipe: /`qcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcat/meta.yaml>`_

   


.. conda:package:: qcat

   |downloads_qcat| |docker_qcat|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.7-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends mappy: 
   :depends pandas: 
   :depends parasail-python: 
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
   :depends six: 
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

      mamba install qcat

   and update with::

      mamba update qcat

  To create a new environment, run::

      mamba create --name myenvname qcat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qcat:<tag>

   (see `qcat/tags`_ for valid values for ``<tag>``)


.. |downloads_qcat| image:: https://img.shields.io/conda/dn/bioconda/qcat.svg?style=flat
   :target: https://anaconda.org/bioconda/qcat
   :alt:   (downloads)
.. |docker_qcat| image:: https://quay.io/repository/biocontainers/qcat/status
   :target: https://quay.io/repository/biocontainers/qcat
.. _`qcat/tags`: https://quay.io/repository/biocontainers/qcat?tab=tags


.. raw:: html

    <script>
        var package = "qcat";
        var versions = ["1.1.0","1.1.0","1.0.7","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcat/README.html