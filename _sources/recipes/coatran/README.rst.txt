:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coatran'
.. highlight: bash

coatran
=======

.. conda:recipe:: coatran
   :replaces_section_title:
   :noindex:

   CoaTran\: Coalescent tree simulation along a transmission network

   :homepage: https://github.com/niemasd/CoaTran
   :license: GPL / GPLv3
   :recipe: /`coatran <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coatran>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coatran/meta.yaml>`_
   :links: biotools: :biotools:`coatran`

   


.. conda:package:: coatran

   |downloads_coatran| |docker_coatran|

   :versions:
      
      

      ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install coatran

   and update with::

      mamba update coatran

  To create a new environment, run::

      mamba create --name myenvname coatran

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coatran:<tag>

   (see `coatran/tags`_ for valid values for ``<tag>``)


.. |downloads_coatran| image:: https://img.shields.io/conda/dn/bioconda/coatran.svg?style=flat
   :target: https://anaconda.org/bioconda/coatran
   :alt:   (downloads)
.. |docker_coatran| image:: https://quay.io/repository/biocontainers/coatran/status
   :target: https://quay.io/repository/biocontainers/coatran
.. _`coatran/tags`: https://quay.io/repository/biocontainers/coatran?tab=tags


.. raw:: html

    <script>
        var package = "coatran";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coatran/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coatran/README.html