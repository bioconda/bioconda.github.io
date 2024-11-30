:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-parsec'
.. highlight: bash

galaxy-parsec
=============

.. conda:recipe:: galaxy-parsec
   :replaces_section_title:
   :noindex:

   Command\-line utilities to assist in interacting with Galaxy servers \(http\:\/\/galaxyproject.org\/\).

   :homepage: https://github.com/galaxy-iuc/parsec
   :license: MIT / MIT
   :recipe: /`galaxy-parsec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-parsec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-parsec/meta.yaml>`_

   


.. conda:package:: galaxy-parsec

   |downloads_galaxy-parsec| |docker_galaxy-parsec|

   :versions:
      
      

      ``1.16.0-0``,  ``1.15.0-0``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends bioblend: 
   :depends click: ``>=6.7``
   :depends future: 
   :depends justbackoff: 
   :depends python: 
   :depends pyyaml: 
   :depends wrapt: 
   :depends xunit-wrapper: ``>=0.12``
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

      mamba install galaxy-parsec

   and update with::

      mamba update galaxy-parsec

  To create a new environment, run::

      mamba create --name myenvname galaxy-parsec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-parsec:<tag>

   (see `galaxy-parsec/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-parsec| image:: https://img.shields.io/conda/dn/bioconda/galaxy-parsec.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-parsec
   :alt:   (downloads)
.. |docker_galaxy-parsec| image:: https://quay.io/repository/biocontainers/galaxy-parsec/status
   :target: https://quay.io/repository/biocontainers/galaxy-parsec
.. _`galaxy-parsec/tags`: https://quay.io/repository/biocontainers/galaxy-parsec?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-parsec";
        var versions = ["1.16.0","1.15.0","1.13.0","1.13.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-parsec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-parsec/README.html