:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peregrine-2021'
.. highlight: bash

peregrine-2021
==============

.. conda:recipe:: peregrine-2021
   :replaces_section_title:
   :noindex:

   A genome assembler designed for long\-reads that have good enough accuracy

   :homepage: https://github.com/cschin/peregrine-2021
   :license: CC / CC BY-NC-SA 4.0
   :recipe: /`peregrine-2021 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peregrine-2021>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peregrine-2021/meta.yaml>`_

   


.. conda:package:: peregrine-2021

   |downloads_peregrine-2021| |docker_peregrine-2021|

   :versions:
      
      

      ``0.4.13-3``,  ``0.4.13-2``,  ``0.4.13-1``,  ``0.4.13-0``,  ``0.4.12-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends parallel: 
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

      mamba install peregrine-2021

   and update with::

      mamba update peregrine-2021

  To create a new environment, run::

      mamba create --name myenvname peregrine-2021

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peregrine-2021:<tag>

   (see `peregrine-2021/tags`_ for valid values for ``<tag>``)


.. |downloads_peregrine-2021| image:: https://img.shields.io/conda/dn/bioconda/peregrine-2021.svg?style=flat
   :target: https://anaconda.org/bioconda/peregrine-2021
   :alt:   (downloads)
.. |docker_peregrine-2021| image:: https://quay.io/repository/biocontainers/peregrine-2021/status
   :target: https://quay.io/repository/biocontainers/peregrine-2021
.. _`peregrine-2021/tags`: https://quay.io/repository/biocontainers/peregrine-2021?tab=tags


.. raw:: html

    <script>
        var package = "peregrine-2021";
        var versions = ["0.4.13","0.4.13","0.4.13","0.4.13","0.4.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peregrine-2021/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peregrine-2021/README.html