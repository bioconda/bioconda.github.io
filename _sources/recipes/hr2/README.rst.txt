:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hr2'
.. highlight: bash

hr2
===

.. conda:recipe:: hr2
   :replaces_section_title:
   :noindex:

   HR2 is a program to calculate elemental compositions for a given mass. This program and its documentation are Copyright \(c\) 1992\-2005 by Joerg Hau

   :homepage: http://fiehnlab.ucdavis.edu
   :license: GPL
   :recipe: /`hr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hr2/meta.yaml>`_

   


.. conda:package:: hr2

   |downloads_hr2| |docker_hr2|

   :versions:
      
      

      ``1.04-5``,  ``1.04-4``,  ``1.04-3``,  ``1.04-2``,  ``1.04-1``,  ``1.04-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install hr2

   and update with::

      mamba update hr2

  To create a new environment, run::

      mamba create --name myenvname hr2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hr2:<tag>

   (see `hr2/tags`_ for valid values for ``<tag>``)


.. |downloads_hr2| image:: https://img.shields.io/conda/dn/bioconda/hr2.svg?style=flat
   :target: https://anaconda.org/bioconda/hr2
   :alt:   (downloads)
.. |docker_hr2| image:: https://quay.io/repository/biocontainers/hr2/status
   :target: https://quay.io/repository/biocontainers/hr2
.. _`hr2/tags`: https://quay.io/repository/biocontainers/hr2?tab=tags


.. raw:: html

    <script>
        var package = "hr2";
        var versions = ["1.04","1.04","1.04","1.04","1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hr2/README.html