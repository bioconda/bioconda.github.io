:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funnel'
.. highlight: bash

funnel
======

.. conda:recipe:: funnel
   :replaces_section_title:
   :noindex:

   Funnel is a toolkit for distributed task execution via a simple\, standard API

   :homepage: https://ohsu-comp-bio.github.io/funnel/
   :license: MIT
   :recipe: /`funnel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funnel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funnel/meta.yaml>`_

   


.. conda:package:: funnel

   |downloads_funnel| |docker_funnel|

   :versions:
      
      

      ``0.9.0-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
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

      mamba install funnel

   and update with::

      mamba update funnel

  To create a new environment, run::

      mamba create --name myenvname funnel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/funnel:<tag>

   (see `funnel/tags`_ for valid values for ``<tag>``)


.. |downloads_funnel| image:: https://img.shields.io/conda/dn/bioconda/funnel.svg?style=flat
   :target: https://anaconda.org/bioconda/funnel
   :alt:   (downloads)
.. |docker_funnel| image:: https://quay.io/repository/biocontainers/funnel/status
   :target: https://quay.io/repository/biocontainers/funnel
.. _`funnel/tags`: https://quay.io/repository/biocontainers/funnel?tab=tags


.. raw:: html

    <script>
        var package = "funnel";
        var versions = ["0.9.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funnel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funnel/README.html