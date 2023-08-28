:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'karect'
.. highlight: bash

karect
======

.. conda:recipe:: karect
   :replaces_section_title:
   :noindex:

   Read error correction tool based on multiple alignment.


   :homepage: https://github.com/aminallam/karect
   :documentation: https://github.com/aminallam/karect/blob/master/karect_manual.pdf
   
   :license: GPL / GPLv2
   :recipe: /`karect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/karect/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv415`

   


.. conda:package:: karect

   |downloads_karect| |docker_karect|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
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

      mamba install karect

   and update with::

      mamba update karect

  To create a new environment, run::

      mamba create --name myenvname karect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/karect:<tag>

   (see `karect/tags`_ for valid values for ``<tag>``)


.. |downloads_karect| image:: https://img.shields.io/conda/dn/bioconda/karect.svg?style=flat
   :target: https://anaconda.org/bioconda/karect
   :alt:   (downloads)
.. |docker_karect| image:: https://quay.io/repository/biocontainers/karect/status
   :target: https://quay.io/repository/biocontainers/karect
.. _`karect/tags`: https://quay.io/repository/biocontainers/karect?tab=tags


.. raw:: html

    <script>
        var package = "karect";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/karect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/karect/README.html