:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mixem'
.. highlight: bash

mixem
=====

.. conda:recipe:: mixem
   :replaces_section_title:
   :noindex:

   Expectation\-Maximization \(EM\) algorithm for fitting mixtures of probability distributions

   :homepage: https://github.com/sseemayer/mixem
   :license: MIT / MIT
   :recipe: /`mixem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mixem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mixem/meta.yaml>`_

   


.. conda:package:: mixem

   |downloads_mixem| |docker_mixem|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends numpy: ``>=1.7.0``
   :depends python: 
   :depends scipy: ``>=0.14.0``
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

      mamba install mixem

   and update with::

      mamba update mixem

  To create a new environment, run::

      mamba create --name myenvname mixem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mixem:<tag>

   (see `mixem/tags`_ for valid values for ``<tag>``)


.. |downloads_mixem| image:: https://img.shields.io/conda/dn/bioconda/mixem.svg?style=flat
   :target: https://anaconda.org/bioconda/mixem
   :alt:   (downloads)
.. |docker_mixem| image:: https://quay.io/repository/biocontainers/mixem/status
   :target: https://quay.io/repository/biocontainers/mixem
.. _`mixem/tags`: https://quay.io/repository/biocontainers/mixem?tab=tags


.. raw:: html

    <script>
        var package = "mixem";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mixem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mixem/README.html