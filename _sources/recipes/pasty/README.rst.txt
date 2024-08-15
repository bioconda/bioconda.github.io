:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pasty'
.. highlight: bash

pasty
=====

.. conda:recipe:: pasty
   :replaces_section_title:
   :noindex:

   A tool easily taken advantage of for in silico serogrouping of Pseudomonas aeruginosa isolates

   :homepage: https://github.com/rpetit3/pasty
   :license: Apache-2.0
   :recipe: /`pasty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasty/meta.yaml>`_

   


.. conda:package:: pasty

   |downloads_pasty| |docker_pasty|

   :versions:
      
      

      ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends camlhmp: ``>=0.3.1``
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

      mamba install pasty

   and update with::

      mamba update pasty

  To create a new environment, run::

      mamba create --name myenvname pasty

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pasty:<tag>

   (see `pasty/tags`_ for valid values for ``<tag>``)


.. |downloads_pasty| image:: https://img.shields.io/conda/dn/bioconda/pasty.svg?style=flat
   :target: https://anaconda.org/bioconda/pasty
   :alt:   (downloads)
.. |docker_pasty| image:: https://quay.io/repository/biocontainers/pasty/status
   :target: https://quay.io/repository/biocontainers/pasty
.. _`pasty/tags`: https://quay.io/repository/biocontainers/pasty?tab=tags


.. raw:: html

    <script>
        var package = "pasty";
        var versions = ["2.0.2","2.0.2","2.0.0","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasty/README.html