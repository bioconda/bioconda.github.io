:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprhawk'
.. highlight: bash

crisprhawk
==========

.. conda:recipe:: crisprhawk
   :replaces_section_title:
   :noindex:

   CRISPR\-HAWK\: Haplotype and vAriant\-aWare guide design toolKit

   :homepage: https://github.com/pinellolab/CRISPR-HAWK
   :license: AGPL-3.0-or-later AND BSD-3-Clause
   :recipe: /`crisprhawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprhawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprhawk/meta.yaml>`_

   


.. conda:package:: crisprhawk

   |downloads_crisprhawk| |docker_crisprhawk|

   :versions:
      
      

      

      

   
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

      mamba install crisprhawk

   and update with::

      mamba update crisprhawk

  To create a new environment, run::

      mamba create --name myenvname crisprhawk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crisprhawk:<tag>

   (see `crisprhawk/tags`_ for valid values for ``<tag>``)


.. |downloads_crisprhawk| image:: https://img.shields.io/conda/dn/bioconda/crisprhawk.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprhawk
   :alt:   (downloads)
.. |docker_crisprhawk| image:: https://quay.io/repository/biocontainers/crisprhawk/status
   :target: https://quay.io/repository/biocontainers/crisprhawk
.. _`crisprhawk/tags`: https://quay.io/repository/biocontainers/crisprhawk?tab=tags


.. raw:: html

    <script>
        var package = "crisprhawk";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprhawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprhawk/README.html