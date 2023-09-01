:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pipelign'
.. highlight: bash

pipelign
========

.. conda:recipe:: pipelign
   :replaces_section_title:
   :noindex:

   A pipeline for automated multiple sequence alignment\, particularly of viral sequences.

   :homepage: https://github.com/asmmhossain/pipelign/
   :license: MIT
   :recipe: /`pipelign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipelign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipelign/meta.yaml>`_

   


.. conda:package:: pipelign

   |downloads_pipelign| |docker_pipelign|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends biopython: 
   :depends cd-hit: 
   :depends ete3: 
   :depends hmmer: 
   :depends iqtree: 
   :depends joblib: 
   :depends mafft: 
   :depends parallel: 
   :depends python: ``>=3``
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

      mamba install pipelign

   and update with::

      mamba update pipelign

  To create a new environment, run::

      mamba create --name myenvname pipelign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pipelign:<tag>

   (see `pipelign/tags`_ for valid values for ``<tag>``)


.. |downloads_pipelign| image:: https://img.shields.io/conda/dn/bioconda/pipelign.svg?style=flat
   :target: https://anaconda.org/bioconda/pipelign
   :alt:   (downloads)
.. |docker_pipelign| image:: https://quay.io/repository/biocontainers/pipelign/status
   :target: https://quay.io/repository/biocontainers/pipelign
.. _`pipelign/tags`: https://quay.io/repository/biocontainers/pipelign?tab=tags


.. raw:: html

    <script>
        var package = "pipelign";
        var versions = ["0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipelign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipelign/README.html