:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tinyalign'
.. highlight: bash

tinyalign
=========

.. conda:recipe:: tinyalign
   :replaces_section_title:
   :noindex:

   A small Python module providing edit distance and Hamming distance computation.

   :homepage: https://github.com/marcelm/tinyalign/
   :license: MIT License
   :recipe: /`tinyalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinyalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinyalign/meta.yaml>`_

   


.. conda:package:: tinyalign

   |downloads_tinyalign| |docker_tinyalign|

   :versions:
      
      

      ``0.2.1-5``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install tinyalign

   and update with::

      mamba update tinyalign

  To create a new environment, run::

      mamba create --name myenvname tinyalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tinyalign:<tag>

   (see `tinyalign/tags`_ for valid values for ``<tag>``)


.. |downloads_tinyalign| image:: https://img.shields.io/conda/dn/bioconda/tinyalign.svg?style=flat
   :target: https://anaconda.org/bioconda/tinyalign
   :alt:   (downloads)
.. |docker_tinyalign| image:: https://quay.io/repository/biocontainers/tinyalign/status
   :target: https://quay.io/repository/biocontainers/tinyalign
.. _`tinyalign/tags`: https://quay.io/repository/biocontainers/tinyalign?tab=tags


.. raw:: html

    <script>
        var package = "tinyalign";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinyalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinyalign/README.html