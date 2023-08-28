:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ac-diamond'
.. highlight: bash

ac-diamond
==========

.. conda:recipe:: ac-diamond
   :replaces_section_title:
   :noindex:

   AC\-DIAMOND is a DNA\-protein alignment tool

   :homepage: https://github.com/Maihj/AC-DIAMOND
   :license: GNU Affero General Public License v3.0
   :recipe: /`ac-diamond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac-diamond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ac-diamond/meta.yaml>`_

   


.. conda:package:: ac-diamond

   |downloads_ac-diamond| |docker_ac-diamond|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends boost-cpp: ``>=1.82.0,<1.82.1.0a0``
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

      mamba install ac-diamond

   and update with::

      mamba update ac-diamond

  To create a new environment, run::

      mamba create --name myenvname ac-diamond

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ac-diamond:<tag>

   (see `ac-diamond/tags`_ for valid values for ``<tag>``)


.. |downloads_ac-diamond| image:: https://img.shields.io/conda/dn/bioconda/ac-diamond.svg?style=flat
   :target: https://anaconda.org/bioconda/ac-diamond
   :alt:   (downloads)
.. |docker_ac-diamond| image:: https://quay.io/repository/biocontainers/ac-diamond/status
   :target: https://quay.io/repository/biocontainers/ac-diamond
.. _`ac-diamond/tags`: https://quay.io/repository/biocontainers/ac-diamond?tab=tags


.. raw:: html

    <script>
        var package = "ac-diamond";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ac-diamond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ac-diamond/README.html