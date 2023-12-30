:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-modcon'
.. highlight: bash

bioconductor-modcon
===================

.. conda:recipe:: bioconductor-modcon
   :replaces_section_title:
   :noindex:

   Modifying splice site usage by changing the mRNP code\, while maintaining the genetic code

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ModCon.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-modcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-modcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-modcon/meta.yaml>`_

   Collection of functions to calculate a nucleotide sequence surrounding for splice donors sites to either activate or repress donor usage. The proposed alternative nucleotide sequence encodes the same amino acid and could be applied e.g. in reporter systems to silence or activate cryptic splice donor sites.


.. conda:package:: bioconductor-modcon

   |downloads_bioconductor-modcon| |docker_bioconductor-modcon|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl: ``>=5.6.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
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

      mamba install bioconductor-modcon

   and update with::

      mamba update bioconductor-modcon

  To create a new environment, run::

      mamba create --name myenvname bioconductor-modcon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-modcon:<tag>

   (see `bioconductor-modcon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-modcon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-modcon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-modcon
   :alt:   (downloads)
.. |docker_bioconductor-modcon| image:: https://quay.io/repository/biocontainers/bioconductor-modcon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-modcon
.. _`bioconductor-modcon/tags`: https://quay.io/repository/biocontainers/bioconductor-modcon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-modcon";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-modcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-modcon/README.html