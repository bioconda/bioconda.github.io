:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primerforge'
.. highlight: bash

primerforge
===========

.. conda:recipe:: primerforge
   :replaces_section_title:
   :noindex:

   primerForge\: software to identify primers that can be used to distinguish genomes.

   :homepage: https://github.com/dr-joe-wirth/primerForge
   :documentation: https://github.com/dr-joe-wirth/primerForge/blob/v1.5.2/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`primerforge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerforge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerforge/meta.yaml>`_

   


.. conda:package:: primerforge

   |downloads_primerforge| |docker_primerforge|

   :versions:
      
      

      ``1.5.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.0-0``,  ``0.7.4-0``

      

   
   :depends biopython: ``1.81``
   :depends ispcr: 
   :depends khmer: ``>=2.1.1``
   :depends numpy: 
   :depends primer3-py: ``>=2.0``
   :depends pyahocorasick: 
   :depends python: ``>=3.9,<3.12``
   :depends scipy: ``>=1.10``
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

      mamba install primerforge

   and update with::

      mamba update primerforge

  To create a new environment, run::

      mamba create --name myenvname primerforge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/primerforge:<tag>

   (see `primerforge/tags`_ for valid values for ``<tag>``)


.. |downloads_primerforge| image:: https://img.shields.io/conda/dn/bioconda/primerforge.svg?style=flat
   :target: https://anaconda.org/bioconda/primerforge
   :alt:   (downloads)
.. |docker_primerforge| image:: https://quay.io/repository/biocontainers/primerforge/status
   :target: https://quay.io/repository/biocontainers/primerforge
.. _`primerforge/tags`: https://quay.io/repository/biocontainers/primerforge?tab=tags


.. raw:: html

    <script>
        var package = "primerforge";
        var versions = ["1.5.2","1.1.1","1.1.0","1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primerforge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primerforge/README.html