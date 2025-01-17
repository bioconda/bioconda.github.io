:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qimba'
.. highlight: bash

qimba
=====

.. conda:recipe:: qimba
   :replaces_section_title:
   :noindex:

   Toolkit for metabarcoding analyses

   :homepage: https://github.com/quadram-institute-bioscience/qimba
   :license: MIT
   :recipe: /`qimba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qimba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qimba/meta.yaml>`_

   


.. conda:package:: qimba

   |downloads_qimba| |docker_qimba|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends cd-hit: ``>=4.8.1``
   :depends click: ``>=8.0``
   :depends configparser: 
   :depends cutadapt: ``>=3.5``
   :depends dnaio: ``>=1.1``
   :depends fastp: 
   :depends fasttree: ``>=2.0``
   :depends kraken2: 
   :depends mafft: ``>=7.0``
   :depends minimap2: ``>=2.1``
   :depends pandas: ``>=2.0.0``
   :depends python: ``>=3.9``
   :depends seqfu: ``>1.20``
   :depends usearch: 
   :depends xopen: ``>=2.0``
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

      mamba install qimba

   and update with::

      mamba update qimba

  To create a new environment, run::

      mamba create --name myenvname qimba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qimba:<tag>

   (see `qimba/tags`_ for valid values for ``<tag>``)


.. |downloads_qimba| image:: https://img.shields.io/conda/dn/bioconda/qimba.svg?style=flat
   :target: https://anaconda.org/bioconda/qimba
   :alt:   (downloads)
.. |docker_qimba| image:: https://quay.io/repository/biocontainers/qimba/status
   :target: https://quay.io/repository/biocontainers/qimba
.. _`qimba/tags`: https://quay.io/repository/biocontainers/qimba?tab=tags


.. raw:: html

    <script>
        var package = "qimba";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qimba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qimba/README.html