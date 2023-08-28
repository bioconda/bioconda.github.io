:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rename'
.. highlight: bash

rename
======

.. conda:recipe:: rename
   :replaces_section_title:
   :noindex:

   Perl\-powered file rename script with many helpful built\-ins

   :homepage: http://plasmasturm.org/code/rename
   :license: GNU GPLv3
   :recipe: /`rename <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rename>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rename/meta.yaml>`_

   


.. conda:package:: rename

   |downloads_rename| |docker_rename|

   :versions:
      
      

      ``1.601-1``,  ``1.601-0``,  ``1.600-1``,  ``1.600-0``

      

   
   :depends perl: 
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

      mamba install rename

   and update with::

      mamba update rename

  To create a new environment, run::

      mamba create --name myenvname rename

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rename:<tag>

   (see `rename/tags`_ for valid values for ``<tag>``)


.. |downloads_rename| image:: https://img.shields.io/conda/dn/bioconda/rename.svg?style=flat
   :target: https://anaconda.org/bioconda/rename
   :alt:   (downloads)
.. |docker_rename| image:: https://quay.io/repository/biocontainers/rename/status
   :target: https://quay.io/repository/biocontainers/rename
.. _`rename/tags`: https://quay.io/repository/biocontainers/rename?tab=tags


.. raw:: html

    <script>
        var package = "rename";
        var versions = ["1.601","1.601","1.600","1.600"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rename/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rename/README.html