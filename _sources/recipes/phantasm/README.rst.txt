:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phantasm'
.. highlight: bash

phantasm
========

.. conda:recipe:: phantasm
   :replaces_section_title:
   :noindex:

   PHANTASM\: PHylogenomic ANalyses for the TAxonomy and Systematics of Microbes

   :homepage: https://github.com/dr-joe-wirth/phantasm
   :license: GPL3 / MIT
   :recipe: /`phantasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantasm/meta.yaml>`_

   


.. conda:package:: phantasm

   |downloads_phantasm| |docker_phantasm|

   :versions:
      
      

      ``1.1.3-0``

      

   
   :depends bioconductor-decipher: 
   :depends biopython: 
   :depends blast: 
   :depends fasttree: 
   :depends iqtree: ``>=1.6.12``
   :depends muscle: ``>=5``
   :depends numpy: 
   :depends parasail-python: 
   :depends phantasm-xenogi: 
   :depends pyani: 
   :depends python: ``>=3.9``
   :depends r-ape: 
   :depends r-base: 
   :depends r-dendextend: 
   :depends r-gplots: 
   :depends rpy2: 
   :depends scipy: 
   :depends semver: 
   :depends textdistance: 
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

      mamba install phantasm

   and update with::

      mamba update phantasm

  To create a new environment, run::

      mamba create --name myenvname phantasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phantasm:<tag>

   (see `phantasm/tags`_ for valid values for ``<tag>``)


.. |downloads_phantasm| image:: https://img.shields.io/conda/dn/bioconda/phantasm.svg?style=flat
   :target: https://anaconda.org/bioconda/phantasm
   :alt:   (downloads)
.. |docker_phantasm| image:: https://quay.io/repository/biocontainers/phantasm/status
   :target: https://quay.io/repository/biocontainers/phantasm
.. _`phantasm/tags`: https://quay.io/repository/biocontainers/phantasm?tab=tags


.. raw:: html

    <script>
        var package = "phantasm";
        var versions = ["1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phantasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phantasm/README.html