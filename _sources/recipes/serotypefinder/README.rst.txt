:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'serotypefinder'
.. highlight: bash

serotypefinder
==============

.. conda:recipe:: serotypefinder
   :replaces_section_title:
   :noindex:

   SerotypeFinder identifies the serotype in total or partial sequenced isolates of E. coli.

   :homepage: https://bitbucket.org/genomicepidemiology/serotypefinder
   :license: APACHE / Apache-2.0
   :recipe: /`serotypefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/serotypefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/serotypefinder/meta.yaml>`_
   :links: doi: :doi:`10.1128/JCM.00008-1`

   


.. conda:package:: serotypefinder

   |downloads_serotypefinder| |docker_serotypefinder|

   :versions:
      
      

      ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.8.1``
   :depends cgecore: ``>=1.5.5``
   :depends git: 
   :depends kma: 
   :depends python: ``>=3.8``
   :depends tabulate: ``>=0.8.9``
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

      mamba install serotypefinder

   and update with::

      mamba update serotypefinder

  To create a new environment, run::

      mamba create --name myenvname serotypefinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/serotypefinder:<tag>

   (see `serotypefinder/tags`_ for valid values for ``<tag>``)


.. |downloads_serotypefinder| image:: https://img.shields.io/conda/dn/bioconda/serotypefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/serotypefinder
   :alt:   (downloads)
.. |docker_serotypefinder| image:: https://quay.io/repository/biocontainers/serotypefinder/status
   :target: https://quay.io/repository/biocontainers/serotypefinder
.. _`serotypefinder/tags`: https://quay.io/repository/biocontainers/serotypefinder?tab=tags


.. raw:: html

    <script>
        var package = "serotypefinder";
        var versions = ["2.0.2","2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/serotypefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/serotypefinder/README.html