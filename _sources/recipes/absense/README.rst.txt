:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'absense'
.. highlight: bash

absense
=======

.. conda:recipe:: absense
   :replaces_section_title:
   :noindex:

   abSENSE\: a method to interpret undetected homologs

   :homepage: https://github.com/caraweisman/abSENSE
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`absense <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/absense>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/absense/meta.yaml>`_

   


.. conda:package:: absense

   |downloads_absense| |docker_absense|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends dill: ``>=0.3.9``
   :depends matplotlib-base: ``>=3.0.0``
   :depends python: ``>=3.8,<3.9``
   :depends scipy: ``1.7.3.*``
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

      mamba install absense

   and update with::

      mamba update absense

  To create a new environment, run::

      mamba create --name myenvname absense

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/absense:<tag>

   (see `absense/tags`_ for valid values for ``<tag>``)


.. |downloads_absense| image:: https://img.shields.io/conda/dn/bioconda/absense.svg?style=flat
   :target: https://anaconda.org/bioconda/absense
   :alt:   (downloads)
.. |docker_absense| image:: https://quay.io/repository/biocontainers/absense/status
   :target: https://quay.io/repository/biocontainers/absense
.. _`absense/tags`: https://quay.io/repository/biocontainers/absense?tab=tags


.. raw:: html

    <script>
        var package = "absense";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/absense/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/absense/README.html