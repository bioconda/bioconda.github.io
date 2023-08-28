:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parallel-virfinder'
.. highlight: bash

parallel-virfinder
==================

.. conda:recipe:: parallel-virfinder
   :replaces_section_title:
   :noindex:

   parallel\-virfinder\, split virfinder execution in chuncks

   :homepage: https://github.com/quadram-institute-bioscience/parallel-virfinder
   :license: Apache 2.0
   :recipe: /`parallel-virfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-virfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-virfinder/meta.yaml>`_

   


.. conda:package:: parallel-virfinder

   |downloads_parallel-virfinder| |docker_parallel-virfinder|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends python: ``>=3.6``
   :depends r-virfinder: ``1.1.*``
   :depends rich: 
   :depends seqfu: ``>=1.14.0``
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

      mamba install parallel-virfinder

   and update with::

      mamba update parallel-virfinder

  To create a new environment, run::

      mamba create --name myenvname parallel-virfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parallel-virfinder:<tag>

   (see `parallel-virfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_parallel-virfinder| image:: https://img.shields.io/conda/dn/bioconda/parallel-virfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/parallel-virfinder
   :alt:   (downloads)
.. |docker_parallel-virfinder| image:: https://quay.io/repository/biocontainers/parallel-virfinder/status
   :target: https://quay.io/repository/biocontainers/parallel-virfinder
.. _`parallel-virfinder/tags`: https://quay.io/repository/biocontainers/parallel-virfinder?tab=tags


.. raw:: html

    <script>
        var package = "parallel-virfinder";
        var versions = ["0.3.1","0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parallel-virfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parallel-virfinder/README.html