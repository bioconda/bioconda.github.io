:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baypass'
.. highlight: bash

baypass
=======

.. conda:recipe:: baypass
   :replaces_section_title:
   :noindex:

   Genome\-Wide Scan for Adaptive Differentiation and Association Analysis with population\-specific covariables.

   :homepage: http://www1.montpellier.inra.fr/CBGP/software/baypass/index.html
   :license: CECILL-B
   :recipe: /`baypass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baypass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baypass/meta.yaml>`_

   


.. conda:package:: baypass

   |downloads_baypass| |docker_baypass|

   :versions:
      
      

      ``2.31-2``,  ``2.31-1``,  ``2.31-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
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

      mamba install baypass

   and update with::

      mamba update baypass

  To create a new environment, run::

      mamba create --name myenvname baypass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/baypass:<tag>

   (see `baypass/tags`_ for valid values for ``<tag>``)


.. |downloads_baypass| image:: https://img.shields.io/conda/dn/bioconda/baypass.svg?style=flat
   :target: https://anaconda.org/bioconda/baypass
   :alt:   (downloads)
.. |docker_baypass| image:: https://quay.io/repository/biocontainers/baypass/status
   :target: https://quay.io/repository/biocontainers/baypass
.. _`baypass/tags`: https://quay.io/repository/biocontainers/baypass?tab=tags


.. raw:: html

    <script>
        var package = "baypass";
        var versions = ["2.31","2.31","2.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baypass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baypass/README.html