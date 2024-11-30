:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'translate-gard'
.. highlight: bash

translate-gard
==============

.. conda:recipe:: translate-gard
   :replaces_section_title:
   :noindex:

   Converts HyPhy 2.3.2 GARD output to JSON

   :homepage: https://github.com/veg/translate-gard/
   :license: MIT
   :recipe: /`translate-gard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/translate-gard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/translate-gard/meta.yaml>`_

   


.. conda:package:: translate-gard

   |downloads_translate-gard| |docker_translate-gard|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends nodejs: ``6.*``
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

      mamba install translate-gard

   and update with::

      mamba update translate-gard

  To create a new environment, run::

      mamba create --name myenvname translate-gard

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/translate-gard:<tag>

   (see `translate-gard/tags`_ for valid values for ``<tag>``)


.. |downloads_translate-gard| image:: https://img.shields.io/conda/dn/bioconda/translate-gard.svg?style=flat
   :target: https://anaconda.org/bioconda/translate-gard
   :alt:   (downloads)
.. |docker_translate-gard| image:: https://quay.io/repository/biocontainers/translate-gard/status
   :target: https://quay.io/repository/biocontainers/translate-gard
.. _`translate-gard/tags`: https://quay.io/repository/biocontainers/translate-gard?tab=tags


.. raw:: html

    <script>
        var package = "translate-gard";
        var versions = ["1.0.4","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/translate-gard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/translate-gard/README.html