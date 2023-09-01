:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clan'
.. highlight: bash

clan
====

.. conda:recipe:: clan
   :replaces_section_title:
   :noindex:

   CLAN \- the CrossLinked reads ANalysis tool

   :homepage: https://sourceforge.net/projects/clan-mapping/
   :license: Creative Commons BY-NC-ND 4.0 license
   :recipe: /`clan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clan/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.isci.2019.05.038`

   


.. conda:package:: clan

   |downloads_clan| |docker_clan|

   :versions:
      
      

      ``0.05-4``,  ``0.05-3``,  ``0.05-2``,  ``0.05-1``,  ``0.05-0``

      

   
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

      mamba install clan

   and update with::

      mamba update clan

  To create a new environment, run::

      mamba create --name myenvname clan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clan:<tag>

   (see `clan/tags`_ for valid values for ``<tag>``)


.. |downloads_clan| image:: https://img.shields.io/conda/dn/bioconda/clan.svg?style=flat
   :target: https://anaconda.org/bioconda/clan
   :alt:   (downloads)
.. |docker_clan| image:: https://quay.io/repository/biocontainers/clan/status
   :target: https://quay.io/repository/biocontainers/clan
.. _`clan/tags`: https://quay.io/repository/biocontainers/clan?tab=tags


.. raw:: html

    <script>
        var package = "clan";
        var versions = ["0.05","0.05","0.05","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clan/README.html