:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rambo-k'
.. highlight: bash

rambo-k
=======

.. conda:recipe:: rambo-k
   :replaces_section_title:
   :noindex:

   a reference\-based tool for rapid and sensitive extraction of one organism´s reads from a mixed NGS dataset

   :homepage: https://gitlab.com/SimonHTausch/RAMBO-K
   :license: GNU Lesser General Public License v3.0
   :recipe: /`rambo-k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rambo-k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rambo-k/meta.yaml>`_

   


.. conda:package:: rambo-k

   |downloads_rambo-k| |docker_rambo-k|

   :versions:
      
      

      ``1.21-1``,  ``1.21-0``

      

   
   :depends argparse: 
   :depends matplotlib: 
   :depends numpy: 
   :depends openjdk: 
   :depends python: 
   :depends scikit-learn: 
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

      mamba install rambo-k

   and update with::

      mamba update rambo-k

  To create a new environment, run::

      mamba create --name myenvname rambo-k

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rambo-k:<tag>

   (see `rambo-k/tags`_ for valid values for ``<tag>``)


.. |downloads_rambo-k| image:: https://img.shields.io/conda/dn/bioconda/rambo-k.svg?style=flat
   :target: https://anaconda.org/bioconda/rambo-k
   :alt:   (downloads)
.. |docker_rambo-k| image:: https://quay.io/repository/biocontainers/rambo-k/status
   :target: https://quay.io/repository/biocontainers/rambo-k
.. _`rambo-k/tags`: https://quay.io/repository/biocontainers/rambo-k?tab=tags


.. raw:: html

    <script>
        var package = "rambo-k";
        var versions = ["1.21","1.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rambo-k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rambo-k/README.html