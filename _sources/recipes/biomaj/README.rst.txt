:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biomaj'
.. highlight: bash

biomaj
======

.. conda:recipe:: biomaj
   :replaces_section_title:
   :noindex:

   Automates the update cycle and the supervision of the locally mirrored databank repository

   :homepage: http://biomaj.genouest.org
   :license: AGPL / GNU Affero General Public License v3 or later (AGPLv3+)
   :recipe: /`biomaj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biomaj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biomaj/meta.yaml>`_
   :links: biotools: :biotools:`biomaj`, doi: :doi:`10.1093/bioinformatics/btn325`

   


.. conda:package:: biomaj

   |downloads_biomaj| |docker_biomaj|

   :versions:
      
      

      ``3.0.19-0``

      

   
   :depends bcrypt: 
   :depends drmaa: 
   :depends elasticsearch: 
   :depends future: 
   :depends ldap3: 
   :depends pycurl: 
   :depends pymongo: 
   :depends python: ``2.7*``
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biomaj

   and update with::

      mamba update biomaj

  To create a new environment, run::

      mamba create --name myenvname biomaj

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biomaj:<tag>

   (see `biomaj/tags`_ for valid values for ``<tag>``)


.. |downloads_biomaj| image:: https://img.shields.io/conda/dn/bioconda/biomaj.svg?style=flat
   :target: https://anaconda.org/bioconda/biomaj
   :alt:   (downloads)
.. |docker_biomaj| image:: https://quay.io/repository/biocontainers/biomaj/status
   :target: https://quay.io/repository/biocontainers/biomaj
.. _`biomaj/tags`: https://quay.io/repository/biocontainers/biomaj?tab=tags


.. raw:: html

    <script>
        var package = "biomaj";
        var versions = ["3.0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biomaj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biomaj/README.html