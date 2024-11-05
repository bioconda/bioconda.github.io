:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bubblegun'
.. highlight: bash

bubblegun
=========

.. conda:recipe:: bubblegun
   :replaces_section_title:
   :noindex:

   BubbleGun is a tool for detecting bubbles and superbubbles in GFA graphs\, and reports them and their nested structures.

   :homepage: https://github.com/fawaz-dabbaghieh/bubble_gun
   :documentation: https://github.com/fawaz-dabbaghieh/bubble_gun/blob/v1.1.9/README.md
   
   :developer docs: https://github.com/fawaz-dabbaghieh
   :license: MIT / MIT
   :recipe: /`bubblegun <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bubblegun>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bubblegun/meta.yaml>`_

   


.. conda:package:: bubblegun

   |downloads_bubblegun| |docker_bubblegun|

   :versions:
      
      

      ``1.1.9-0``

      

   
   :depends python: ``>=3.6``
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

      mamba install bubblegun

   and update with::

      mamba update bubblegun

  To create a new environment, run::

      mamba create --name myenvname bubblegun

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bubblegun:<tag>

   (see `bubblegun/tags`_ for valid values for ``<tag>``)


.. |downloads_bubblegun| image:: https://img.shields.io/conda/dn/bioconda/bubblegun.svg?style=flat
   :target: https://anaconda.org/bioconda/bubblegun
   :alt:   (downloads)
.. |docker_bubblegun| image:: https://quay.io/repository/biocontainers/bubblegun/status
   :target: https://quay.io/repository/biocontainers/bubblegun
.. _`bubblegun/tags`: https://quay.io/repository/biocontainers/bubblegun?tab=tags


.. raw:: html

    <script>
        var package = "bubblegun";
        var versions = ["1.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bubblegun/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bubblegun/README.html