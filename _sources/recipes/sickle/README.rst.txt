:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sickle'
.. highlight: bash

sickle
======

.. conda:recipe:: sickle
   :replaces_section_title:
   :noindex:

   A lightweight OAI client library for Python

   :homepage: http://github.com/mloesch/sickle
   :license: BSD / BSD License
   :recipe: /`sickle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sickle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sickle/meta.yaml>`_

   


.. conda:package:: sickle

   |downloads_sickle| |docker_sickle|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.3-2``,  ``0.6.3-0``,  ``0.5-0``

      

   
   :depends lxml: ``>=3.2.3``
   :depends python: 
   :depends requests: ``>=1.1.0``
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

      mamba install sickle

   and update with::

      mamba update sickle

  To create a new environment, run::

      mamba create --name myenvname sickle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sickle:<tag>

   (see `sickle/tags`_ for valid values for ``<tag>``)


.. |downloads_sickle| image:: https://img.shields.io/conda/dn/bioconda/sickle.svg?style=flat
   :target: https://anaconda.org/bioconda/sickle
   :alt:   (downloads)
.. |docker_sickle| image:: https://quay.io/repository/biocontainers/sickle/status
   :target: https://quay.io/repository/biocontainers/sickle
.. _`sickle/tags`: https://quay.io/repository/biocontainers/sickle?tab=tags


.. raw:: html

    <script>
        var package = "sickle";
        var versions = ["0.7.0","0.6.5","0.6.4","0.6.4","0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sickle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sickle/README.html