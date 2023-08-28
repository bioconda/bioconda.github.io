:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aodp'
.. highlight: bash

aodp
====

.. conda:recipe:: aodp
   :replaces_section_title:
   :noindex:

   Cluster oligonucleotide signatures for rapid identification by sequencing

   :homepage: https://github.com/peterk87/aodp
   :license: GPL-3.0-only
   :recipe: /`aodp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aodp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aodp/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2363-3`

   


.. conda:package:: aodp

   |downloads_aodp| |docker_aodp|

   :versions:
      
      

      ``2.5.0.2-1``,  ``2.5.0.2-0``,  ``2.5.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-list-moreutils: 
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

      mamba install aodp

   and update with::

      mamba update aodp

  To create a new environment, run::

      mamba create --name myenvname aodp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aodp:<tag>

   (see `aodp/tags`_ for valid values for ``<tag>``)


.. |downloads_aodp| image:: https://img.shields.io/conda/dn/bioconda/aodp.svg?style=flat
   :target: https://anaconda.org/bioconda/aodp
   :alt:   (downloads)
.. |docker_aodp| image:: https://quay.io/repository/biocontainers/aodp/status
   :target: https://quay.io/repository/biocontainers/aodp
.. _`aodp/tags`: https://quay.io/repository/biocontainers/aodp?tab=tags


.. raw:: html

    <script>
        var package = "aodp";
        var versions = ["2.5.0.2","2.5.0.2","2.5.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aodp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aodp/README.html