:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet'
.. highlight: bash

metavelvet
==========

.. conda:recipe:: metavelvet
   :replaces_section_title:
   :noindex:

   MetaVelvet \: An extension of Velvet assembler to de novo metagenome assembly from short sequence reads

   :homepage: http://metavelvet.dna.bio.keio.ac.jp
   :license: GNU General Public License
   :recipe: /`metavelvet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet/meta.yaml>`_

   


.. conda:package:: metavelvet

   |downloads_metavelvet| |docker_metavelvet|

   :versions:
      
      

      ``1.2.02-2``,  ``1.2.02-1``,  ``1.1.01-1``,  ``1.1.01-0``

      

   
   :depends libgcc: 
   :depends perl: ``5.22.0*``
   :depends perl-module-build: 
   :depends velvet: 
   :depends zlib: ``1.2.11*``
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

      mamba install metavelvet

   and update with::

      mamba update metavelvet

  To create a new environment, run::

      mamba create --name myenvname metavelvet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metavelvet:<tag>

   (see `metavelvet/tags`_ for valid values for ``<tag>``)


.. |downloads_metavelvet| image:: https://img.shields.io/conda/dn/bioconda/metavelvet.svg?style=flat
   :target: https://anaconda.org/bioconda/metavelvet
   :alt:   (downloads)
.. |docker_metavelvet| image:: https://quay.io/repository/biocontainers/metavelvet/status
   :target: https://quay.io/repository/biocontainers/metavelvet
.. _`metavelvet/tags`: https://quay.io/repository/biocontainers/metavelvet?tab=tags


.. raw:: html

    <script>
        var package = "metavelvet";
        var versions = ["1.2.02","1.2.02","1.1.01","1.1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet/README.html