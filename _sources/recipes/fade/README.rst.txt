:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fade'
.. highlight: bash

fade
====

.. conda:recipe:: fade
   :replaces_section_title:
   :noindex:

   fade is a D program that provides fast identification and removal of enzymatic fragmentation artifacts.

   :homepage: https://github.com/blachlylab/fade
   :license: MIT
   :recipe: /`fade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fade/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqaa070`

   


.. conda:package:: fade

   |downloads_fade| |docker_fade|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.5-0``,  ``0.3.6-0``

      

   
   :depends htslib: ``>=1.15,<1.23.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fade

   and update with::

      mamba update fade

  To create a new environment, run::

      mamba create --name myenvname fade

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fade:<tag>

   (see `fade/tags`_ for valid values for ``<tag>``)


.. |downloads_fade| image:: https://img.shields.io/conda/dn/bioconda/fade.svg?style=flat
   :target: https://anaconda.org/bioconda/fade
   :alt:   (downloads)
.. |docker_fade| image:: https://quay.io/repository/biocontainers/fade/status
   :target: https://quay.io/repository/biocontainers/fade
.. _`fade/tags`: https://quay.io/repository/biocontainers/fade?tab=tags


.. raw:: html

    <script>
        var package = "fade";
        var versions = ["0.6.0","0.5.5","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fade/README.html