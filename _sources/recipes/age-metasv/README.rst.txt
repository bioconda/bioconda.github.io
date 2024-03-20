:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'age-metasv'
.. highlight: bash

age-metasv
==========

.. conda:recipe:: age-metasv
   :replaces_section_title:
   :noindex:

   optimal alignment of sequences with structural variants \(SVs\)\, modifiied for MetaSV integration

   :homepage: https://github.com/marghoob/AGE/tree/simple-parseable-output
   :license: CCPL (Creative Commons Public License)
   :recipe: /`age-metasv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/age-metasv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/age-metasv/meta.yaml>`_

   


.. conda:package:: age-metasv

   |downloads_age-metasv| |docker_age-metasv|

   :versions:
      
      

      ``2015.01.29.3-8``,  ``2015.01.29.3-7``,  ``2015.01.29.3-6``,  ``2015.01.29.3-5``,  ``2015.01.29.3-4``,  ``2015.01.29.3-3``,  ``2015.01.29.3-2``,  ``2015.01.29.3-1``,  ``2015.01.29.3-0``

      

   
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

      mamba install age-metasv

   and update with::

      mamba update age-metasv

  To create a new environment, run::

      mamba create --name myenvname age-metasv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/age-metasv:<tag>

   (see `age-metasv/tags`_ for valid values for ``<tag>``)


.. |downloads_age-metasv| image:: https://img.shields.io/conda/dn/bioconda/age-metasv.svg?style=flat
   :target: https://anaconda.org/bioconda/age-metasv
   :alt:   (downloads)
.. |docker_age-metasv| image:: https://quay.io/repository/biocontainers/age-metasv/status
   :target: https://quay.io/repository/biocontainers/age-metasv
.. _`age-metasv/tags`: https://quay.io/repository/biocontainers/age-metasv?tab=tags


.. raw:: html

    <script>
        var package = "age-metasv";
        var versions = ["2015.01.29.3","2015.01.29.3","2015.01.29.3","2015.01.29.3","2015.01.29.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/age-metasv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/age-metasv/README.html