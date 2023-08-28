:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lap'
.. highlight: bash

lap
===

.. conda:recipe:: lap
   :replaces_section_title:
   :noindex:

   De novo genome assembly evaluation

   :homepage: http://assembly-eval.sourceforge.net/
   :license: 
   :recipe: /`lap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lap/meta.yaml>`_

   


.. conda:package:: lap

   |downloads_lap| |docker_lap|

   :versions:
      
      

      ``1.1.r186-0``

      

   
   :depends bowtie2: 
   :depends libgcc: 
   :depends python: ``2.7*``
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

      mamba install lap

   and update with::

      mamba update lap

  To create a new environment, run::

      mamba create --name myenvname lap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lap:<tag>

   (see `lap/tags`_ for valid values for ``<tag>``)


.. |downloads_lap| image:: https://img.shields.io/conda/dn/bioconda/lap.svg?style=flat
   :target: https://anaconda.org/bioconda/lap
   :alt:   (downloads)
.. |docker_lap| image:: https://quay.io/repository/biocontainers/lap/status
   :target: https://quay.io/repository/biocontainers/lap
.. _`lap/tags`: https://quay.io/repository/biocontainers/lap?tab=tags


.. raw:: html

    <script>
        var package = "lap";
        var versions = ["1.1.r186"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lap/README.html