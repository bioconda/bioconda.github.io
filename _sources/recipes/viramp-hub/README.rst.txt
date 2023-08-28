:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viramp-hub'
.. highlight: bash

viramp-hub
==========

.. conda:recipe:: viramp-hub
   :replaces_section_title:
   :noindex:

   VirAmp\-Hub lets you manipulate\/convert viral amplicon\/primer scheme information.

   :homepage: https://github.com/wm75/viramp-hub
   :license: MIT / MIT
   :recipe: /`viramp-hub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viramp-hub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viramp-hub/meta.yaml>`_

   


.. conda:package:: viramp-hub

   |downloads_viramp-hub| |docker_viramp-hub|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends python: ``>=3.6``
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

      mamba install viramp-hub

   and update with::

      mamba update viramp-hub

  To create a new environment, run::

      mamba create --name myenvname viramp-hub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viramp-hub:<tag>

   (see `viramp-hub/tags`_ for valid values for ``<tag>``)


.. |downloads_viramp-hub| image:: https://img.shields.io/conda/dn/bioconda/viramp-hub.svg?style=flat
   :target: https://anaconda.org/bioconda/viramp-hub
   :alt:   (downloads)
.. |docker_viramp-hub| image:: https://quay.io/repository/biocontainers/viramp-hub/status
   :target: https://quay.io/repository/biocontainers/viramp-hub
.. _`viramp-hub/tags`: https://quay.io/repository/biocontainers/viramp-hub?tab=tags


.. raw:: html

    <script>
        var package = "viramp-hub";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viramp-hub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viramp-hub/README.html