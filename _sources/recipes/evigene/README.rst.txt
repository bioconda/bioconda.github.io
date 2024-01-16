:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evigene'
.. highlight: bash

evigene
=======

.. conda:recipe:: evigene
   :replaces_section_title:
   :noindex:

   A genome informatics project for Evidence Directed Gene Construction for Eukaryotes

   :homepage: http://arthropods.eugenes.org/EvidentialGene/
   :license: Don Gilbert, gilbertd At indiana edu, 2018
   :recipe: /`evigene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evigene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evigene/meta.yaml>`_

   EvidentialGene is a genome informatics project for \"Evidence Directed Gene Construction for Eukaryotes\"\, 
   for constructing high quality\, accurate gene sets for animals and plants \(any eukaryotes\)\, being developed 
   by Don Gilbert at Indiana University\, gilbertd at indiana edu. The perl scripts are nested inside the 
   \'scripts\' folder and\, therefor can only be used by providing the full path 
   such as \'\$EVIGENEHOME\/scripts\/prot\/tr2aacds.pl \-h\'



.. conda:package:: evigene

   |downloads_evigene| |docker_evigene|

   :versions:
      
      

      ``23.7.15-1``,  ``23.7.15-0``

      

   
   :depends blast: 
   :depends cd-hit: 
   :depends exonerate: 
   :depends perl: 
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

      mamba install evigene

   and update with::

      mamba update evigene

  To create a new environment, run::

      mamba create --name myenvname evigene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/evigene:<tag>

   (see `evigene/tags`_ for valid values for ``<tag>``)


.. |downloads_evigene| image:: https://img.shields.io/conda/dn/bioconda/evigene.svg?style=flat
   :target: https://anaconda.org/bioconda/evigene
   :alt:   (downloads)
.. |docker_evigene| image:: https://quay.io/repository/biocontainers/evigene/status
   :target: https://quay.io/repository/biocontainers/evigene
.. _`evigene/tags`: https://quay.io/repository/biocontainers/evigene?tab=tags


.. raw:: html

    <script>
        var package = "evigene";
        var versions = ["23.7.15","23.7.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evigene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evigene/README.html