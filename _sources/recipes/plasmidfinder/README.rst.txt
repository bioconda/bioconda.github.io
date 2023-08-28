:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidfinder'
.. highlight: bash

plasmidfinder
=============

.. conda:recipe:: plasmidfinder
   :replaces_section_title:
   :noindex:

   PlasmidFinder allows identification of plasmids in total or partial sequenced isolates of bacteria.

   :homepage: https://bitbucket.org/genomicepidemiology/plasmidfinder
   :license: APACHE / Apache-2.0
   :recipe: /`plasmidfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidfinder/meta.yaml>`_
   :links: doi: :doi:`10.1128/AAC.02412-14`

   


.. conda:package:: plasmidfinder

   |downloads_plasmidfinder| |docker_plasmidfinder|

   :versions:
      
      

      ``2.1.6-1``,  ``2.1.6-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-1``,  ``2.1-0``,  ``2.0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends cgecore: 
   :depends kma: 
   :depends python: ``>=3``
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

      mamba install plasmidfinder

   and update with::

      mamba update plasmidfinder

  To create a new environment, run::

      mamba create --name myenvname plasmidfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasmidfinder:<tag>

   (see `plasmidfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidfinder| image:: https://img.shields.io/conda/dn/bioconda/plasmidfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidfinder
   :alt:   (downloads)
.. |docker_plasmidfinder| image:: https://quay.io/repository/biocontainers/plasmidfinder/status
   :target: https://quay.io/repository/biocontainers/plasmidfinder
.. _`plasmidfinder/tags`: https://quay.io/repository/biocontainers/plasmidfinder?tab=tags


.. raw:: html

    <script>
        var package = "plasmidfinder";
        var versions = ["2.1.6","2.1.6","2.1.1","2.1.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidfinder/README.html