:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eoulsan'
.. highlight: bash

eoulsan
=======

.. conda:recipe:: eoulsan
   :replaces_section_title:
   :noindex:

   A pipeline and a framework for NGS analysis \(RNA\-Seq and Chip\-Seq\)

   :homepage: http://www.tools.genomique.biologie.ens.fr/eoulsan/
   :developer docs: https://github.com/GenomicParisCentre/eoulsan
   :license: GPL / LGPL
   :recipe: /`eoulsan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eoulsan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eoulsan/meta.yaml>`_

   


.. conda:package:: eoulsan

   |downloads_eoulsan| |docker_eoulsan|

   :versions:
      
      

      ``2.5-0``,  ``2.4-1``,  ``2.4-0``,  ``2.3-1``,  ``2.3-0``,  ``2.2-0``,  ``2.0_beta4-1``

      

   
   :depends openjdk: 
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

      mamba install eoulsan

   and update with::

      mamba update eoulsan

  To create a new environment, run::

      mamba create --name myenvname eoulsan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eoulsan:<tag>

   (see `eoulsan/tags`_ for valid values for ``<tag>``)


.. |downloads_eoulsan| image:: https://img.shields.io/conda/dn/bioconda/eoulsan.svg?style=flat
   :target: https://anaconda.org/bioconda/eoulsan
   :alt:   (downloads)
.. |docker_eoulsan| image:: https://quay.io/repository/biocontainers/eoulsan/status
   :target: https://quay.io/repository/biocontainers/eoulsan
.. _`eoulsan/tags`: https://quay.io/repository/biocontainers/eoulsan?tab=tags


.. raw:: html

    <script>
        var package = "eoulsan";
        var versions = ["2.5","2.4","2.4","2.3","2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eoulsan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eoulsan/README.html