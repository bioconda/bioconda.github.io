:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srahunter'
.. highlight: bash

srahunter
=========

.. conda:recipe:: srahunter
   :replaces_section_title:
   :noindex:

   srahunter is a tool for processing SRA accession numbers.

   :homepage: https://github.com/GitEnricoNeko/srahunter
   :license: MIT
   :recipe: /`srahunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srahunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srahunter/meta.yaml>`_

   


.. conda:package:: srahunter

   |downloads_srahunter| |docker_srahunter|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends datavzrd: 
   :depends entrez-direct: 
   :depends pandas: ``>=2.0.2``
   :depends psutil: ``>=5.7``
   :depends pyfiglet: 
   :depends python: ``>=3.6``
   :depends requests: ``>=2.31.0``
   :depends sra-tools: 
   :depends tqdm: ``>=4.66.1``
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

      mamba install srahunter

   and update with::

      mamba update srahunter

  To create a new environment, run::

      mamba create --name myenvname srahunter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/srahunter:<tag>

   (see `srahunter/tags`_ for valid values for ``<tag>``)


.. |downloads_srahunter| image:: https://img.shields.io/conda/dn/bioconda/srahunter.svg?style=flat
   :target: https://anaconda.org/bioconda/srahunter
   :alt:   (downloads)
.. |docker_srahunter| image:: https://quay.io/repository/biocontainers/srahunter/status
   :target: https://quay.io/repository/biocontainers/srahunter
.. _`srahunter/tags`: https://quay.io/repository/biocontainers/srahunter?tab=tags


.. raw:: html

    <script>
        var package = "srahunter";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srahunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srahunter/README.html