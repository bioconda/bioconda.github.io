:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysais'
.. highlight: bash

pysais
======

.. conda:recipe:: pysais
   :replaces_section_title:
   :noindex:

   Suffix array computation with induced sorting algorithm.

   :homepage: https://bitbucket.org/alex-warwickvesztrocy/pysais
   :license: MIT
   :recipe: /`pysais <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysais>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysais/meta.yaml>`_

   


.. conda:package:: pysais

   |downloads_pysais| |docker_pysais|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pytables: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pysais

   and update with::

      mamba update pysais

  To create a new environment, run::

      mamba create --name myenvname pysais

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pysais:<tag>

   (see `pysais/tags`_ for valid values for ``<tag>``)


.. |downloads_pysais| image:: https://img.shields.io/conda/dn/bioconda/pysais.svg?style=flat
   :target: https://anaconda.org/bioconda/pysais
   :alt:   (downloads)
.. |docker_pysais| image:: https://quay.io/repository/biocontainers/pysais/status
   :target: https://quay.io/repository/biocontainers/pysais
.. _`pysais/tags`: https://quay.io/repository/biocontainers/pysais?tab=tags


.. raw:: html

    <script>
        var package = "pysais";
        var versions = ["1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysais/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysais/README.html