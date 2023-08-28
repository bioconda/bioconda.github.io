:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'toolshed'
.. highlight: bash

toolshed
========

.. conda:recipe:: toolshed
   :replaces_section_title:
   :noindex:

   flexible and easy file manipulation

   :homepage: https://github.com/brentp/toolshed
   :license: MIT License
   :recipe: /`toolshed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toolshed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toolshed/meta.yaml>`_

   


.. conda:package:: toolshed

   |downloads_toolshed| |docker_toolshed|

   :versions:
      
      

      ``0.4.6-3``,  ``0.4.6-2``,  ``0.4.6-1``,  ``0.4.6-0``

      

   
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

      mamba install toolshed

   and update with::

      mamba update toolshed

  To create a new environment, run::

      mamba create --name myenvname toolshed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/toolshed:<tag>

   (see `toolshed/tags`_ for valid values for ``<tag>``)


.. |downloads_toolshed| image:: https://img.shields.io/conda/dn/bioconda/toolshed.svg?style=flat
   :target: https://anaconda.org/bioconda/toolshed
   :alt:   (downloads)
.. |docker_toolshed| image:: https://quay.io/repository/biocontainers/toolshed/status
   :target: https://quay.io/repository/biocontainers/toolshed
.. _`toolshed/tags`: https://quay.io/repository/biocontainers/toolshed?tab=tags


.. raw:: html

    <script>
        var package = "toolshed";
        var versions = ["0.4.6","0.4.6","0.4.6","0.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toolshed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toolshed/README.html