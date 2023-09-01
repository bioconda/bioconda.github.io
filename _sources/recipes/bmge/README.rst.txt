:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bmge'
.. highlight: bash

bmge
====

.. conda:recipe:: bmge
   :replaces_section_title:
   :noindex:

   BMGE \(Block Mapping and Gathering with Entropy\) is a program that selects
   regions in a multiple sequence alignment that are suited for phylogenetic inference.

   :homepage: https://bioweb.pasteur.fr/packages/pack@BMGE@1.12
   :documentation: http://gensoft.pasteur.fr/docs/BMGE/1.12/BMGE_doc.pdf
   
   :license: GPL2
   :recipe: /`bmge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmge/meta.yaml>`_

   


.. conda:package:: bmge

   |downloads_bmge| |docker_bmge|

   :versions:
      
      

      ``1.12-1``,  ``1.12-0``

      

   
   :depends openjdk: ``>=6``
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

      mamba install bmge

   and update with::

      mamba update bmge

  To create a new environment, run::

      mamba create --name myenvname bmge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bmge:<tag>

   (see `bmge/tags`_ for valid values for ``<tag>``)


.. |downloads_bmge| image:: https://img.shields.io/conda/dn/bioconda/bmge.svg?style=flat
   :target: https://anaconda.org/bioconda/bmge
   :alt:   (downloads)
.. |docker_bmge| image:: https://quay.io/repository/biocontainers/bmge/status
   :target: https://quay.io/repository/biocontainers/bmge
.. _`bmge/tags`: https://quay.io/repository/biocontainers/bmge?tab=tags


.. raw:: html

    <script>
        var package = "bmge";
        var versions = ["1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bmge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bmge/README.html