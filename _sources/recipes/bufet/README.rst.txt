:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bufet'
.. highlight: bash

bufet
=====

.. conda:recipe:: bufet
   :replaces_section_title:
   :noindex:

   Tool that performs the unbiased miRNA functional enrichment analysis \(Bleazard et al.\) requiring significantly reduced excution times \(less than 10 minutes for 1 million iterations\).

   :homepage: https://github.com/diwis/BUFET/
   :license: file
   :recipe: /`bufet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bufet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bufet/meta.yaml>`_
   :links: biotools: :biotools:`BUFET`, doi: :doi:`10.1186/s12859-017-1812-8`

   


.. conda:package:: bufet

   |downloads_bufet| |docker_bufet|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
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

      mamba install bufet

   and update with::

      mamba update bufet

  To create a new environment, run::

      mamba create --name myenvname bufet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bufet:<tag>

   (see `bufet/tags`_ for valid values for ``<tag>``)


.. |downloads_bufet| image:: https://img.shields.io/conda/dn/bioconda/bufet.svg?style=flat
   :target: https://anaconda.org/bioconda/bufet
   :alt:   (downloads)
.. |docker_bufet| image:: https://quay.io/repository/biocontainers/bufet/status
   :target: https://quay.io/repository/biocontainers/bufet
.. _`bufet/tags`: https://quay.io/repository/biocontainers/bufet?tab=tags


.. raw:: html

    <script>
        var package = "bufet";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bufet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bufet/README.html