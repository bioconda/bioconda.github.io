:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'inforna'
.. highlight: bash

inforna
=======

.. conda:recipe:: inforna
   :replaces_section_title:
   :noindex:

   A server for the design of RNA sequences that fold into a given pseudo\-knot free RNA secondary structure.

   :homepage: https://github.com/BackofenLab/INFO-RNA
   :license: MIT-like
   :recipe: /`inforna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inforna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inforna/meta.yaml>`_
   :links: biotools: :biotools:`inforna`

   


.. conda:package:: inforna

   |downloads_inforna| |docker_inforna|

   :versions:
      
      

      ``2.1.2-6``,  ``2.1.2-5``,  ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends viennarna: ``>=2.5.1,<2.6.0a0``
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

      mamba install inforna

   and update with::

      mamba update inforna

  To create a new environment, run::

      mamba create --name myenvname inforna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/inforna:<tag>

   (see `inforna/tags`_ for valid values for ``<tag>``)


.. |downloads_inforna| image:: https://img.shields.io/conda/dn/bioconda/inforna.svg?style=flat
   :target: https://anaconda.org/bioconda/inforna
   :alt:   (downloads)
.. |docker_inforna| image:: https://quay.io/repository/biocontainers/inforna/status
   :target: https://quay.io/repository/biocontainers/inforna
.. _`inforna/tags`: https://quay.io/repository/biocontainers/inforna?tab=tags


.. raw:: html

    <script>
        var package = "inforna";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/inforna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/inforna/README.html