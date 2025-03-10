:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jacusa2'
.. highlight: bash

jacusa2
=======

.. conda:recipe:: jacusa2
   :replaces_section_title:
   :noindex:

   JACUSA2 is a framework for accurate variant assessment\, detecting SNVs and arrest events in NGS data.

   :homepage: https://github.com/dieterich-lab/JACUSA2
   :license: GPL-3.0-or-later
   :recipe: /`jacusa2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jacusa2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jacusa2/meta.yaml>`_

   


.. conda:package:: jacusa2

   |downloads_jacusa2| |docker_jacusa2|

   :versions:
      
      

      ``2.0.4-0``

      

   
   :depends openjdk: ``>=8,<9``
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

      mamba install jacusa2

   and update with::

      mamba update jacusa2

  To create a new environment, run::

      mamba create --name myenvname jacusa2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jacusa2:<tag>

   (see `jacusa2/tags`_ for valid values for ``<tag>``)


.. |downloads_jacusa2| image:: https://img.shields.io/conda/dn/bioconda/jacusa2.svg?style=flat
   :target: https://anaconda.org/bioconda/jacusa2
   :alt:   (downloads)
.. |docker_jacusa2| image:: https://quay.io/repository/biocontainers/jacusa2/status
   :target: https://quay.io/repository/biocontainers/jacusa2
.. _`jacusa2/tags`: https://quay.io/repository/biocontainers/jacusa2?tab=tags


.. raw:: html

    <script>
        var package = "jacusa2";
        var versions = ["2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jacusa2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jacusa2/README.html