:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'migraine'
.. highlight: bash

migraine
========

.. conda:recipe:: migraine
   :replaces_section_title:
   :noindex:

   Implements coalescent algorithms for maximum likelihood analysis of population genetic data. The data currently  handled are allelic counts but sequences will be handled in the forthcoming version.

   :homepage: http://kimura.univ-montp2.fr/~rousset/Migraine.htm
   :license: CeCILL
   :recipe: /`migraine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migraine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/migraine/meta.yaml>`_
   :links: biotools: :biotools:`Migraine`, doi: :doi:`10.1093/molbev/msu212`

   


.. conda:package:: migraine

   |downloads_migraine| |docker_migraine|

   :versions:
      
      

      ``0.6.0-3``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.2-0``

      

   
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

      mamba install migraine

   and update with::

      mamba update migraine

  To create a new environment, run::

      mamba create --name myenvname migraine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/migraine:<tag>

   (see `migraine/tags`_ for valid values for ``<tag>``)


.. |downloads_migraine| image:: https://img.shields.io/conda/dn/bioconda/migraine.svg?style=flat
   :target: https://anaconda.org/bioconda/migraine
   :alt:   (downloads)
.. |docker_migraine| image:: https://quay.io/repository/biocontainers/migraine/status
   :target: https://quay.io/repository/biocontainers/migraine
.. _`migraine/tags`: https://quay.io/repository/biocontainers/migraine?tab=tags


.. raw:: html

    <script>
        var package = "migraine";
        var versions = ["0.6.0","0.6.0","0.6.0","0.6.0","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/migraine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/migraine/README.html