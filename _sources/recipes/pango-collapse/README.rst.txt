:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pango-collapse'
.. highlight: bash

pango-collapse
==============

.. conda:recipe:: pango-collapse
   :replaces_section_title:
   :noindex:

   Collapse Pango sublineages up to user defined parent lineages.

   :homepage: https://github.com/MDU-PHL/pango-collapse
   :license: GPL-3.0-or-later
   :recipe: /`pango-collapse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango-collapse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango-collapse/meta.yaml>`_

   


.. conda:package:: pango-collapse

   |downloads_pango-collapse| |docker_pango-collapse|

   :versions:
      
      

      ``0.8.2-0``

      

   
   :depends numpy: ``>=1.19.5,<1.27.0``
   :depends pandas: ``>=1.3,<=1.5.3``
   :depends pango_aliasor: ``>=0.3.0,<0.4.0``
   :depends python: ``>=3.8,<4.0``
   :depends typer: ``>=0.6.1,<0.7.0``
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

      mamba install pango-collapse

   and update with::

      mamba update pango-collapse

  To create a new environment, run::

      mamba create --name myenvname pango-collapse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pango-collapse:<tag>

   (see `pango-collapse/tags`_ for valid values for ``<tag>``)


.. |downloads_pango-collapse| image:: https://img.shields.io/conda/dn/bioconda/pango-collapse.svg?style=flat
   :target: https://anaconda.org/bioconda/pango-collapse
   :alt:   (downloads)
.. |docker_pango-collapse| image:: https://quay.io/repository/biocontainers/pango-collapse/status
   :target: https://quay.io/repository/biocontainers/pango-collapse
.. _`pango-collapse/tags`: https://quay.io/repository/biocontainers/pango-collapse?tab=tags


.. raw:: html

    <script>
        var package = "pango-collapse";
        var versions = ["0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pango-collapse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pango-collapse/README.html