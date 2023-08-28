:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baltic'
.. highlight: bash

baltic
======

.. conda:recipe:: baltic
   :replaces_section_title:
   :noindex:

   Lightweight package for analyzing\, manipulating and visualizing annotated phylogenetic trees

   :homepage: https://github.com/evogytis/baltic
   :license: GPL3 / GPL-3.0
   :recipe: /`baltic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baltic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baltic/meta.yaml>`_

   


.. conda:package:: baltic

   |downloads_baltic| |docker_baltic|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.8-0``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends matplotlib-base: ``>=2.0.0``
   :depends numpy: ``>=1.16``
   :depends python: 
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

      mamba install baltic

   and update with::

      mamba update baltic

  To create a new environment, run::

      mamba create --name myenvname baltic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/baltic:<tag>

   (see `baltic/tags`_ for valid values for ``<tag>``)


.. |downloads_baltic| image:: https://img.shields.io/conda/dn/bioconda/baltic.svg?style=flat
   :target: https://anaconda.org/bioconda/baltic
   :alt:   (downloads)
.. |docker_baltic| image:: https://quay.io/repository/biocontainers/baltic/status
   :target: https://quay.io/repository/biocontainers/baltic
.. _`baltic/tags`: https://quay.io/repository/biocontainers/baltic?tab=tags


.. raw:: html

    <script>
        var package = "baltic";
        var versions = ["0.2.2","0.2.1","0.1.8","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baltic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baltic/README.html