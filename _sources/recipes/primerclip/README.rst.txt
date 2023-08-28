:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primerclip'
.. highlight: bash

primerclip
==========

.. conda:recipe:: primerclip
   :replaces_section_title:
   :noindex:

   Swift Accel\-Amplicon primer trimming tool for fast alignment\-based primer trimming

   :homepage: https://github.com/swiftbiosciences/primerclip
   :license: OTHER / Copyright Swift Biosciences Inc. (c) 2017
   :recipe: /`primerclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerclip/meta.yaml>`_

   


.. conda:package:: primerclip

   |downloads_primerclip| |docker_primerclip|

   :versions:
      
      

      ``0.3.8-1``,  ``0.3.8-0``

      

   
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

      mamba install primerclip

   and update with::

      mamba update primerclip

  To create a new environment, run::

      mamba create --name myenvname primerclip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/primerclip:<tag>

   (see `primerclip/tags`_ for valid values for ``<tag>``)


.. |downloads_primerclip| image:: https://img.shields.io/conda/dn/bioconda/primerclip.svg?style=flat
   :target: https://anaconda.org/bioconda/primerclip
   :alt:   (downloads)
.. |docker_primerclip| image:: https://quay.io/repository/biocontainers/primerclip/status
   :target: https://quay.io/repository/biocontainers/primerclip
.. _`primerclip/tags`: https://quay.io/repository/biocontainers/primerclip?tab=tags


.. raw:: html

    <script>
        var package = "primerclip";
        var versions = ["0.3.8","0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primerclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primerclip/README.html