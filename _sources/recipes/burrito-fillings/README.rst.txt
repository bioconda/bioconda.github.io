:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'burrito-fillings'
.. highlight: bash

burrito-fillings
================

.. conda:recipe:: burrito-fillings
   :replaces_section_title:
   :noindex:

   burrito\-fillings\: burrito application controllers for bioinformatics

   :homepage: https://github.com/biocore/burrito-fillings
   :license: BSD License
   :recipe: /`burrito-fillings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito-fillings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/burrito-fillings/meta.yaml>`_

   


.. conda:package:: burrito-fillings

   |downloads_burrito-fillings| |docker_burrito-fillings|

   :versions:
      
      

      ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends burrito: ``<1.0.0``
   :depends python: ``>=3.5``
   :depends scikit-bio: ``>=0.2.1,<0.3.0``
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

      mamba install burrito-fillings

   and update with::

      mamba update burrito-fillings

  To create a new environment, run::

      mamba create --name myenvname burrito-fillings

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/burrito-fillings:<tag>

   (see `burrito-fillings/tags`_ for valid values for ``<tag>``)


.. |downloads_burrito-fillings| image:: https://img.shields.io/conda/dn/bioconda/burrito-fillings.svg?style=flat
   :target: https://anaconda.org/bioconda/burrito-fillings
   :alt:   (downloads)
.. |docker_burrito-fillings| image:: https://quay.io/repository/biocontainers/burrito-fillings/status
   :target: https://quay.io/repository/biocontainers/burrito-fillings
.. _`burrito-fillings/tags`: https://quay.io/repository/biocontainers/burrito-fillings?tab=tags


.. raw:: html

    <script>
        var package = "burrito-fillings";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/burrito-fillings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/burrito-fillings/README.html