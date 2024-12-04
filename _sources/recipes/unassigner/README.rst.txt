:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unassigner'
.. highlight: bash

unassigner
==========

.. conda:recipe:: unassigner
   :replaces_section_title:
   :noindex:

   Type strain identification for 16S reads

   :homepage: https://github.com/PennChopMicrobiomeProgram/unassigner
   :license: GPL / GPL-2.0-or-later
   :recipe: /`unassigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unassigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unassigner/meta.yaml>`_

   


.. conda:package:: unassigner

   |downloads_unassigner| |docker_unassigner|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends python: 
   :depends scipy: 
   :depends vsearch: 
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

      mamba install unassigner

   and update with::

      mamba update unassigner

  To create a new environment, run::

      mamba create --name myenvname unassigner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unassigner:<tag>

   (see `unassigner/tags`_ for valid values for ``<tag>``)


.. |downloads_unassigner| image:: https://img.shields.io/conda/dn/bioconda/unassigner.svg?style=flat
   :target: https://anaconda.org/bioconda/unassigner
   :alt:   (downloads)
.. |docker_unassigner| image:: https://quay.io/repository/biocontainers/unassigner/status
   :target: https://quay.io/repository/biocontainers/unassigner
.. _`unassigner/tags`: https://quay.io/repository/biocontainers/unassigner?tab=tags


.. raw:: html

    <script>
        var package = "unassigner";
        var versions = ["1.1.0","1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unassigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unassigner/README.html