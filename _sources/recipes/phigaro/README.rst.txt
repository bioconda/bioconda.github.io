:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phigaro'
.. highlight: bash

phigaro
=======

.. conda:recipe:: phigaro
   :replaces_section_title:
   :noindex:

   Phigaro is a scalable command\-line tool for predicting phages and prophages.

   :homepage: https://phigaro.readthedocs.io/
   :license: MIT / MIT
   :recipe: /`phigaro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phigaro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phigaro/meta.yaml>`_

   Phigaro is a standalone command\-line application that is able to detect prophage regions taking raw genome and metagenome assemblies as an input. It also produces dynamic annotated “prophage genome maps” and marks possible transposon insertion spots inside prophages. It is applicable for mining prophage regions from large metagenomic datasets.


.. conda:package:: phigaro

   |downloads_phigaro| |docker_phigaro|

   :versions:
      
      

      ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.6-0``

      

   
   :depends argparse: 
   :depends beautifulsoup4: ``>=4.4.0``
   :depends biopython: 
   :depends bs4: 
   :depends future: 
   :depends hmmer: 
   :depends lxml: 
   :depends numpy: 
   :depends pandas: ``>=0.23.4``
   :depends plotly: 
   :depends prodigal: 
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=5.1``
   :depends sh: 
   :depends six: ``>=1.7.0``
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

      mamba install phigaro

   and update with::

      mamba update phigaro

  To create a new environment, run::

      mamba create --name myenvname phigaro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phigaro:<tag>

   (see `phigaro/tags`_ for valid values for ``<tag>``)


.. |downloads_phigaro| image:: https://img.shields.io/conda/dn/bioconda/phigaro.svg?style=flat
   :target: https://anaconda.org/bioconda/phigaro
   :alt:   (downloads)
.. |docker_phigaro| image:: https://quay.io/repository/biocontainers/phigaro/status
   :target: https://quay.io/repository/biocontainers/phigaro
.. _`phigaro/tags`: https://quay.io/repository/biocontainers/phigaro?tab=tags


.. raw:: html

    <script>
        var package = "phigaro";
        var versions = ["2.3.0","2.3.0","2.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phigaro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phigaro/README.html