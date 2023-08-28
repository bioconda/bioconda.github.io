:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastsimbac'
.. highlight: bash

fastsimbac
==========

.. conda:recipe:: fastsimbac
   :replaces_section_title:
   :noindex:

   Models bacterial recombination

   :homepage: https://bitbucket.org/nicofmay/fastsimbac/
   :license: GPL
   :recipe: /`fastsimbac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastsimbac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastsimbac/meta.yaml>`_

   


.. conda:package:: fastsimbac

   |downloads_fastsimbac| |docker_fastsimbac|

   :versions:
      
      

      ``1.0.1_bd3ad13d8f79-5``,  ``1.0.1_bd3ad13d8f79-4``,  ``1.0.1_bd3ad13d8f79-3``,  ``1.0.1_bd3ad13d8f79-2``,  ``1.0.1_bd3ad13d8f79-1``,  ``1.0.1_bd3ad13d8f79-0``

      

   
   :depends boost: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fastsimbac

   and update with::

      mamba update fastsimbac

  To create a new environment, run::

      mamba create --name myenvname fastsimbac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastsimbac:<tag>

   (see `fastsimbac/tags`_ for valid values for ``<tag>``)


.. |downloads_fastsimbac| image:: https://img.shields.io/conda/dn/bioconda/fastsimbac.svg?style=flat
   :target: https://anaconda.org/bioconda/fastsimbac
   :alt:   (downloads)
.. |docker_fastsimbac| image:: https://quay.io/repository/biocontainers/fastsimbac/status
   :target: https://quay.io/repository/biocontainers/fastsimbac
.. _`fastsimbac/tags`: https://quay.io/repository/biocontainers/fastsimbac?tab=tags


.. raw:: html

    <script>
        var package = "fastsimbac";
        var versions = ["1.0.1_bd3ad13d8f79","1.0.1_bd3ad13d8f79","1.0.1_bd3ad13d8f79","1.0.1_bd3ad13d8f79","1.0.1_bd3ad13d8f79"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastsimbac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastsimbac/README.html