:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgmp'
.. highlight: bash

fgmp
====

.. conda:recipe:: fgmp
   :replaces_section_title:
   :noindex:

   FGMP\: assessing fungal genome completeness and gene content.

   :homepage: https://github.com/stajichlab/FGMP
   :license: MIT
   :recipe: /`fgmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgmp/meta.yaml>`_
   :links: biotools: :biotools:`fgmp`, doi: :doi:`10.1101/049619`

   


.. conda:package:: fgmp

   |downloads_fgmp| |docker_fgmp|

   :versions:
      
      

      ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends augustus: ``>=3.2.3``
   :depends blast: ``>=2.2.31``
   :depends emboss: ``>=6.5.7``
   :depends exonerate: ``>=2.2.0``
   :depends hmmer: ``>=3.0``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-bioperl: 
   :depends perl-ipc-run: 
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

      mamba install fgmp

   and update with::

      mamba update fgmp

  To create a new environment, run::

      mamba create --name myenvname fgmp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fgmp:<tag>

   (see `fgmp/tags`_ for valid values for ``<tag>``)


.. |downloads_fgmp| image:: https://img.shields.io/conda/dn/bioconda/fgmp.svg?style=flat
   :target: https://anaconda.org/bioconda/fgmp
   :alt:   (downloads)
.. |docker_fgmp| image:: https://quay.io/repository/biocontainers/fgmp/status
   :target: https://quay.io/repository/biocontainers/fgmp
.. _`fgmp/tags`: https://quay.io/repository/biocontainers/fgmp?tab=tags


.. raw:: html

    <script>
        var package = "fgmp";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgmp/README.html