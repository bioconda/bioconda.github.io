:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svmlight'
.. highlight: bash

svmlight
========

.. conda:recipe:: svmlight
   :replaces_section_title:
   :noindex:

   SVMLight Library by Thorsten Joachim

   :homepage: http://svmlight.joachims.org/
   :license: Modified MIT
   :recipe: /`svmlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svmlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svmlight/meta.yaml>`_

   


.. conda:package:: svmlight

   |downloads_svmlight| |docker_svmlight|

   :versions:
      
      

      ``6.02-6``,  ``6.02-5``,  ``6.02-4``,  ``6.02-3``,  ``6.02-2``,  ``6.02-1``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install svmlight

   and update with::

      mamba update svmlight

  To create a new environment, run::

      mamba create --name myenvname svmlight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svmlight:<tag>

   (see `svmlight/tags`_ for valid values for ``<tag>``)


.. |downloads_svmlight| image:: https://img.shields.io/conda/dn/bioconda/svmlight.svg?style=flat
   :target: https://anaconda.org/bioconda/svmlight
   :alt:   (downloads)
.. |docker_svmlight| image:: https://quay.io/repository/biocontainers/svmlight/status
   :target: https://quay.io/repository/biocontainers/svmlight
.. _`svmlight/tags`: https://quay.io/repository/biocontainers/svmlight?tab=tags


.. raw:: html

    <script>
        var package = "svmlight";
        var versions = ["6.02","6.02","6.02","6.02","6.02"];
    </script>





Notes
-----
License requires users to cite 
T. Joachims\, Making large\-Scale SVM Learning
Practical. Advances in Kernel Methods \- Support Vector
Learning\, B. Schölkopf and C. Burges and A. Smola \(ed.\)\,
MIT\-Press\, 1999. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svmlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svmlight/README.html