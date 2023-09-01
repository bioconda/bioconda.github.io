:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pplacer'
.. highlight: bash

pplacer
=======

.. conda:recipe:: pplacer
   :replaces_section_title:
   :noindex:

   Pplacer places query sequences on a fixed reference phylogenetic tree to maximize phylogenetic likelihood or posterior probability according to a reference alignment.

   :homepage: http://matsen.fredhutch.org/pplacer/
   :developer docs: https://github.com/matsen/pplacer/
   :license: GPL / GPL-3.0
   :recipe: /`pplacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pplacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pplacer/meta.yaml>`_

   


.. conda:package:: pplacer

   |downloads_pplacer| |docker_pplacer|

   :versions:
      
      

      ``1.1.alpha19-2``,  ``1.1.alpha19-1``,  ``1.1.alpha19-0``,  ``1.1.alpha17-0``

      

   
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

      mamba install pplacer

   and update with::

      mamba update pplacer

  To create a new environment, run::

      mamba create --name myenvname pplacer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pplacer:<tag>

   (see `pplacer/tags`_ for valid values for ``<tag>``)


.. |downloads_pplacer| image:: https://img.shields.io/conda/dn/bioconda/pplacer.svg?style=flat
   :target: https://anaconda.org/bioconda/pplacer
   :alt:   (downloads)
.. |docker_pplacer| image:: https://quay.io/repository/biocontainers/pplacer/status
   :target: https://quay.io/repository/biocontainers/pplacer
.. _`pplacer/tags`: https://quay.io/repository/biocontainers/pplacer?tab=tags


.. raw:: html

    <script>
        var package = "pplacer";
        var versions = ["1.1.alpha19","1.1.alpha19","1.1.alpha19","1.1.alpha17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pplacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pplacer/README.html