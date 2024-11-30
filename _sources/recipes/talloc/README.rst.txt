:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'talloc'
.. highlight: bash

talloc
======

.. conda:recipe:: talloc
   :replaces_section_title:
   :noindex:

   talloc is a hierarchical\, reference counted memory pool system with destructors.

   :homepage: https://talloc.samba.org/talloc/doc/html/index.html`
   :license: LGPL-3.0
   :recipe: /`talloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/talloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/talloc/meta.yaml>`_

   


.. conda:package:: talloc

   |downloads_talloc| |docker_talloc|

   :versions:
      
      

      ``2.1.9-0``

      

   
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

      mamba install talloc

   and update with::

      mamba update talloc

  To create a new environment, run::

      mamba create --name myenvname talloc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/talloc:<tag>

   (see `talloc/tags`_ for valid values for ``<tag>``)


.. |downloads_talloc| image:: https://img.shields.io/conda/dn/bioconda/talloc.svg?style=flat
   :target: https://anaconda.org/bioconda/talloc
   :alt:   (downloads)
.. |docker_talloc| image:: https://quay.io/repository/biocontainers/talloc/status
   :target: https://quay.io/repository/biocontainers/talloc
.. _`talloc/tags`: https://quay.io/repository/biocontainers/talloc?tab=tags


.. raw:: html

    <script>
        var package = "talloc";
        var versions = ["2.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/talloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/talloc/README.html