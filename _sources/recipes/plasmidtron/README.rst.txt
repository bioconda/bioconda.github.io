:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidtron'
.. highlight: bash

plasmidtron
===========

.. conda:recipe:: plasmidtron
   :replaces_section_title:
   :noindex:

   PlasmidTron\: assembling the cause of phenotypes from NGS data

   :homepage: https://github.com/sanger-pathogens/plasmidtron
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`plasmidtron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidtron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidtron/meta.yaml>`_

   


.. conda:package:: plasmidtron

   |downloads_plasmidtron| |docker_plasmidtron|

   :versions:
      
      

      ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.5-0``,  ``0.3.3-0``

      

   
   :depends biopython: 
   :depends kmc: ``>=2.3.0``
   :depends matplotlib: 
   :depends pyfastaq: ``>=3.12.0``
   :depends python: ``>=3``
   :depends spades: ``>=3.9.0``
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

      mamba install plasmidtron

   and update with::

      mamba update plasmidtron

  To create a new environment, run::

      mamba create --name myenvname plasmidtron

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasmidtron:<tag>

   (see `plasmidtron/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidtron| image:: https://img.shields.io/conda/dn/bioconda/plasmidtron.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidtron
   :alt:   (downloads)
.. |docker_plasmidtron| image:: https://quay.io/repository/biocontainers/plasmidtron/status
   :target: https://quay.io/repository/biocontainers/plasmidtron
.. _`plasmidtron/tags`: https://quay.io/repository/biocontainers/plasmidtron?tab=tags


.. raw:: html

    <script>
        var package = "plasmidtron";
        var versions = ["0.4.1","0.4.1","0.4.1","0.3.5","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidtron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidtron/README.html