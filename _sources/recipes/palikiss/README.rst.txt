:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'palikiss'
.. highlight: bash

palikiss
========

.. conda:recipe:: palikiss
   :replaces_section_title:
   :noindex:

   pAliKiss predicts RNA secondary structures for fixed RNA multiple sequence alignments\, with special attention for pseudoknotted structures.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/palikiss
   :license: GPL-3.0-or-later
   :recipe: /`palikiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/palikiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/palikiss/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-642-15294-8_5`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: palikiss

   |downloads_palikiss| |docker_palikiss|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bellmans-gapc: ``>=2024.01.12``
   :depends bellmans-gapc: ``>=2024.1.12``
   :depends libgcc-ng: ``>=12``
   :depends libopenblas: ``>=0.3.27,<1.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install palikiss

   and update with::

      mamba update palikiss

  To create a new environment, run::

      mamba create --name myenvname palikiss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/palikiss:<tag>

   (see `palikiss/tags`_ for valid values for ``<tag>``)


.. |downloads_palikiss| image:: https://img.shields.io/conda/dn/bioconda/palikiss.svg?style=flat
   :target: https://anaconda.org/bioconda/palikiss
   :alt:   (downloads)
.. |docker_palikiss| image:: https://quay.io/repository/biocontainers/palikiss/status
   :target: https://quay.io/repository/biocontainers/palikiss
.. _`palikiss/tags`: https://quay.io/repository/biocontainers/palikiss?tab=tags


.. raw:: html

    <script>
        var package = "palikiss";
        var versions = ["1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/palikiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/palikiss/README.html