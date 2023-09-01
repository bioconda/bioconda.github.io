:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'btrim'
.. highlight: bash

btrim
=====

.. conda:recipe:: btrim
   :replaces_section_title:
   :noindex:

   This tool is made to remove \"tips\" \(short dead ends\) from a compacted de Bruijn graph and more generally to remove sequencing errors. Used in Bcool a short read corrector \(https\:\/\/arxiv.org\/abs\/1711.03336\)

   :homepage: https://github.com/Malfoy/BTRIM
   :license: AGPL-3.0
   :recipe: /`btrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btrim/meta.yaml>`_

   


.. conda:package:: btrim

   |downloads_btrim| |docker_btrim|

   :versions:
      
      

      ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install btrim

   and update with::

      mamba update btrim

  To create a new environment, run::

      mamba create --name myenvname btrim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/btrim:<tag>

   (see `btrim/tags`_ for valid values for ``<tag>``)


.. |downloads_btrim| image:: https://img.shields.io/conda/dn/bioconda/btrim.svg?style=flat
   :target: https://anaconda.org/bioconda/btrim
   :alt:   (downloads)
.. |docker_btrim| image:: https://quay.io/repository/biocontainers/btrim/status
   :target: https://quay.io/repository/biocontainers/btrim
.. _`btrim/tags`: https://quay.io/repository/biocontainers/btrim?tab=tags


.. raw:: html

    <script>
        var package = "btrim";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/btrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/btrim/README.html