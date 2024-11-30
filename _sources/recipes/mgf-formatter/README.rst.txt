:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgf-formatter'
.. highlight: bash

mgf-formatter
=============

.. conda:recipe:: mgf-formatter
   :replaces_section_title:
   :noindex:

   Tools for convert peak lists into MGF files formatted for particular downstream applications

   :homepage: https://bitbucket.org/galaxyp-applications/mgf-formatter
   :license: Eclipse Public License
   :recipe: /`mgf-formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgf-formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgf-formatter/meta.yaml>`_

   


.. conda:package:: mgf-formatter

   |downloads_mgf-formatter| |docker_mgf-formatter|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends openjdk: 
   :depends python: 
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

      mamba install mgf-formatter

   and update with::

      mamba update mgf-formatter

  To create a new environment, run::

      mamba create --name myenvname mgf-formatter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgf-formatter:<tag>

   (see `mgf-formatter/tags`_ for valid values for ``<tag>``)


.. |downloads_mgf-formatter| image:: https://img.shields.io/conda/dn/bioconda/mgf-formatter.svg?style=flat
   :target: https://anaconda.org/bioconda/mgf-formatter
   :alt:   (downloads)
.. |docker_mgf-formatter| image:: https://quay.io/repository/biocontainers/mgf-formatter/status
   :target: https://quay.io/repository/biocontainers/mgf-formatter
.. _`mgf-formatter/tags`: https://quay.io/repository/biocontainers/mgf-formatter?tab=tags


.. raw:: html

    <script>
        var package = "mgf-formatter";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgf-formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgf-formatter/README.html