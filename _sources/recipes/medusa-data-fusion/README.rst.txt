:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medusa-data-fusion'
.. highlight: bash

medusa-data-fusion
==================

.. conda:recipe:: medusa-data-fusion
   :replaces_section_title:
   :noindex:

   Medusa is an approach to detect size\-k modules of objects that\, taken together\,
   appear most significant to another set of objects. It builds on collective
   matrix factorization to derive different semantics\, and it formulates the
   growing of the modules as a submodular optimization program.


   :homepage: https://github.com/marinkaz/medusa
   :license: GPLv3
   :recipe: /`medusa-data-fusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa-data-fusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa-data-fusion/meta.yaml>`_

   


.. conda:package:: medusa-data-fusion

   |downloads_medusa-data-fusion| |docker_medusa-data-fusion|

   :versions:
      
      

      ``0.1-3``,  ``0.1-2``,  ``0.1-0``

      

   
   :depends numpy: 
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install medusa-data-fusion

   and update with::

      mamba update medusa-data-fusion

  To create a new environment, run::

      mamba create --name myenvname medusa-data-fusion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/medusa-data-fusion:<tag>

   (see `medusa-data-fusion/tags`_ for valid values for ``<tag>``)


.. |downloads_medusa-data-fusion| image:: https://img.shields.io/conda/dn/bioconda/medusa-data-fusion.svg?style=flat
   :target: https://anaconda.org/bioconda/medusa-data-fusion
   :alt:   (downloads)
.. |docker_medusa-data-fusion| image:: https://quay.io/repository/biocontainers/medusa-data-fusion/status
   :target: https://quay.io/repository/biocontainers/medusa-data-fusion
.. _`medusa-data-fusion/tags`: https://quay.io/repository/biocontainers/medusa-data-fusion?tab=tags


.. raw:: html

    <script>
        var package = "medusa-data-fusion";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medusa-data-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medusa-data-fusion/README.html