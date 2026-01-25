:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aoptk'
.. highlight: bash

aoptk
=====

.. conda:recipe:: aoptk
   :replaces_section_title:
   :noindex:

   Tools to support data mining for the development of \(q\)AOPs

   :homepage: https://github.com/rdurnik/aoptk
   :license: MIT
   :recipe: /`aoptk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aoptk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aoptk/meta.yaml>`_

   


.. conda:package:: aoptk

   |downloads_aoptk| |docker_aoptk|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends beautifulsoup4: 
   :depends biopython: 
   :depends click: ``>=8.1``
   :depends huggingface_hub: ``>=0.1.0,<1.0``
   :depends metapub: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pymupdf: 
   :depends python: 
   :depends pytorch: 
   :depends requests: 
   :depends scispacy: 
   :depends spacy: ``>=3.0.0,<3.8.0``
   :depends spacy-transformers: 
   :depends transformers: 
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

      mamba install aoptk

   and update with::

      mamba update aoptk

  To create a new environment, run::

      mamba create --name myenvname aoptk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aoptk:<tag>

   (see `aoptk/tags`_ for valid values for ``<tag>``)


.. |downloads_aoptk| image:: https://img.shields.io/conda/dn/bioconda/aoptk.svg?style=flat
   :target: https://anaconda.org/bioconda/aoptk
   :alt:   (downloads)
.. |docker_aoptk| image:: https://quay.io/repository/biocontainers/aoptk/status
   :target: https://quay.io/repository/biocontainers/aoptk
.. _`aoptk/tags`: https://quay.io/repository/biocontainers/aoptk?tab=tags


.. raw:: html

    <script>
        var package = "aoptk";
        var versions = ["0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aoptk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aoptk/README.html