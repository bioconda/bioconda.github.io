:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htseq-clip'
.. highlight: bash

htseq-clip
==========

.. conda:recipe:: htseq-clip
   :replaces_section_title:
   :noindex:

   htseq\-clip\: a toolset for the analysis of eCLIP\/iCLIP datasets

   :homepage: https://github.com/EMBL-Hentze-group/htseq-clip
   :license: MIT
   :recipe: /`htseq-clip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq-clip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq-clip/meta.yaml>`_

   


.. conda:package:: htseq-clip

   |downloads_htseq-clip| |docker_htseq-clip|

   :versions:
      
      

      ``2.19.0b0-0``,  ``2.18.2b0-0``,  ``2.14.0b0-0``

      

   
   :depends htseq: 
   :depends pysam: 
   :depends python: 
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

      mamba install htseq-clip

   and update with::

      mamba update htseq-clip

  To create a new environment, run::

      mamba create --name myenvname htseq-clip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/htseq-clip:<tag>

   (see `htseq-clip/tags`_ for valid values for ``<tag>``)


.. |downloads_htseq-clip| image:: https://img.shields.io/conda/dn/bioconda/htseq-clip.svg?style=flat
   :target: https://anaconda.org/bioconda/htseq-clip
   :alt:   (downloads)
.. |docker_htseq-clip| image:: https://quay.io/repository/biocontainers/htseq-clip/status
   :target: https://quay.io/repository/biocontainers/htseq-clip
.. _`htseq-clip/tags`: https://quay.io/repository/biocontainers/htseq-clip?tab=tags


.. raw:: html

    <script>
        var package = "htseq-clip";
        var versions = ["2.19.0b0","2.18.2b0","2.14.0b0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htseq-clip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htseq-clip/README.html