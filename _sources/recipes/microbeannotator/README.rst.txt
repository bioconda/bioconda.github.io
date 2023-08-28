:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microbeannotator'
.. highlight: bash

microbeannotator
================

.. conda:recipe:: microbeannotator
   :replaces_section_title:
   :noindex:

   A user friendly microbe genome annotation tool

   :homepage: https://github.com/cruizperez/MicrobeAnnotator
   :license: Artistic License 2.0
   :recipe: /`microbeannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbeannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbeannotator/meta.yaml>`_

   


.. conda:package:: microbeannotator

   |downloads_microbeannotator| |docker_microbeannotator|

   :versions:
      
      

      ``2.0.5-0``

      

   
   :depends python: ``>=3.6,<3.8``
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

      mamba install microbeannotator

   and update with::

      mamba update microbeannotator

  To create a new environment, run::

      mamba create --name myenvname microbeannotator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/microbeannotator:<tag>

   (see `microbeannotator/tags`_ for valid values for ``<tag>``)


.. |downloads_microbeannotator| image:: https://img.shields.io/conda/dn/bioconda/microbeannotator.svg?style=flat
   :target: https://anaconda.org/bioconda/microbeannotator
   :alt:   (downloads)
.. |docker_microbeannotator| image:: https://quay.io/repository/biocontainers/microbeannotator/status
   :target: https://quay.io/repository/biocontainers/microbeannotator
.. _`microbeannotator/tags`: https://quay.io/repository/biocontainers/microbeannotator?tab=tags


.. raw:: html

    <script>
        var package = "microbeannotator";
        var versions = ["2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microbeannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microbeannotator/README.html