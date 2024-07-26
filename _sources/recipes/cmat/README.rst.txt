:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmat'
.. highlight: bash

cmat
====

.. conda:recipe:: cmat
   :replaces_section_title:
   :noindex:

   ClinVar Mapping and Annotation Toolkit

   :homepage: https://github.com/EBIvariation/CMAT
   :license: Apache-2.0
   :recipe: /`cmat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmat/meta.yaml>`_

   


.. conda:package:: cmat

   |downloads_cmat| |docker_cmat|

   :versions:
      
      

      ``3.2.2-0``,  ``3.2.1-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``

      

   
   :depends biopython: ``1.77``
   :depends coverage: ``6.5.0``
   :depends coveralls: ``3.3.1``
   :depends jsonschema: ``3.2.0``
   :depends nextflow: ``>=21.10.0``
   :depends numpy: ``1.24.3``
   :depends pandas: ``1.5.3``
   :depends pytest: ``7.2.2``
   :depends pytest-cov: ``2.10.0``
   :depends python: ``>=3.8,<3.10``
   :depends requests: ``2.32.3``
   :depends requests-mock: ``1.8.0``
   :depends retry: ``0.9.2``
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

      mamba install cmat

   and update with::

      mamba update cmat

  To create a new environment, run::

      mamba create --name myenvname cmat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmat:<tag>

   (see `cmat/tags`_ for valid values for ``<tag>``)


.. |downloads_cmat| image:: https://img.shields.io/conda/dn/bioconda/cmat.svg?style=flat
   :target: https://anaconda.org/bioconda/cmat
   :alt:   (downloads)
.. |docker_cmat| image:: https://quay.io/repository/biocontainers/cmat/status
   :target: https://quay.io/repository/biocontainers/cmat
.. _`cmat/tags`: https://quay.io/repository/biocontainers/cmat?tab=tags


.. raw:: html

    <script>
        var package = "cmat";
        var versions = ["3.2.2","3.2.1","3.1.3","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmat/README.html