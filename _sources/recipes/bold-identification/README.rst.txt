:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bold-identification'
.. highlight: bash

bold-identification
===================

.. conda:recipe:: bold-identification
   :replaces_section_title:
   :noindex:

   A tool for taxonomic assignment for given sequences using the BOLD database \(http\:\/\/www.boldsystems.org\/index.php\)

   :homepage: https://github.com/linzhi2013/bold_identification
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`bold-identification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bold-identification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bold-identification/meta.yaml>`_
   :links: biotools: :biotools:`bold-identification`

   


.. conda:package:: bold-identification

   |downloads_bold-identification| |docker_bold-identification|

   :versions:
      
      

      ``0.0.27-0``,  ``0.0.25-0``

      

   
   :depends beautifulsoup4: 
   :depends biopython: ``>1.5``
   :depends html5lib: 
   :depends python: ``>=3.5``
   :depends requests: 
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

      mamba install bold-identification

   and update with::

      mamba update bold-identification

  To create a new environment, run::

      mamba create --name myenvname bold-identification

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bold-identification:<tag>

   (see `bold-identification/tags`_ for valid values for ``<tag>``)


.. |downloads_bold-identification| image:: https://img.shields.io/conda/dn/bioconda/bold-identification.svg?style=flat
   :target: https://anaconda.org/bioconda/bold-identification
   :alt:   (downloads)
.. |docker_bold-identification| image:: https://quay.io/repository/biocontainers/bold-identification/status
   :target: https://quay.io/repository/biocontainers/bold-identification
.. _`bold-identification/tags`: https://quay.io/repository/biocontainers/bold-identification?tab=tags


.. raw:: html

    <script>
        var package = "bold-identification";
        var versions = ["0.0.27","0.0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bold-identification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bold-identification/README.html