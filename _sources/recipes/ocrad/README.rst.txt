:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ocrad'
.. highlight: bash

ocrad
=====

.. conda:recipe:: ocrad/0.21
   :replaces_section_title:
   :noindex:

   Ocrad is an optical character recognition program.

   :homepage: https://www.gnu.org/software/ocrad/
   :license: GPL
   :recipe: /`ocrad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ocrad>`_/`0.21 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ocrad/0.21>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ocrad/0.21/meta.yaml>`_

   


.. conda:package:: ocrad

   |downloads_ocrad| |docker_ocrad|

   :versions:
      
      

      ``0.21-1``,  ``0.21-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ocrad

   and update with::

      mamba update ocrad

  To create a new environment, run::

      mamba create --name myenvname ocrad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ocrad:<tag>

   (see `ocrad/tags`_ for valid values for ``<tag>``)


.. |downloads_ocrad| image:: https://img.shields.io/conda/dn/bioconda/ocrad.svg?style=flat
   :target: https://anaconda.org/bioconda/ocrad
   :alt:   (downloads)
.. |docker_ocrad| image:: https://quay.io/repository/biocontainers/ocrad/status
   :target: https://quay.io/repository/biocontainers/ocrad
.. _`ocrad/tags`: https://quay.io/repository/biocontainers/ocrad?tab=tags


.. raw:: html

    <script>
        var package = "ocrad";
        var versions = ["0.21","0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ocrad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ocrad/README.html