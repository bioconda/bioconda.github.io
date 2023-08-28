:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'justbackoff'
.. highlight: bash

justbackoff
===========

.. conda:recipe:: justbackoff
   :replaces_section_title:
   :noindex:

   Simple backoff algorithm in Python

   :homepage: https://github.com/admiralobvious/justbackoff
   :license: MIT / MIT
   :recipe: /`justbackoff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/justbackoff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/justbackoff/meta.yaml>`_

   


.. conda:package:: justbackoff

   |downloads_justbackoff| |docker_justbackoff|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends python: 
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

      mamba install justbackoff

   and update with::

      mamba update justbackoff

  To create a new environment, run::

      mamba create --name myenvname justbackoff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/justbackoff:<tag>

   (see `justbackoff/tags`_ for valid values for ``<tag>``)


.. |downloads_justbackoff| image:: https://img.shields.io/conda/dn/bioconda/justbackoff.svg?style=flat
   :target: https://anaconda.org/bioconda/justbackoff
   :alt:   (downloads)
.. |docker_justbackoff| image:: https://quay.io/repository/biocontainers/justbackoff/status
   :target: https://quay.io/repository/biocontainers/justbackoff
.. _`justbackoff/tags`: https://quay.io/repository/biocontainers/justbackoff?tab=tags


.. raw:: html

    <script>
        var package = "justbackoff";
        var versions = ["0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/justbackoff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/justbackoff/README.html