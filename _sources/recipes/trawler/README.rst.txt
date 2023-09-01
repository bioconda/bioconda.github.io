:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trawler'
.. highlight: bash

trawler
=======

.. conda:recipe:: trawler
   :replaces_section_title:
   :noindex:

   Trawler is a motif discovery tool used to identify enriched motifs in a set of sequenced regions of DNA.

   :homepage: https://trawler.erc.monash.edu.au/help.html
   :license: GPLv2
   :recipe: /`trawler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trawler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trawler/meta.yaml>`_

   


.. conda:package:: trawler

   |downloads_trawler| |docker_trawler|

   :versions:
      
      

      ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends ghostscript: 
   :depends openjdk: 
   :depends perl: ``>=5.22``
   :depends perl-algorithm-cluster: 
   :depends perl-cgi: 
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

      mamba install trawler

   and update with::

      mamba update trawler

  To create a new environment, run::

      mamba create --name myenvname trawler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trawler:<tag>

   (see `trawler/tags`_ for valid values for ``<tag>``)


.. |downloads_trawler| image:: https://img.shields.io/conda/dn/bioconda/trawler.svg?style=flat
   :target: https://anaconda.org/bioconda/trawler
   :alt:   (downloads)
.. |docker_trawler| image:: https://quay.io/repository/biocontainers/trawler/status
   :target: https://quay.io/repository/biocontainers/trawler
.. _`trawler/tags`: https://quay.io/repository/biocontainers/trawler?tab=tags


.. raw:: html

    <script>
        var package = "trawler";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trawler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trawler/README.html