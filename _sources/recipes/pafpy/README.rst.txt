:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pafpy'
.. highlight: bash

pafpy
=====

.. conda:recipe:: pafpy
   :replaces_section_title:
   :noindex:

   A lightweight library for working with PAF \(Pairwise mApping Format\) files

   :homepage: https://github.com/mbhall88/pafpy
   :documentation: https://pafpy.xyz
   
   :license: OTHER / Unlicense
   :recipe: /`pafpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pafpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pafpy/meta.yaml>`_

   


.. conda:package:: pafpy

   |downloads_pafpy| |docker_pafpy|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends python: ``>=3.6``
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

      mamba install pafpy

   and update with::

      mamba update pafpy

  To create a new environment, run::

      mamba create --name myenvname pafpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pafpy:<tag>

   (see `pafpy/tags`_ for valid values for ``<tag>``)


.. |downloads_pafpy| image:: https://img.shields.io/conda/dn/bioconda/pafpy.svg?style=flat
   :target: https://anaconda.org/bioconda/pafpy
   :alt:   (downloads)
.. |docker_pafpy| image:: https://quay.io/repository/biocontainers/pafpy/status
   :target: https://quay.io/repository/biocontainers/pafpy
.. _`pafpy/tags`: https://quay.io/repository/biocontainers/pafpy?tab=tags


.. raw:: html

    <script>
        var package = "pafpy";
        var versions = ["0.2.0","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pafpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pafpy/README.html