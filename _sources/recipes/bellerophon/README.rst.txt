:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bellerophon'
.. highlight: bash

bellerophon
===========

.. conda:recipe:: bellerophon
   :replaces_section_title:
   :noindex:

   Filter reads that span a mapping junction\, retaining the 5\'\-side.

   :homepage: https://github.com/davebx/bellerophon/
   :license: MIT
   :recipe: /`bellerophon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellerophon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellerophon/meta.yaml>`_

   


.. conda:package:: bellerophon

   |downloads_bellerophon| |docker_bellerophon|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends pysam: 
   :depends python: 
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

      mamba install bellerophon

   and update with::

      mamba update bellerophon

  To create a new environment, run::

      mamba create --name myenvname bellerophon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bellerophon:<tag>

   (see `bellerophon/tags`_ for valid values for ``<tag>``)


.. |downloads_bellerophon| image:: https://img.shields.io/conda/dn/bioconda/bellerophon.svg?style=flat
   :target: https://anaconda.org/bioconda/bellerophon
   :alt:   (downloads)
.. |docker_bellerophon| image:: https://quay.io/repository/biocontainers/bellerophon/status
   :target: https://quay.io/repository/biocontainers/bellerophon
.. _`bellerophon/tags`: https://quay.io/repository/biocontainers/bellerophon?tab=tags


.. raw:: html

    <script>
        var package = "bellerophon";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bellerophon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bellerophon/README.html