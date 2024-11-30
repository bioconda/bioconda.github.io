:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sfld'
.. highlight: bash

sfld
====

.. conda:recipe:: sfld
   :replaces_section_title:
   :noindex:

   SFLD pre\/post\-processing

   :homepage: https://github.com/ebi-pf-team/interproscan
   :license: Apache
   :recipe: /`sfld <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfld>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfld/meta.yaml>`_

   


.. conda:package:: sfld

   |downloads_sfld| |docker_sfld|

   :versions:
      
      

      ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install sfld

   and update with::

      mamba update sfld

  To create a new environment, run::

      mamba create --name myenvname sfld

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sfld:<tag>

   (see `sfld/tags`_ for valid values for ``<tag>``)


.. |downloads_sfld| image:: https://img.shields.io/conda/dn/bioconda/sfld.svg?style=flat
   :target: https://anaconda.org/bioconda/sfld
   :alt:   (downloads)
.. |docker_sfld| image:: https://quay.io/repository/biocontainers/sfld/status
   :target: https://quay.io/repository/biocontainers/sfld
.. _`sfld/tags`: https://quay.io/repository/biocontainers/sfld?tab=tags


.. raw:: html

    <script>
        var package = "sfld";
        var versions = ["1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sfld/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sfld/README.html