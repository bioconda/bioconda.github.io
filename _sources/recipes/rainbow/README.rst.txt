:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rainbow'
.. highlight: bash

rainbow
=======

.. conda:recipe:: rainbow
   :replaces_section_title:
   :noindex:

   Efficient tool for clustering and assembling short reads\, especially for RAD

   :homepage: https://sourceforge.net/projects/bio-rainbow/
   :license: GNU General Public License version 2.0 (GPLv2)
   :recipe: /`rainbow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rainbow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rainbow/meta.yaml>`_

   


.. conda:package:: rainbow

   |downloads_rainbow| |docker_rainbow|

   :versions:
      
      

      ``2.0.4-9``,  ``2.0.4-8``,  ``2.0.4-7``,  ``2.0.4-6``,  ``2.0.4-5``,  ``2.0.4-4``,  ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: 
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

      mamba install rainbow

   and update with::

      mamba update rainbow

  To create a new environment, run::

      mamba create --name myenvname rainbow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rainbow:<tag>

   (see `rainbow/tags`_ for valid values for ``<tag>``)


.. |downloads_rainbow| image:: https://img.shields.io/conda/dn/bioconda/rainbow.svg?style=flat
   :target: https://anaconda.org/bioconda/rainbow
   :alt:   (downloads)
.. |docker_rainbow| image:: https://quay.io/repository/biocontainers/rainbow/status
   :target: https://quay.io/repository/biocontainers/rainbow
.. _`rainbow/tags`: https://quay.io/repository/biocontainers/rainbow?tab=tags


.. raw:: html

    <script>
        var package = "rainbow";
        var versions = ["2.0.4","2.0.4","2.0.4","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rainbow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rainbow/README.html