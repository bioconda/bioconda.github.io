:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'visceral-evaluatesegmentation'
.. highlight: bash

visceral-evaluatesegmentation
=============================

.. conda:recipe:: visceral-evaluatesegmentation
   :replaces_section_title:
   :noindex:

   EvaluateSegmentation is a tool that compares two volumes \(a test segmentation and a ground truth segmentation\) using 22 different metrics that were selected as a result of a comprehensive research into the metrics used in the medical volume segmentations.

   :homepage: https://github.com/Visceral-Project/EvaluateSegmentation
   :license: Apache License, Version 2.0
   :recipe: /`visceral-evaluatesegmentation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visceral-evaluatesegmentation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/visceral-evaluatesegmentation/meta.yaml>`_

   


.. conda:package:: visceral-evaluatesegmentation

   |downloads_visceral-evaluatesegmentation| |docker_visceral-evaluatesegmentation|

   :versions:
      
      

      ``2015.07.03-1``,  ``2015.07.03-0``,  ``2015.07.02-1``,  ``2015.07.02-0``

      

   
   :depends jpeg: ``>=9d,<10a``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libitk: ``<5``
   :depends libstdcxx-ng: ``>=7.5.0``
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

      mamba install visceral-evaluatesegmentation

   and update with::

      mamba update visceral-evaluatesegmentation

  To create a new environment, run::

      mamba create --name myenvname visceral-evaluatesegmentation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/visceral-evaluatesegmentation:<tag>

   (see `visceral-evaluatesegmentation/tags`_ for valid values for ``<tag>``)


.. |downloads_visceral-evaluatesegmentation| image:: https://img.shields.io/conda/dn/bioconda/visceral-evaluatesegmentation.svg?style=flat
   :target: https://anaconda.org/bioconda/visceral-evaluatesegmentation
   :alt:   (downloads)
.. |docker_visceral-evaluatesegmentation| image:: https://quay.io/repository/biocontainers/visceral-evaluatesegmentation/status
   :target: https://quay.io/repository/biocontainers/visceral-evaluatesegmentation
.. _`visceral-evaluatesegmentation/tags`: https://quay.io/repository/biocontainers/visceral-evaluatesegmentation?tab=tags


.. raw:: html

    <script>
        var package = "visceral-evaluatesegmentation";
        var versions = ["2015.07.03","2015.07.03","2015.07.02","2015.07.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/visceral-evaluatesegmentation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/visceral-evaluatesegmentation/README.html