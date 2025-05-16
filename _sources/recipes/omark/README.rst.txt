:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'omark'
.. highlight: bash

omark
=====

.. conda:recipe:: omark
   :replaces_section_title:
   :noindex:

   OMArk \- Proteome quality assesment based on OMAmer placements

   :homepage: https://github.com/DessimozLab/omark
   :license: LGPL-3.0
   :recipe: /`omark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omark/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.11.25.517970`

   


.. conda:package:: omark

   |downloads_omark| |docker_omark|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends biopython: 
   :depends ete3: 
   :depends jinja2: 
   :depends libsqlite: ``<=3.40.0``
   :depends matplotlib-base: 
   :depends omamer: ``>=2.0.0``
   :depends python: 
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

      mamba install omark

   and update with::

      mamba update omark

  To create a new environment, run::

      mamba create --name myenvname omark

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/omark:<tag>

   (see `omark/tags`_ for valid values for ``<tag>``)


.. |downloads_omark| image:: https://img.shields.io/conda/dn/bioconda/omark.svg?style=flat
   :target: https://anaconda.org/bioconda/omark
   :alt:   (downloads)
.. |docker_omark| image:: https://quay.io/repository/biocontainers/omark/status
   :target: https://quay.io/repository/biocontainers/omark
.. _`omark/tags`: https://quay.io/repository/biocontainers/omark?tab=tags


.. raw:: html

    <script>
        var package = "omark";
        var versions = ["0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/omark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/omark/README.html