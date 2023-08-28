:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qfilt'
.. highlight: bash

qfilt
=====

.. conda:recipe:: qfilt
   :replaces_section_title:
   :noindex:

   Filter sequencing data using some simple heuristics

   :homepage: https://github.com/veg/qfilt
   :license: MIT
   :recipe: /`qfilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qfilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qfilt/meta.yaml>`_

   


.. conda:package:: qfilt

   |downloads_qfilt| |docker_qfilt|

   :versions:
      
      

      ``0.0.1-6``,  ``0.0.1-5``,  ``0.0.1-4``,  ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install qfilt

   and update with::

      mamba update qfilt

  To create a new environment, run::

      mamba create --name myenvname qfilt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qfilt:<tag>

   (see `qfilt/tags`_ for valid values for ``<tag>``)


.. |downloads_qfilt| image:: https://img.shields.io/conda/dn/bioconda/qfilt.svg?style=flat
   :target: https://anaconda.org/bioconda/qfilt
   :alt:   (downloads)
.. |docker_qfilt| image:: https://quay.io/repository/biocontainers/qfilt/status
   :target: https://quay.io/repository/biocontainers/qfilt
.. _`qfilt/tags`: https://quay.io/repository/biocontainers/qfilt?tab=tags


.. raw:: html

    <script>
        var package = "qfilt";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qfilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qfilt/README.html