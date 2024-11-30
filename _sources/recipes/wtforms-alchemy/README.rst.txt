:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wtforms-alchemy'
.. highlight: bash

wtforms-alchemy
===============

.. conda:recipe:: wtforms-alchemy
   :replaces_section_title:
   :noindex:

   Generates WTForms forms from SQLAlchemy models.

   :homepage: https://github.com/kvesteri/wtforms-alchemy
   :license: BSD License
   :recipe: /`wtforms-alchemy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-alchemy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtforms-alchemy/meta.yaml>`_

   


.. conda:package:: wtforms-alchemy

   |downloads_wtforms-alchemy| |docker_wtforms-alchemy|

   :versions:
      
      

      ``0.16.9-0``,  ``0.16.8-0``,  ``0.16.7-0``,  ``0.15.0-1``,  ``0.15.0-0``

      

   
   :depends python: 
   :depends six: ``>=1.4.1``
   :depends sqlalchemy: ``>=0.8.0``
   :depends sqlalchemy-utils: ``>=0.30.0``
   :depends wtforms: ``>=1.0.4``
   :depends wtforms-components: ``>=0.9.2``
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

      mamba install wtforms-alchemy

   and update with::

      mamba update wtforms-alchemy

  To create a new environment, run::

      mamba create --name myenvname wtforms-alchemy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wtforms-alchemy:<tag>

   (see `wtforms-alchemy/tags`_ for valid values for ``<tag>``)


.. |downloads_wtforms-alchemy| image:: https://img.shields.io/conda/dn/bioconda/wtforms-alchemy.svg?style=flat
   :target: https://anaconda.org/bioconda/wtforms-alchemy
   :alt:   (downloads)
.. |docker_wtforms-alchemy| image:: https://quay.io/repository/biocontainers/wtforms-alchemy/status
   :target: https://quay.io/repository/biocontainers/wtforms-alchemy
.. _`wtforms-alchemy/tags`: https://quay.io/repository/biocontainers/wtforms-alchemy?tab=tags


.. raw:: html

    <script>
        var package = "wtforms-alchemy";
        var versions = ["0.16.9","0.16.8","0.16.7","0.15.0","0.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtforms-alchemy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtforms-alchemy/README.html