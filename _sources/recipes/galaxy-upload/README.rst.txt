:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-upload'
.. highlight: bash

galaxy-upload
=============

.. conda:recipe:: galaxy-upload
   :replaces_section_title:
   :noindex:

   Galaxy Command\-Line Upload Utility

   :homepage: https://github.com/galaxyproject/galaxy-upload
   :documentation: https://galaxy-upload.readthedocs.org
   
   :license: MIT
   :recipe: /`galaxy-upload <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-upload>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-upload/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-upload

   |downloads_galaxy-upload| |docker_galaxy-upload|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioblend: ``>=0.18.0``
   :depends click: 
   :depends click-option-group: 
   :depends python: 
   :depends rich: 
   :depends tuspy: ``>=1.0.0``
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

      mamba install galaxy-upload

   and update with::

      mamba update galaxy-upload

  To create a new environment, run::

      mamba create --name myenvname galaxy-upload

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-upload:<tag>

   (see `galaxy-upload/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-upload| image:: https://img.shields.io/conda/dn/bioconda/galaxy-upload.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-upload
   :alt:   (downloads)
.. |docker_galaxy-upload| image:: https://quay.io/repository/biocontainers/galaxy-upload/status
   :target: https://quay.io/repository/biocontainers/galaxy-upload
.. _`galaxy-upload/tags`: https://quay.io/repository/biocontainers/galaxy-upload?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-upload";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-upload/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-upload/README.html