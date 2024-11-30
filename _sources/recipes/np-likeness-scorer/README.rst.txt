:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'np-likeness-scorer'
.. highlight: bash

np-likeness-scorer
==================

.. conda:recipe:: np-likeness-scorer
   :replaces_section_title:
   :noindex:

   Calculates Natural Product\(NP\)\-likeness of a molecule\, i.e. the similarity of the molecule to the structure space covered by known natural products. NP\-likeness is a useful criterion to screen compound libraries and to design new lead compounds

   :homepage: https://sourceforge.net/projects/np-likeness/
   :license: None
   :recipe: /`np-likeness-scorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/np-likeness-scorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/np-likeness-scorer/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-13-106`, usegalaxy-eu: :usegalaxy-eu:`ctb_np-likeness-calculator`

   


.. conda:package:: np-likeness-scorer

   |downloads_np-likeness-scorer| |docker_np-likeness-scorer|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends openjdk: ``>=6``
   :depends python: ``2.7*``
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

      mamba install np-likeness-scorer

   and update with::

      mamba update np-likeness-scorer

  To create a new environment, run::

      mamba create --name myenvname np-likeness-scorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/np-likeness-scorer:<tag>

   (see `np-likeness-scorer/tags`_ for valid values for ``<tag>``)


.. |downloads_np-likeness-scorer| image:: https://img.shields.io/conda/dn/bioconda/np-likeness-scorer.svg?style=flat
   :target: https://anaconda.org/bioconda/np-likeness-scorer
   :alt:   (downloads)
.. |docker_np-likeness-scorer| image:: https://quay.io/repository/biocontainers/np-likeness-scorer/status
   :target: https://quay.io/repository/biocontainers/np-likeness-scorer
.. _`np-likeness-scorer/tags`: https://quay.io/repository/biocontainers/np-likeness-scorer?tab=tags


.. raw:: html

    <script>
        var package = "np-likeness-scorer";
        var versions = ["2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/np-likeness-scorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/np-likeness-scorer/README.html