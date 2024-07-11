:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kalign2'
.. highlight: bash

kalign2
=======

.. conda:recipe:: kalign2
   :replaces_section_title:
   :noindex:

   Kalign is a fast and accurate multiple sequence alignment algorithm designed to align large numbers of protein sequences.

   :homepage: http://msa.sbc.su.se/cgi-bin/msa.cgi
   :license: GPLv2
   :recipe: /`kalign2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign2/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-6-298`

   


.. conda:package:: kalign2

   |downloads_kalign2| |docker_kalign2|

   :versions:
      
      

      ``2.04-7``,  ``2.04-6``,  ``2.04-5``,  ``2.04-4``,  ``2.04-3``,  ``2.04-2``,  ``2.04-1``,  ``2.04-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install kalign2

   and update with::

      mamba update kalign2

  To create a new environment, run::

      mamba create --name myenvname kalign2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kalign2:<tag>

   (see `kalign2/tags`_ for valid values for ``<tag>``)


.. |downloads_kalign2| image:: https://img.shields.io/conda/dn/bioconda/kalign2.svg?style=flat
   :target: https://anaconda.org/bioconda/kalign2
   :alt:   (downloads)
.. |docker_kalign2| image:: https://quay.io/repository/biocontainers/kalign2/status
   :target: https://quay.io/repository/biocontainers/kalign2
.. _`kalign2/tags`: https://quay.io/repository/biocontainers/kalign2?tab=tags


.. raw:: html

    <script>
        var package = "kalign2";
        var versions = ["2.04","2.04","2.04","2.04","2.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kalign2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kalign2/README.html