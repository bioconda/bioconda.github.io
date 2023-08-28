:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorma'
.. highlight: bash

lorma
=====

.. conda:recipe:: lorma
   :replaces_section_title:
   :noindex:

   LoRMA is a tool for correcting sequencing errors in long reads.

   :homepage: https://www.cs.helsinki.fi/u/lmsalmel/LoRMA/
   :license: GNU Affero General Public License v3.0
   :recipe: /`lorma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorma/meta.yaml>`_

   


.. conda:package:: lorma

   |downloads_lorma| |docker_lorma|

   :versions:
      
      

      ``0.4-2``,  ``0.4-1``,  ``0.4-0``

      

   
   :depends libgcc: 
   :depends lordec: 
   :depends zlib: ``1.2.11*``
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

      mamba install lorma

   and update with::

      mamba update lorma

  To create a new environment, run::

      mamba create --name myenvname lorma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lorma:<tag>

   (see `lorma/tags`_ for valid values for ``<tag>``)


.. |downloads_lorma| image:: https://img.shields.io/conda/dn/bioconda/lorma.svg?style=flat
   :target: https://anaconda.org/bioconda/lorma
   :alt:   (downloads)
.. |docker_lorma| image:: https://quay.io/repository/biocontainers/lorma/status
   :target: https://quay.io/repository/biocontainers/lorma
.. _`lorma/tags`: https://quay.io/repository/biocontainers/lorma?tab=tags


.. raw:: html

    <script>
        var package = "lorma";
        var versions = ["0.4","0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorma/README.html