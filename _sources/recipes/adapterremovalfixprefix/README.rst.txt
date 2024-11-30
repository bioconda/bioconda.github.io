:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adapterremovalfixprefix'
.. highlight: bash

adapterremovalfixprefix
=======================

.. conda:recipe:: adapterremovalfixprefix
   :replaces_section_title:
   :noindex:

   Fixes adapter removal prefixes to make sure no clashing read names are in the output.

   :homepage: https://github.com/apeltzer/AdapterRemovalFixPrefix
   :license: GPLv3
   :recipe: /`adapterremovalfixprefix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremovalfixprefix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremovalfixprefix/meta.yaml>`_

   


.. conda:package:: adapterremovalfixprefix

   |downloads_adapterremovalfixprefix| |docker_adapterremovalfixprefix|

   :versions:
      
      

      ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``

      

   
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

      mamba install adapterremovalfixprefix

   and update with::

      mamba update adapterremovalfixprefix

  To create a new environment, run::

      mamba create --name myenvname adapterremovalfixprefix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/adapterremovalfixprefix:<tag>

   (see `adapterremovalfixprefix/tags`_ for valid values for ``<tag>``)


.. |downloads_adapterremovalfixprefix| image:: https://img.shields.io/conda/dn/bioconda/adapterremovalfixprefix.svg?style=flat
   :target: https://anaconda.org/bioconda/adapterremovalfixprefix
   :alt:   (downloads)
.. |docker_adapterremovalfixprefix| image:: https://quay.io/repository/biocontainers/adapterremovalfixprefix/status
   :target: https://quay.io/repository/biocontainers/adapterremovalfixprefix
.. _`adapterremovalfixprefix/tags`: https://quay.io/repository/biocontainers/adapterremovalfixprefix?tab=tags


.. raw:: html

    <script>
        var package = "adapterremovalfixprefix";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adapterremovalfixprefix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adapterremovalfixprefix/README.html