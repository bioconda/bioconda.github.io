:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probeit'
.. highlight: bash

probeit
=======

.. conda:recipe:: probeit
   :replaces_section_title:
   :noindex:

   Probeit\: a probe designer for detecting and genotyping pathogen\!\!\!

   :homepage: https://github.com/steineggerlab/probeit
   :license: AGPL-3.0
   :recipe: /`probeit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probeit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probeit/meta.yaml>`_

   


.. conda:package:: probeit

   |downloads_probeit| |docker_probeit|

   :versions:
      
      

      ``2.2-2``,  ``2.2-1``,  ``2.2-0``,  ``2.0-0``,  ``v1.9-1``,  ``v1.9-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends genmap: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends mmseqs2: ``>=13.45111``
   :depends numpy: 
   :depends pandas: 
   :depends primer3-py: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends seqkit: 
   :depends setuptools: 
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

      mamba install probeit

   and update with::

      mamba update probeit

  To create a new environment, run::

      mamba create --name myenvname probeit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/probeit:<tag>

   (see `probeit/tags`_ for valid values for ``<tag>``)


.. |downloads_probeit| image:: https://img.shields.io/conda/dn/bioconda/probeit.svg?style=flat
   :target: https://anaconda.org/bioconda/probeit
   :alt:   (downloads)
.. |docker_probeit| image:: https://quay.io/repository/biocontainers/probeit/status
   :target: https://quay.io/repository/biocontainers/probeit
.. _`probeit/tags`: https://quay.io/repository/biocontainers/probeit?tab=tags


.. raw:: html

    <script>
        var package = "probeit";
        var versions = ["2.2","2.2","2.2","2.0","v1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probeit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probeit/README.html