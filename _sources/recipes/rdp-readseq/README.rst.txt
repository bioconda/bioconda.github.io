:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdp-readseq'
.. highlight: bash

rdp-readseq
===========

.. conda:recipe:: rdp-readseq
   :replaces_section_title:
   :noindex:

   Java based common sequence file format reader and sequence file manipulation.

   :homepage: https://github.com/rdpstaff/ReadSeq
   :license: GPL
   :recipe: /`rdp-readseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdp-readseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdp-readseq/meta.yaml>`_

   


.. conda:package:: rdp-readseq

   |downloads_rdp-readseq| |docker_rdp-readseq|

   :versions:
      
      

      ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends openjdk: 
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

      mamba install rdp-readseq

   and update with::

      mamba update rdp-readseq

  To create a new environment, run::

      mamba create --name myenvname rdp-readseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rdp-readseq:<tag>

   (see `rdp-readseq/tags`_ for valid values for ``<tag>``)


.. |downloads_rdp-readseq| image:: https://img.shields.io/conda/dn/bioconda/rdp-readseq.svg?style=flat
   :target: https://anaconda.org/bioconda/rdp-readseq
   :alt:   (downloads)
.. |docker_rdp-readseq| image:: https://quay.io/repository/biocontainers/rdp-readseq/status
   :target: https://quay.io/repository/biocontainers/rdp-readseq
.. _`rdp-readseq/tags`: https://quay.io/repository/biocontainers/rdp-readseq?tab=tags


.. raw:: html

    <script>
        var package = "rdp-readseq";
        var versions = ["2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdp-readseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdp-readseq/README.html