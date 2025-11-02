:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shorttracks'
.. highlight: bash

shorttracks
===========

.. conda:recipe:: shorttracks
   :replaces_section_title:
   :noindex:

   ShortTracks \: Useful length\- and strand\-based coverage files \(bigwig\) from small RNA\-seq alignments \(BAM\)

   :homepage: https://github.com/MikeAxtell/ShortTracks
   :license: MIT / MIT
   :recipe: /`shorttracks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorttracks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorttracks/meta.yaml>`_

   


.. conda:package:: shorttracks

   |downloads_shorttracks| |docker_shorttracks|

   :versions:
      
      

      ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``0.1-0``

      

   
   :depends python: ``>=3.10``
   :depends samtools: ``>=1.10``
   :depends ucsc-wigtobigwig: 
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

      mamba install shorttracks

   and update with::

      mamba update shorttracks

  To create a new environment, run::

      mamba create --name myenvname shorttracks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shorttracks:<tag>

   (see `shorttracks/tags`_ for valid values for ``<tag>``)


.. |downloads_shorttracks| image:: https://img.shields.io/conda/dn/bioconda/shorttracks.svg?style=flat
   :target: https://anaconda.org/bioconda/shorttracks
   :alt:   (downloads)
.. |docker_shorttracks| image:: https://quay.io/repository/biocontainers/shorttracks/status
   :target: https://quay.io/repository/biocontainers/shorttracks
.. _`shorttracks/tags`: https://quay.io/repository/biocontainers/shorttracks?tab=tags


.. raw:: html

    <script>
        var package = "shorttracks";
        var versions = ["1.3","1.2","1.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shorttracks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shorttracks/README.html