:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbmix'
.. highlight: bash

bbmix
=====

.. conda:recipe:: bbmix
   :replaces_section_title:
   :noindex:

   BBMix\: inference of beta\-binomial mixture model

   :homepage: https://github.com/statbiomed/betabinmix
   :license: APACHE / Apache-2.0
   :recipe: /`bbmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmix/meta.yaml>`_

   


.. conda:package:: bbmix

   |downloads_bbmix| |docker_bbmix|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.9.0``
   :depends python: ``>=3``
   :depends scipy: ``>=1.4.0``
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

      mamba install bbmix

   and update with::

      mamba update bbmix

  To create a new environment, run::

      mamba create --name myenvname bbmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bbmix:<tag>

   (see `bbmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bbmix| image:: https://img.shields.io/conda/dn/bioconda/bbmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bbmix
   :alt:   (downloads)
.. |docker_bbmix| image:: https://quay.io/repository/biocontainers/bbmix/status
   :target: https://quay.io/repository/biocontainers/bbmix
.. _`bbmix/tags`: https://quay.io/repository/biocontainers/bbmix?tab=tags


.. raw:: html

    <script>
        var package = "bbmix";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbmix/README.html