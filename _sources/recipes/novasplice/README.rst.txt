:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novasplice'
.. highlight: bash

novasplice
==========

.. conda:recipe:: novasplice
   :replaces_section_title:
   :noindex:

   NovaSplice is a python tool to predict novel intronic splice sites from a given VCF file

   :homepage: https://github.com/aryakaul/novasplice
   :license: MIT
   :recipe: /`novasplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novasplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novasplice/meta.yaml>`_

   


.. conda:package:: novasplice

   |downloads_novasplice| |docker_novasplice|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends argparse: 
   :depends maxentpy: 
   :depends pybedtools: 
   :depends python: ``>=3``
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

      mamba install novasplice

   and update with::

      mamba update novasplice

  To create a new environment, run::

      mamba create --name myenvname novasplice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/novasplice:<tag>

   (see `novasplice/tags`_ for valid values for ``<tag>``)


.. |downloads_novasplice| image:: https://img.shields.io/conda/dn/bioconda/novasplice.svg?style=flat
   :target: https://anaconda.org/bioconda/novasplice
   :alt:   (downloads)
.. |docker_novasplice| image:: https://quay.io/repository/biocontainers/novasplice/status
   :target: https://quay.io/repository/biocontainers/novasplice
.. _`novasplice/tags`: https://quay.io/repository/biocontainers/novasplice?tab=tags


.. raw:: html

    <script>
        var package = "novasplice";
        var versions = ["0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novasplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novasplice/README.html