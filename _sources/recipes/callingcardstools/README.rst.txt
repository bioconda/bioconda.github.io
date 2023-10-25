:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'callingcardstools'
.. highlight: bash

callingcardstools
=================

.. conda:recipe:: callingcardstools
   :replaces_section_title:
   :noindex:

   An API and collection of cmd line tools to work with calling cards sequencing data

   :homepage: https://github.com/cmatKhan/callingCardsTools
   :documentation: https://cmatkhan.github.io/callingCardsTools/
   
   :developer docs: https://github.com/cmatKhan/callingCardsTools/tree/dev
   :license: MIT / MIT
   :recipe: /`callingcardstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callingcardstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callingcardstools/meta.yaml>`_

   


.. conda:package:: callingcardstools

   |downloads_callingcardstools| |docker_callingcardstools|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends python-edlib: ``>=1.3.9``
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

      mamba install callingcardstools

   and update with::

      mamba update callingcardstools

  To create a new environment, run::

      mamba create --name myenvname callingcardstools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/callingcardstools:<tag>

   (see `callingcardstools/tags`_ for valid values for ``<tag>``)


.. |downloads_callingcardstools| image:: https://img.shields.io/conda/dn/bioconda/callingcardstools.svg?style=flat
   :target: https://anaconda.org/bioconda/callingcardstools
   :alt:   (downloads)
.. |docker_callingcardstools| image:: https://quay.io/repository/biocontainers/callingcardstools/status
   :target: https://quay.io/repository/biocontainers/callingcardstools
.. _`callingcardstools/tags`: https://quay.io/repository/biocontainers/callingcardstools?tab=tags


.. raw:: html

    <script>
        var package = "callingcardstools";
        var versions = ["1.1.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/callingcardstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/callingcardstools/README.html