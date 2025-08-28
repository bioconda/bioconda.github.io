:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comparems2'
.. highlight: bash

comparems2
==========

.. conda:recipe:: comparems2
   :replaces_section_title:
   :noindex:

   A simple tool developed to compare\, globally\, all MS\/MS spectra between two datasets \(in Mascot Generic Format or MGF\).

   :homepage: http://www.ms-utils.org/compareMS2.html
   :license: GPL3
   :recipe: /`comparems2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparems2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparems2/meta.yaml>`_
   :links: biotools: :biotools:`comparems2`, doi: :doi:`10.1002/rcm.6162`

   


.. conda:package:: comparems2

   |downloads_comparems2| |docker_comparems2|

   :versions:
      
      

      ``1-6``,  ``1-5``,  ``1-4``,  ``1-3``,  ``1-2``,  ``1-1``,  ``1-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install comparems2

   and update with::

      mamba update comparems2

  To create a new environment, run::

      mamba create --name myenvname comparems2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/comparems2:<tag>

   (see `comparems2/tags`_ for valid values for ``<tag>``)


.. |downloads_comparems2| image:: https://img.shields.io/conda/dn/bioconda/comparems2.svg?style=flat
   :target: https://anaconda.org/bioconda/comparems2
   :alt:   (downloads)
.. |docker_comparems2| image:: https://quay.io/repository/biocontainers/comparems2/status
   :target: https://quay.io/repository/biocontainers/comparems2
.. _`comparems2/tags`: https://quay.io/repository/biocontainers/comparems2?tab=tags


.. raw:: html

    <script>
        var package = "comparems2";
        var versions = ["1","1","1","1","1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comparems2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comparems2/README.html