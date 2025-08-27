:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'concoord'
.. highlight: bash

concoord
========

.. conda:recipe:: concoord
   :replaces_section_title:
   :noindex:

   CONCOORD is a method to generate protein conformations around a known structure based on geometric restrictions.

   :homepage: https://www3.mpibpc.mpg.de/groups/de_groot/concoord
   :license: APACHE / Apache Software License
   :recipe: /`concoord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoord/meta.yaml>`_

   CONCOORD is a method to generate protein conformations around a known structure based on geometric restrictions.


.. conda:package:: concoord

   |downloads_concoord| |docker_concoord|

   :versions:
      
      

      ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``

      

   
   :depends libgcc: ``==4.8.5 1``
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

      mamba install concoord

   and update with::

      mamba update concoord

  To create a new environment, run::

      mamba create --name myenvname concoord

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/concoord:<tag>

   (see `concoord/tags`_ for valid values for ``<tag>``)


.. |downloads_concoord| image:: https://img.shields.io/conda/dn/bioconda/concoord.svg?style=flat
   :target: https://anaconda.org/bioconda/concoord
   :alt:   (downloads)
.. |docker_concoord| image:: https://quay.io/repository/biocontainers/concoord/status
   :target: https://quay.io/repository/biocontainers/concoord
.. _`concoord/tags`: https://quay.io/repository/biocontainers/concoord?tab=tags


.. raw:: html

    <script>
        var package = "concoord";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/concoord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/concoord/README.html