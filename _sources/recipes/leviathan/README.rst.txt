:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'leviathan'
.. highlight: bash

leviathan
=========

.. conda:recipe:: leviathan
   :replaces_section_title:
   :noindex:

   Linked\-reads based structural variant caller with barcode indexing

   :homepage: https://github.com/morispi/LEVIATHAN
   :license: AGPL-3.0-or-later
   :recipe: /`leviathan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviathan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/leviathan/meta.yaml>`_

   


.. conda:package:: leviathan

   |downloads_leviathan| |docker_leviathan|

   :versions:
      
      

      ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends lrez: ``>=2.2.4,<2.3.0a0``
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

      mamba install leviathan

   and update with::

      mamba update leviathan

  To create a new environment, run::

      mamba create --name myenvname leviathan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/leviathan:<tag>

   (see `leviathan/tags`_ for valid values for ``<tag>``)


.. |downloads_leviathan| image:: https://img.shields.io/conda/dn/bioconda/leviathan.svg?style=flat
   :target: https://anaconda.org/bioconda/leviathan
   :alt:   (downloads)
.. |docker_leviathan| image:: https://quay.io/repository/biocontainers/leviathan/status
   :target: https://quay.io/repository/biocontainers/leviathan
.. _`leviathan/tags`: https://quay.io/repository/biocontainers/leviathan?tab=tags


.. raw:: html

    <script>
        var package = "leviathan";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/leviathan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/leviathan/README.html