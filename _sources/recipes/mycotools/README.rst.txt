:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mycotools'
.. highlight: bash

mycotools
=========

.. conda:recipe:: mycotools
   :replaces_section_title:
   :noindex:

   Comparative genomics automation and standardization software

   :homepage: https://github.com/xonq/mycotools
   :license: BSD-3-Clause
   :recipe: /`mycotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mycotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mycotools/meta.yaml>`_

   


.. conda:package:: mycotools

   |downloads_mycotools| |docker_mycotools|

   :versions:
      
      

      ``0.31.36-0``,  ``0.31.35-0``,  ``0.31.34-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends cryptography: 
   :depends diamond: 
   :depends ete3: 
   :depends fasttree: 
   :depends hmmer: 
   :depends iqtree: 
   :depends mafft: 
   :depends mmseqs2: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.0,<4.0``
   :depends requests: 
   :depends scipy: 
   :depends tqdm: 
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

      mamba install mycotools

   and update with::

      mamba update mycotools

  To create a new environment, run::

      mamba create --name myenvname mycotools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mycotools:<tag>

   (see `mycotools/tags`_ for valid values for ``<tag>``)


.. |downloads_mycotools| image:: https://img.shields.io/conda/dn/bioconda/mycotools.svg?style=flat
   :target: https://anaconda.org/bioconda/mycotools
   :alt:   (downloads)
.. |docker_mycotools| image:: https://quay.io/repository/biocontainers/mycotools/status
   :target: https://quay.io/repository/biocontainers/mycotools
.. _`mycotools/tags`: https://quay.io/repository/biocontainers/mycotools?tab=tags


.. raw:: html

    <script>
        var package = "mycotools";
        var versions = ["0.31.36","0.31.35","0.31.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mycotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mycotools/README.html