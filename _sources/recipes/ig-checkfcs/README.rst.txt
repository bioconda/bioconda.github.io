:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ig-checkfcs'
.. highlight: bash

ig-checkfcs
===========

.. conda:recipe:: ig-checkfcs
   :replaces_section_title:
   :noindex:

   quick FCS datatype check

   :homepage: https://github.com/ImmPortDB/ig-checkfcs
   :license: BSD / BSD License
   :recipe: /`ig-checkfcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkfcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-checkfcs/meta.yaml>`_

   


.. conda:package:: ig-checkfcs

   |downloads_ig-checkfcs| |docker_ig-checkfcs|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-flowcore: 
   :depends r: ``>=2.10.0``
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

      mamba install ig-checkfcs

   and update with::

      mamba update ig-checkfcs

  To create a new environment, run::

      mamba create --name myenvname ig-checkfcs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ig-checkfcs:<tag>

   (see `ig-checkfcs/tags`_ for valid values for ``<tag>``)


.. |downloads_ig-checkfcs| image:: https://img.shields.io/conda/dn/bioconda/ig-checkfcs.svg?style=flat
   :target: https://anaconda.org/bioconda/ig-checkfcs
   :alt:   (downloads)
.. |docker_ig-checkfcs| image:: https://quay.io/repository/biocontainers/ig-checkfcs/status
   :target: https://quay.io/repository/biocontainers/ig-checkfcs
.. _`ig-checkfcs/tags`: https://quay.io/repository/biocontainers/ig-checkfcs?tab=tags


.. raw:: html

    <script>
        var package = "ig-checkfcs";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-checkfcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-checkfcs/README.html