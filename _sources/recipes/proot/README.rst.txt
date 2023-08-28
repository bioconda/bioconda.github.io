:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proot'
.. highlight: bash

proot
=====

.. conda:recipe:: proot
   :replaces_section_title:
   :noindex:

   chroot\, mount \-\-bind\, and binfmt\_misc without privilege\/setup

   :homepage: https://github.com/proot-me/PRoot
   :license: GPL-2.0
   :recipe: /`proot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proot/meta.yaml>`_

   


.. conda:package:: proot

   |downloads_proot| |docker_proot|

   :versions:
      
      

      ``5.1.0-0``

      

   
   :depends talloc: 
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

      mamba install proot

   and update with::

      mamba update proot

  To create a new environment, run::

      mamba create --name myenvname proot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proot:<tag>

   (see `proot/tags`_ for valid values for ``<tag>``)


.. |downloads_proot| image:: https://img.shields.io/conda/dn/bioconda/proot.svg?style=flat
   :target: https://anaconda.org/bioconda/proot
   :alt:   (downloads)
.. |docker_proot| image:: https://quay.io/repository/biocontainers/proot/status
   :target: https://quay.io/repository/biocontainers/proot
.. _`proot/tags`: https://quay.io/repository/biocontainers/proot?tab=tags


.. raw:: html

    <script>
        var package = "proot";
        var versions = ["5.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proot/README.html