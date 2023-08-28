:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'examine'
.. highlight: bash

examine
=======

.. conda:recipe:: examine
   :replaces_section_title:
   :noindex:

   A graphical application to visually analyze network modules.

   :homepage: https://github.com/AlBi-HHU/eXamine-stand-alone
   :license: GPL / GPL-2.0
   :recipe: /`examine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/examine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/examine/meta.yaml>`_

   


.. conda:package:: examine

   |downloads_examine| |docker_examine|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends openjdk: 
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

      mamba install examine

   and update with::

      mamba update examine

  To create a new environment, run::

      mamba create --name myenvname examine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/examine:<tag>

   (see `examine/tags`_ for valid values for ``<tag>``)


.. |downloads_examine| image:: https://img.shields.io/conda/dn/bioconda/examine.svg?style=flat
   :target: https://anaconda.org/bioconda/examine
   :alt:   (downloads)
.. |docker_examine| image:: https://quay.io/repository/biocontainers/examine/status
   :target: https://quay.io/repository/biocontainers/examine
.. _`examine/tags`: https://quay.io/repository/biocontainers/examine?tab=tags


.. raw:: html

    <script>
        var package = "examine";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/examine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/examine/README.html