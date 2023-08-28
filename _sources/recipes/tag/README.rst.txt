:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tag'
.. highlight: bash

tag
===

.. conda:recipe:: tag
   :replaces_section_title:
   :noindex:

   Genome annotation data analysis and management implemented in pure Python.

   :homepage: https://github.com/standage/tag/
   :license: BSD / BSD License
   :recipe: /`tag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tag/meta.yaml>`_

   


.. conda:package:: tag

   |downloads_tag| |docker_tag|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5-1``,  ``0.5-0``,  ``0.4-0``

      

   
   :depends intervaltree: ``>=3.0``
   :depends networkx: ``>=2.0``
   :depends python: ``>=3``
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

      mamba install tag

   and update with::

      mamba update tag

  To create a new environment, run::

      mamba create --name myenvname tag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tag:<tag>

   (see `tag/tags`_ for valid values for ``<tag>``)


.. |downloads_tag| image:: https://img.shields.io/conda/dn/bioconda/tag.svg?style=flat
   :target: https://anaconda.org/bioconda/tag
   :alt:   (downloads)
.. |docker_tag| image:: https://quay.io/repository/biocontainers/tag/status
   :target: https://quay.io/repository/biocontainers/tag
.. _`tag/tags`: https://quay.io/repository/biocontainers/tag?tab=tags


.. raw:: html

    <script>
        var package = "tag";
        var versions = ["0.5.1","0.5","0.5","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tag/README.html