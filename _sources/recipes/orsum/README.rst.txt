:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orsum'
.. highlight: bash

orsum
=====

.. conda:recipe:: orsum
   :replaces_section_title:
   :noindex:

   A tool to filter long lists of enriched terms resulting from one or more enrichment analyses

   :homepage: https://github.com/ozanozisik/orsum/
   :license: MIT / MIT
   :recipe: /`orsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orsum/meta.yaml>`_

   


.. conda:package:: orsum

   |downloads_orsum| |docker_orsum|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends matplotlib-base: ``>=3.3.0``
   :depends numpy: ``>=1.18.0``
   :depends pandas: ``>=1.2.0``
   :depends python: ``>=3.6``
   :depends scipy: ``>=1.9.0``
   :depends seaborn: ``>=0.11.0``
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

      mamba install orsum

   and update with::

      mamba update orsum

  To create a new environment, run::

      mamba create --name myenvname orsum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orsum:<tag>

   (see `orsum/tags`_ for valid values for ``<tag>``)


.. |downloads_orsum| image:: https://img.shields.io/conda/dn/bioconda/orsum.svg?style=flat
   :target: https://anaconda.org/bioconda/orsum
   :alt:   (downloads)
.. |docker_orsum| image:: https://quay.io/repository/biocontainers/orsum/status
   :target: https://quay.io/repository/biocontainers/orsum
.. _`orsum/tags`: https://quay.io/repository/biocontainers/orsum?tab=tags


.. raw:: html

    <script>
        var package = "orsum";
        var versions = ["1.6.0","1.5.0","1.4.0","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orsum/README.html