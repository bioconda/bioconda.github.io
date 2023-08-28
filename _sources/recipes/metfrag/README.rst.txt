:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metfrag'
.. highlight: bash

metfrag
=======

.. conda:recipe:: metfrag
   :replaces_section_title:
   :noindex:

   MetFrag is a freely available software for the annotation of high precision tandem mass spectra of metabolites which is a first and critical step for the identification of a molecular structure. Candidate molecules of different databases are fragmented in silico and matched against mass to charge values. A score calculated using the fragment peak matches gives hints to the quality of the candidate spectrum assignment.

   :homepage: http://c-ruttkies.github.io/MetFrag/
   :license: GNU Lesser General Public License version 2.1 or later.
   :recipe: /`metfrag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metfrag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metfrag/meta.yaml>`_

   


.. conda:package:: metfrag

   |downloads_metfrag| |docker_metfrag|

   :versions:
      
      

      ``2.4.5-5``,  ``2.4.5-4``,  ``2.4.5-3``,  ``2.4.5-1``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.3.1-1``,  ``2.3.1-0``

      

   
   :depends openjdk: ``>=7``
   :depends parallel: 
   :depends unzip: 
   :depends zip: 
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

      mamba install metfrag

   and update with::

      mamba update metfrag

  To create a new environment, run::

      mamba create --name myenvname metfrag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metfrag:<tag>

   (see `metfrag/tags`_ for valid values for ``<tag>``)


.. |downloads_metfrag| image:: https://img.shields.io/conda/dn/bioconda/metfrag.svg?style=flat
   :target: https://anaconda.org/bioconda/metfrag
   :alt:   (downloads)
.. |docker_metfrag| image:: https://quay.io/repository/biocontainers/metfrag/status
   :target: https://quay.io/repository/biocontainers/metfrag
.. _`metfrag/tags`: https://quay.io/repository/biocontainers/metfrag?tab=tags


.. raw:: html

    <script>
        var package = "metfrag";
        var versions = ["2.4.5","2.4.5","2.4.5","2.4.5","2.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metfrag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metfrag/README.html