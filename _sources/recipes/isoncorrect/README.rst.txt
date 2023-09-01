:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoncorrect'
.. highlight: bash

isoncorrect
===========

.. conda:recipe:: isoncorrect
   :replaces_section_title:
   :noindex:

   De novo error\-correction of long\-read transcriptome reads.

   :homepage: https://github.com/ksahlin/isONcorrect
   :license: GPL / GPL-3.0
   :recipe: /`isoncorrect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoncorrect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoncorrect/meta.yaml>`_

   


.. conda:package:: isoncorrect

   |downloads_isoncorrect| |docker_isoncorrect|

   :versions:
      
      

      ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends numpy: ``>=1.16.2``
   :depends python: ``>=3``
   :depends python-edlib: ``>=1.1.2``
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

      mamba install isoncorrect

   and update with::

      mamba update isoncorrect

  To create a new environment, run::

      mamba create --name myenvname isoncorrect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isoncorrect:<tag>

   (see `isoncorrect/tags`_ for valid values for ``<tag>``)


.. |downloads_isoncorrect| image:: https://img.shields.io/conda/dn/bioconda/isoncorrect.svg?style=flat
   :target: https://anaconda.org/bioconda/isoncorrect
   :alt:   (downloads)
.. |docker_isoncorrect| image:: https://quay.io/repository/biocontainers/isoncorrect/status
   :target: https://quay.io/repository/biocontainers/isoncorrect
.. _`isoncorrect/tags`: https://quay.io/repository/biocontainers/isoncorrect?tab=tags


.. raw:: html

    <script>
        var package = "isoncorrect";
        var versions = ["0.0.8","0.0.7","0.0.6","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoncorrect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoncorrect/README.html