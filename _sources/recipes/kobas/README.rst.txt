:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kobas'
.. highlight: bash

kobas
=====

.. conda:recipe:: kobas
   :replaces_section_title:
   :noindex:

   KEGG Orthology Based Annotation System

   :homepage: http://kobas.cbi.pku.edu.cn
   :license: Biopython License Agreement
   :recipe: /`kobas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kobas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kobas/meta.yaml>`_
   :links: biotools: :biotools:`kobas`

   


.. conda:package:: kobas

   |downloads_kobas| |docker_kobas|

   :versions:
      
      

      ``3.0.3-3``,  ``3.0.3-2``,  ``3.0.3-1``,  ``3.0.3-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends bioconductor-qvalue: 
   :depends biopython: 
   :depends blast: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``<3``
   :depends r-base: 
   :depends rpy2: ``>=2.8.5``
   :depends sqlite: ``>=3.30.1,<4.0a0``
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

      mamba install kobas

   and update with::

      mamba update kobas

  To create a new environment, run::

      mamba create --name myenvname kobas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kobas:<tag>

   (see `kobas/tags`_ for valid values for ``<tag>``)


.. |downloads_kobas| image:: https://img.shields.io/conda/dn/bioconda/kobas.svg?style=flat
   :target: https://anaconda.org/bioconda/kobas
   :alt:   (downloads)
.. |docker_kobas| image:: https://quay.io/repository/biocontainers/kobas/status
   :target: https://quay.io/repository/biocontainers/kobas
.. _`kobas/tags`: https://quay.io/repository/biocontainers/kobas?tab=tags


.. raw:: html

    <script>
        var package = "kobas";
        var versions = ["3.0.3","3.0.3","3.0.3","3.0.3","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kobas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kobas/README.html