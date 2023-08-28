:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kggseq'
.. highlight: bash

kggseq
======

.. conda:recipe:: kggseq
   :replaces_section_title:
   :noindex:

   KGGSeq is a software platform constituted of Bioinformatics and statistical genetics functions making use of valuable biologic resources and knowledge for sequencing\-based genetic mapping of variants\/genes responsible for human diseases\/traits.

   :homepage: http://grass.cgs.hku.hk/limx/kggseq/
   :license: APACHE / Apache License 2.0
   :recipe: /`kggseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kggseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kggseq/meta.yaml>`_

   


.. conda:package:: kggseq

   |downloads_kggseq| |docker_kggseq|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install kggseq

   and update with::

      mamba update kggseq

  To create a new environment, run::

      mamba create --name myenvname kggseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kggseq:<tag>

   (see `kggseq/tags`_ for valid values for ``<tag>``)


.. |downloads_kggseq| image:: https://img.shields.io/conda/dn/bioconda/kggseq.svg?style=flat
   :target: https://anaconda.org/bioconda/kggseq
   :alt:   (downloads)
.. |docker_kggseq| image:: https://quay.io/repository/biocontainers/kggseq/status
   :target: https://quay.io/repository/biocontainers/kggseq
.. _`kggseq/tags`: https://quay.io/repository/biocontainers/kggseq?tab=tags


.. raw:: html

    <script>
        var package = "kggseq";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kggseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kggseq/README.html