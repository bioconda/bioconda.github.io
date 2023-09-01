:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dialign2'
.. highlight: bash

dialign2
========

.. conda:recipe:: dialign2
   :replaces_section_title:
   :noindex:

   DIALIGN multiple sequence alignment using various sources of external information

   :homepage: http://dialign.gobics.de
   :license: LGPL
   :recipe: /`dialign2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign2/meta.yaml>`_
   :links: DOI: :DOI:`10.1093/nar/gkt283`

   


.. conda:package:: dialign2

   |downloads_dialign2| |docker_dialign2|

   :versions:
      
      

      ``2.2.1-7``,  ``2.2.1-6``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install dialign2

   and update with::

      mamba update dialign2

  To create a new environment, run::

      mamba create --name myenvname dialign2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dialign2:<tag>

   (see `dialign2/tags`_ for valid values for ``<tag>``)


.. |downloads_dialign2| image:: https://img.shields.io/conda/dn/bioconda/dialign2.svg?style=flat
   :target: https://anaconda.org/bioconda/dialign2
   :alt:   (downloads)
.. |docker_dialign2| image:: https://quay.io/repository/biocontainers/dialign2/status
   :target: https://quay.io/repository/biocontainers/dialign2
.. _`dialign2/tags`: https://quay.io/repository/biocontainers/dialign2?tab=tags


.. raw:: html

    <script>
        var package = "dialign2";
        var versions = ["2.2.1","2.2.1","2.2.1","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dialign2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dialign2/README.html