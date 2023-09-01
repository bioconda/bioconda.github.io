:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'targetscan'
.. highlight: bash

targetscan
==========

.. conda:recipe:: targetscan
   :replaces_section_title:
   :noindex:

   Search for predicted microRNA targets in mammals

   :homepage: https://www.targetscan.org/vert_80/
   :license: MIT
   :recipe: /`targetscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetscan/meta.yaml>`_

   


.. conda:package:: targetscan

   |downloads_targetscan| |docker_targetscan|

   :versions:
      
      

      ``7.0-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install targetscan

   and update with::

      mamba update targetscan

  To create a new environment, run::

      mamba create --name myenvname targetscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/targetscan:<tag>

   (see `targetscan/tags`_ for valid values for ``<tag>``)


.. |downloads_targetscan| image:: https://img.shields.io/conda/dn/bioconda/targetscan.svg?style=flat
   :target: https://anaconda.org/bioconda/targetscan
   :alt:   (downloads)
.. |docker_targetscan| image:: https://quay.io/repository/biocontainers/targetscan/status
   :target: https://quay.io/repository/biocontainers/targetscan
.. _`targetscan/tags`: https://quay.io/repository/biocontainers/targetscan?tab=tags


.. raw:: html

    <script>
        var package = "targetscan";
        var versions = ["7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targetscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targetscan/README.html