:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmvc'
.. highlight: bash

mmvc
====

.. conda:recipe:: mmvc
   :replaces_section_title:
   :noindex:

   Call variants based on a Bayesian multinomial mixture model.

   :homepage: https://github.com/veg/mmvc
   :license: MIT
   :recipe: /`mmvc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmvc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmvc/meta.yaml>`_

   


.. conda:package:: mmvc

   |downloads_mmvc| |docker_mmvc|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends julia: ``0.6.1.*``
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

      mamba install mmvc

   and update with::

      mamba update mmvc

  To create a new environment, run::

      mamba create --name myenvname mmvc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmvc:<tag>

   (see `mmvc/tags`_ for valid values for ``<tag>``)


.. |downloads_mmvc| image:: https://img.shields.io/conda/dn/bioconda/mmvc.svg?style=flat
   :target: https://anaconda.org/bioconda/mmvc
   :alt:   (downloads)
.. |docker_mmvc| image:: https://quay.io/repository/biocontainers/mmvc/status
   :target: https://quay.io/repository/biocontainers/mmvc
.. _`mmvc/tags`: https://quay.io/repository/biocontainers/mmvc?tab=tags


.. raw:: html

    <script>
        var package = "mmvc";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmvc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmvc/README.html