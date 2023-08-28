:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmerfinder'
.. highlight: bash

kmerfinder
==========

.. conda:recipe:: kmerfinder
   :replaces_section_title:
   :noindex:

   Prediction of bacterial species using a fast K\-mer algorithm.

   :homepage: https://bitbucket.org/genomicepidemiology/kmerfinder
   :license: APACHE / APACHE-2.0
   :recipe: /`kmerfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerfinder/meta.yaml>`_

   


.. conda:package:: kmerfinder

   |downloads_kmerfinder| |docker_kmerfinder|

   :versions:
      
      

      ``3.0.2-0``

      

   
   :depends kma: 
   :depends python: ``>=3.5``
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

      mamba install kmerfinder

   and update with::

      mamba update kmerfinder

  To create a new environment, run::

      mamba create --name myenvname kmerfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmerfinder:<tag>

   (see `kmerfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_kmerfinder| image:: https://img.shields.io/conda/dn/bioconda/kmerfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/kmerfinder
   :alt:   (downloads)
.. |docker_kmerfinder| image:: https://quay.io/repository/biocontainers/kmerfinder/status
   :target: https://quay.io/repository/biocontainers/kmerfinder
.. _`kmerfinder/tags`: https://quay.io/repository/biocontainers/kmerfinder?tab=tags


.. raw:: html

    <script>
        var package = "kmerfinder";
        var versions = ["3.0.2"];
    </script>





Notes
-----
KmerFinder requires a database that can be downloaded with download\-db.sh.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmerfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmerfinder/README.html